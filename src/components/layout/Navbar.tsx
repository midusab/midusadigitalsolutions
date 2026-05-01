import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect, MouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Magnetic from "../common/Magnetic";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/#services", isHash: true },
    { name: "Portfolio", href: "/portfolio", isHash: false },
    { name: "About", href: "/about", isHash: false },
    { name: "Contact", href: "/contact", isHash: false },
  ];

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    if (link.isHash && location.pathname !== "/") {
      // If we are not on home page and click a hash link, go to home first
      return;
    }
    
    if (link.isHash) {
      e.preventDefault();
      const id = link.href.split("#")[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4 bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100" : "py-6 bg-transparent"
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Magnetic strength={0.15}>
          <Link
            to="/"
            aria-label="Midusa Digital Home"
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center font-display font-bold text-xl text-white shadow-[0_5px_15px_rgba(0,102,255,0.2)] group-hover:shadow-primary/40 transition-shadow duration-300">
              M
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-slate-900">
              Midusa<span className="text-primary group-hover:text-secondary transition-colors duration-300">Digital</span>
            </span>
          </Link>
        </Magnetic>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link, idx) => (
            <motion.div
              key={`desktop-nav-${link.name}-${idx}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              role="listitem"
            >
              <Link
                to={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                aria-current={(link.isHash && location.hash === link.href.split("#")[1]) || location.pathname === link.href ? "page" : undefined}
                className={`text-sm font-bold transition-colors relative group ${
                  (link.isHash && location.hash === link.href.split("#")[1]) || location.pathname === link.href
                    ? "text-primary"
                    : "text-slate-600 hover:text-primary"
                }`}
              >
                {link.name}
                {((link.isHash && location.hash === link.href.split("#")[1]) || location.pathname === link.href) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-primary text-white rounded-full text-sm font-bold transition-all shadow-lg shadow-primary/20 hover:bg-blue-600 active:scale-95"
            >
              Get a Quote
            </Link>
          </motion.div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className={`p-2 rounded-full transition-all duration-300 ${
              mobileMenuOpen ? "bg-slate-100 text-slate-900" : "bg-primary/5 text-primary hover:bg-primary/10"
            }`}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-10 flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <Link
                  key={`mobile-nav-${link.name}-${idx}`}
                  to={link.href}
                  className="text-lg font-bold text-slate-600 hover:text-primary transition-colors"
                  onClick={(e) => handleLinkClick(e, link)}
                >
                  {link.name}
                </Link>
              ))}
            <Link
              to="/contact"
              className="w-full py-4 bg-primary text-white rounded-2xl font-display font-semibold flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start Your Project <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </nav>
  );
}
