/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AnimatePresence } from "motion/react";
import Navbar from "./components/layout/Navbar.tsx";
import Footer from "./components/layout/Footer.tsx";
import WhatsAppButton from "./components/common/WhatsAppButton.tsx";
import Home from "./pages/Home.tsx";

export default function App() {
  return (
    <div className="relative min-h-screen bg-white selection:bg-primary/20 scroll-smooth">
      <AnimatePresence mode="wait">
        <Navbar key="site-navbar" />
        <Home key="home-page" />
        <Footer key="site-footer" />
        <WhatsAppButton key="whatsapp-fab" />
      </AnimatePresence>
    </div>
  );
}
