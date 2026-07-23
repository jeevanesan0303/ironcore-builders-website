import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

export default function Navbar({ currentView, setView, activeSection, onOpenQuote }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', target: 'home', isSection: true },
    { name: 'About', target: 'about', isSection: true },
    { name: 'Services', target: 'services', isSection: true },
    { name: 'Projects', target: 'projects', isSection: true },
    { name: 'Process', target: 'process', isSection: true },
    { name: 'Contact', target: 'contact', isSection: true }
  ];

  const handleNavClick = (link) => {
    setIsOpen(false);
    if (link.isSection) {
      if (currentView !== 'home') {
        setView('home');
        // Wait for Home page to mount then scroll
        setTimeout(() => {
          const el = document.getElementById(link.target);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const el = document.getElementById(link.target);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      setView(link.target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-t-4 border-gold ${
        isScrolled
          ? 'bg-ink/95 backdrop-blur-md py-4 shadow-lg shadow-black/30'
          : 'bg-gradient-to-b from-black/80 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick({ target: 'home', isSection: true })}
          className="flex items-center gap-2 group focus:outline-none"
        >
          <img
            src="/images/iron-core-logo-official.png"
            alt="Iron Core Builders Logo"
            className="h-16 w-auto object-contain filter drop-shadow-md group-hover:scale-102 transition-transform duration-300"
          />
        </button>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isLinkActive =
              link.isSection
                ? currentView === 'home' && activeSection === link.target
                : currentView === link.target;

            return (
              <button
                key={link.name}
                onClick={() => handleNavClick(link)}
                className={`text-sm font-semibold tracking-wider uppercase nav-link-underline hover:text-gold transition-colors duration-300 focus:outline-none ${
                  isLinkActive ? 'text-gold active' : 'text-gray-300'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Action Button & Contact */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex flex-col text-right">
            <a
              href="tel:+94706451114"
              className="flex items-center gap-2 text-xs text-gray-300 hover:text-gold transition-colors font-medium"
            >
              <Phone size={11} className="text-gold" />
              <span>+94 70 645 1114</span>
            </a>
            <a
              href="tel:+94772346434"
              className="flex items-center gap-2 text-xs text-gray-300 hover:text-gold transition-colors font-medium mt-0.5"
            >
              <Phone size={11} className="text-gold" />
              <span>+94 77 234 6434</span>
            </a>
          </div>
          <button
            onClick={onOpenQuote}
            className="px-5 py-2.5 border border-gold text-gold hover:bg-gold hover:text-ink font-bold text-xs uppercase tracking-wider transition-all duration-300 rounded-sm"
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-300 hover:text-gold p-2 transition-colors focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[88px] bg-ink/95 border-b border-white/10 backdrop-blur-lg transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="px-6 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isLinkActive =
              link.isSection
                ? currentView === 'home' && activeSection === link.target
                : currentView === link.target;

            return (
              <button
                key={link.name}
                onClick={() => handleNavClick(link)}
                className={`text-left text-base font-semibold tracking-widest uppercase py-2.5 border-b border-white/5 hover:text-gold transition-colors focus:outline-none ${
                  isLinkActive ? 'text-gold' : 'text-gray-300'
                }`}
              >
                {link.name}
              </button>
            );
          })}
          <div className="flex flex-col gap-4 mt-4 pt-4 border-t border-white/10">
            <a
              href="tel:+94706451114"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-gold transition-colors font-medium py-1"
            >
              <Phone size={14} className="text-gold" />
              <span>+94 70 645 1114</span>
            </a>
            <a
              href="tel:+94772346434"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-gold transition-colors font-medium py-1"
            >
              <Phone size={14} className="text-gold" />
              <span>+94 77 234 6434</span>
            </a>
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 bg-gold text-ink font-bold text-sm uppercase tracking-wider transition-all duration-300 text-center rounded-sm hover:bg-gold/90"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
