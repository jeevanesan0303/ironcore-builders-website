import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer({ currentView, setView }) {
  const handleNavClick = (target, isSection) => {
    if (isSection) {
      if (currentView !== 'home') {
        setView('home');
        setTimeout(() => {
          const el = document.getElementById(target);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setView(target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040a10] text-gray-400 pt-16 pb-8 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1: Brand & Logo */}
        <div className="flex flex-col gap-6">
          <img
            src="/images/iron-core-logo-official.png"
            alt="Iron Core Builders Official"
            className="h-20 w-auto object-contain self-start filter drop-shadow-lg"
          />
          <p className="text-sm text-gray-400 leading-relaxed font-light">
            Dependable building, infrastructure and machinery solutions delivered with integrity and professional care across Sri Lanka.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-sm bg-white/5 hover:bg-gold hover:text-ink text-gray-300 flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-gold"
              title="Facebook"
            >
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-sm bg-white/5 hover:bg-gold hover:text-ink text-gray-300 flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-gold"
              title="LinkedIn"
            >
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-sm bg-white/5 hover:bg-gold hover:text-ink text-gray-300 flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-gold"
              title="Instagram"
            >
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-5">
          <h4 className="text-gold font-bold uppercase tracking-wider text-xs border-b border-gold/20 pb-2">
            Quick Links
          </h4>
          <nav className="flex flex-col gap-3 text-sm">
            <button
              onClick={() => handleNavClick('home', true)}
              className="text-left hover:text-gold transition-colors duration-200 self-start"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about', true)}
              className="text-left hover:text-gold transition-colors duration-200 self-start"
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick('services', true)}
              className="text-left hover:text-gold transition-colors duration-200 self-start"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick('projects', true)}
              className="text-left hover:text-gold transition-colors duration-200 self-start"
            >
              Projects
            </button>
            <button
              onClick={() => handleNavClick('process', true)}
              className="text-left hover:text-gold transition-colors duration-200 self-start"
            >
              Process
            </button>
            <button
              onClick={() => handleNavClick('contact', true)}
              className="text-left hover:text-gold transition-colors duration-200 self-start"
            >
              Contact
            </button>
          </nav>
        </div>

        {/* Column 3: Services */}
        <div className="flex flex-col gap-5">
          <h4 className="text-gold font-bold uppercase tracking-wider text-xs border-b border-gold/20 pb-2">
            Services
          </h4>
          <nav className="flex flex-col gap-3 text-sm">
            <button
              onClick={() => handleNavClick('services', true)}
              className="text-left hover:text-gold transition-colors duration-200 self-start"
            >
              Building Construction
            </button>
            <button
              onClick={() => handleNavClick('services', true)}
              className="text-left hover:text-gold transition-colors duration-200 self-start"
            >
              Road Works
            </button>
            <button
              onClick={() => handleNavClick('services', true)}
              className="text-left hover:text-gold transition-colors duration-200 self-start"
            >
              Heavy Machinery
            </button>
            <button
              onClick={() => handleNavClick('services', true)}
              className="text-left hover:text-gold transition-colors duration-200 self-start"
            >
              Renovation
            </button>
          </nav>
        </div>

        {/* Column 4: Contact Info */}
        <div className="flex flex-col gap-5">
          <h4 className="text-gold font-bold uppercase tracking-wider text-xs border-b border-gold/20 pb-2">
            Contact Info
          </h4>
          <div className="flex flex-col gap-3 text-sm font-light">
            <p className="leading-relaxed">
              <strong className="block text-gray-300 font-semibold mb-1">Phone:</strong>
              <a href="tel:+94706451114" className="hover:text-gold transition-colors block">
                +94 70 645 1114
              </a>
              <a href="tel:+94772346434" className="hover:text-gold transition-colors block mt-1">
                +94 77 234 6434
              </a>
            </p>
            <p className="leading-relaxed">
              <strong className="block text-gray-300 font-semibold mb-1">Email:</strong>
              <a href="mailto:ironcoreb@gmail.com" className="hover:text-gold transition-colors">
                ironcoreb@gmail.com
              </a>
            </p>
            <p className="leading-relaxed">
              <strong className="block text-gray-300 font-semibold mb-1">Address:</strong>
              Nagarkovil East, Nagarkovil, Sri Lanka
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-gray-500">
        <span>© 2026 Iron Core Builders (Pvt) Ltd. All rights reserved.</span>
        <div className="flex items-center gap-6">
          <span>Built for strength. Designed for trust.</span>
          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-sm bg-white/5 hover:bg-gold hover:text-ink flex items-center justify-center text-gray-400 transition-all duration-300 border border-white/5"
            title="Scroll to Top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
