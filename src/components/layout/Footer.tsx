import { Link } from "react-router-dom";
import { Send, Music2, Twitter, Linkedin, Facebook, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-24 pb-12 bg-white border-t border-slate-100">
      <div className="section-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 whitespace-normal">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center font-display font-bold text-xl text-white shadow-[0_5px_15px_rgba(0,102,255,0.2)]">
                M
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-slate-900">
                Midusa<span className="text-primary">Digital</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              We specialize in creating premium digital experiences that help businesses attract more clients and grow their online authority.
            </p>
            <div className="flex gap-4">
              {[Facebook, Music2, Twitter, Linkedin].map((Icon, i) => (
                <a key={`footer-social-${i}`} href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-primary/5 transition-all border border-slate-100 shadow-sm">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-display font-bold text-slate-900 leading-none">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "services", href: "/#services" },
                { name: "portfolio", href: "/portfolio" },
                { name: "about", href: "/about" },
                { name: "contact us", href: "/contact" }
              ].map((link, idx) => (
                <li key={`footer-link-${idx}`}>
                  <Link to={link.href} className="text-slate-500 hover:text-primary text-sm transition-colors flex items-center gap-2 font-medium group">
                    <span className="w-1 h-1 rounded-full bg-primary/40 block group-hover:bg-primary transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-display font-bold text-slate-900 leading-none">Services</h4>
            <ul className="space-y-3">
              {["Business Websites", "Portfolio Design", "Restaurant Setup", "E-commerce", "Landing Pages"].map((service, idx) => (
                <li key={`footer-service-${idx}`}>
                  <a href="#services" className="text-slate-500 hover:text-primary text-sm transition-colors flex items-center gap-2 font-medium group">
                    <span className="w-1 h-1 rounded-full bg-primary/40 block group-hover:bg-primary transition-colors"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-display font-bold text-slate-900 leading-none">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-500 text-sm font-medium">
                <MapPin size={18} className="text-primary flex-shrink-0" />
                <span>Kakamega, Kenya</span>
              </li>
              <li className="flex items-center gap-3 text-slate-500 text-sm font-medium">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <span>+254 112 478 220</span>
              </li>
              <li className="flex items-center gap-3 text-slate-500 text-sm font-medium">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <span>bochieng228@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-xs font-medium">
            © {currentYear} Midusa Digital. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-slate-400 font-medium">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
