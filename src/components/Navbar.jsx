import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

export default function Navbar({ currentView, setView, activeSection, onOpenQuote }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

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

  const handleServiceClick = (targetId) => {
    setIsOpen(false);
    if (currentView !== 'home') {
      setView('home');
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.classList.add('active-service-card');
          setTimeout(() => {
            el.classList.remove('active-service-card');
          }, 3000);
        }
      }, 150);
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('active-service-card');
        setTimeout(() => {
          el.classList.remove('active-service-card');
        }, 3000);
      }
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

            if (link.name === 'Services') {
              return (
                <div key={link.name} className="relative group py-2">
                  <button
                    onClick={() => handleNavClick(link)}
                    className={`text-sm font-semibold tracking-wider uppercase nav-link-underline hover:text-gold transition-colors duration-300 focus:outline-none flex items-center gap-1.5 ${
                      isLinkActive ? 'text-gold active' : 'text-gray-300'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300 text-gray-400 group-hover:text-gold" />
                  </button>
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-ink/95 border border-white/10 border-t-gold rounded-sm shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 backdrop-blur-md">
                    <div className="py-2 flex flex-col">
                      {[
                        { name: 'Building', target: 'service-building' },
                        { name: 'Road Works', target: 'service-road-works' },
                        { name: 'Heavy Machinery', target: 'service-heavy-machinery' },
                        { name: 'Renovation', target: 'service-renovation' }
                      ].map((service) => (
                        <button
                          key={service.name}
                          onClick={() => handleServiceClick(service.target)}
                          className="px-4 py-2.5 text-left text-xs font-semibold tracking-wider text-gray-300 hover:text-gold hover:bg-white/5 transition-all duration-300 uppercase border-b border-white/5 last:border-0"
                        >
                          {service.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

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

            if (link.name === 'Services') {
              return (
                <div key={link.name} className="flex flex-col border-b border-white/5">
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className={`text-left text-base font-semibold tracking-widest uppercase py-2.5 hover:text-gold transition-colors focus:outline-none flex items-center justify-between ${
                      isLinkActive ? 'text-gold' : 'text-gray-300'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown size={18} className={`transition-transform duration-300 text-gray-400 ${isMobileServicesOpen ? 'rotate-180 text-gold' : ''}`} />
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden flex flex-col pl-4 bg-white/2 ${
                      isMobileServicesOpen ? 'max-h-60 opacity-100 py-1' : 'max-h-0 opacity-0 py-0'
                    }`}
                  >
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        handleNavClick(link);
                      }}
                      className="text-left text-xs font-bold tracking-widest uppercase py-2 text-gray-400 hover:text-gold focus:outline-none"
                    >
                      All Services
                    </button>
                    {[
                      { name: 'Building', target: 'service-building' },
                      { name: 'Road Works', target: 'service-road-works' },
                      { name: 'Heavy Machinery', target: 'service-heavy-machinery' },
                      { name: 'Renovation', target: 'service-renovation' }
                    ].map((service) => (
                      <button
                        key={service.name}
                        onClick={() => {
                          setIsOpen(false);
                          handleServiceClick(service.target);
                        }}
                        className="text-left text-xs font-semibold tracking-widest uppercase py-2 text-gray-300 hover:text-gold focus:outline-none"
                      >
                        {service.name}
                      </button>
                    ))}
                  </div>
                </div>
              );
            }

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
          </div>
        </div>
      </div>
    </header>
  );
}
