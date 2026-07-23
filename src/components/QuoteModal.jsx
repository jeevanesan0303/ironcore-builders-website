import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Building Construction',
    budget: '$50,000 - $150,000',
    description: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      projectType: 'Building Construction',
      budget: '$50,000 - $150,000',
      description: ''
    });
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-lg glass-panel text-white rounded-sm overflow-hidden shadow-2xl transition-all duration-300 transform scale-100 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/20">
          <h3 className="text-lg font-bold uppercase tracking-wider text-gold">
            Request a Quote
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 transition-colors focus:outline-none"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-wider font-semibold text-gray-400 mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/15 px-4 py-2.5 text-sm text-white focus:border-gold focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-semibold text-gray-400 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+94 70 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/5 border border-white/15 px-4 py-2.5 text-sm text-white focus:border-gold focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-semibold text-gray-400 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/15 px-4 py-2.5 text-sm text-white focus:border-gold focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-semibold text-gray-400 mb-1.5">
                    Project Type *
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-navy border border-white/15 px-3 py-2.5 text-sm text-white focus:border-gold focus:outline-none transition-colors"
                  >
                    <option value="Building Construction">Building Construction</option>
                    <option value="Road Works">Road Works</option>
                    <option value="Renovation">Renovation</option>
                    <option value="Infrastructure">Infrastructure</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-semibold text-gray-400 mb-1.5">
                    Estimated Budget *
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-navy border border-white/15 px-3 py-2.5 text-sm text-white focus:border-gold focus:outline-none transition-colors"
                  >
                    <option value="Under $10,000">Under $10,000</option>
                    <option value="$10,000 - $50,000">$10,000 - $50,000</option>
                    <option value="$50,000 - $150,000">$50,000 - $150,000</option>
                    <option value="Over $150,000">Over $150,000</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider font-semibold text-gray-400 mb-1.5">
                  Project Description & Timeline
                </label>
                <textarea
                  placeholder="Describe your site details, timeline, and expectations..."
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-white/5 border border-white/15 px-4 py-2.5 text-sm text-white focus:border-gold focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full py-3 bg-gold text-ink font-extrabold text-sm uppercase tracking-wider hover:bg-gold-hover transition-colors flex items-center justify-center gap-2 rounded-sm"
              >
                <Send size={16} />
                <span>Submit Quote Request</span>
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-8">
              <CheckCircle2 size={64} className="text-gold mb-4 animate-bounce" />
              <h4 className="text-xl font-bold uppercase tracking-wider text-white mb-2">
                Request Received!
              </h4>
              <p className="text-sm text-gray-400 max-w-sm leading-relaxed mb-6">
                Thank you, <strong className="text-gold">{formData.name}</strong>. We will review your project details for <span className="underline">{formData.projectType}</span> and call you back shortly.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 border border-gold text-gold hover:bg-gold hover:text-ink font-bold text-xs uppercase tracking-wider transition-all duration-300"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
