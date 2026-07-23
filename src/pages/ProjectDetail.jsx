import React, { useState, useEffect } from 'react';
import { ArrowLeft, MapPin, Building, Calendar, CheckCircle2, ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

export default function ProjectDetail({ project, onBack }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setActiveImageIndex(0);
  }, [project]);

  if (!project) return null;

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev + 1) % project.images.length);
  };

  return (
    <div className="bg-ink min-h-screen text-gray-200 pt-32 pb-24 animate-page-entrance">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold hover:text-white transition-colors duration-200 mb-10 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </button>

        {/* Project Header Info and Main Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left: Specs & Summary */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="text-gold text-xs font-bold uppercase tracking-widest mb-3">Project Detail</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-tight font-display tracking-tight text-white mb-6">
              {project.title}
            </h2>
            <p className="text-sm text-gray-300 font-light leading-relaxed mb-10">
              {project.description ||
                `A premium and custom-built ${project.type.toLowerCase()} project completed in Sri Lanka, designed and executed with exceptional quality materials, structural supervision, and close attention to client specifications.`}
            </p>

            {/* Specifications Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full border-t border-white/10 pt-8">
              <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-sm">
                <MapPin size={20} className="text-gold shrink-0" />
                <div className="text-left">
                  <span className="block text-[9px] text-gray-400 uppercase tracking-wider">Location</span>
                  <span className="text-sm font-semibold text-white">{project.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-sm">
                <Building size={20} className="text-gold shrink-0" />
                <div className="text-left">
                  <span className="block text-[9px] text-gray-400 uppercase tracking-wider">Project Type</span>
                  <span className="text-sm font-semibold text-white">{project.type}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-sm">
                <Calendar size={20} className="text-gold shrink-0" />
                <div className="text-left">
                  <span className="block text-[9px] text-gray-400 uppercase tracking-wider">Duration</span>
                  <span className="text-sm font-semibold text-white">{project.duration}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-sm">
                <CheckCircle2 size={20} className="text-gold shrink-0" />
                <div className="text-left">
                  <span className="block text-[9px] text-gray-400 uppercase tracking-wider">Completion</span>
                  <span className="text-sm font-semibold text-white">{project.completion}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Featured Main Image display */}
          <div className="lg:col-span-7 w-full relative group">
            <div className="border border-white/15 overflow-hidden bg-black relative h-[450px]">
              <img
                src={`/images/${project.folder}/${project.images[activeImageIndex]}`}
                alt={`${project.title} featured`}
                className="w-full h-full object-cover transition-all duration-500 filter brightness-95"
              />
              {/* Image Controls */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs text-white font-medium bg-black/60 px-3 py-1 rounded-sm">
                  Image {activeImageIndex + 1} of {project.images.length}
                </span>
                <button
                  onClick={() => setIsLightboxOpen(true)}
                  className="w-8 h-8 rounded-sm bg-black/60 hover:bg-gold text-white hover:text-ink flex items-center justify-center transition-colors"
                  title="Expand Fullscreen"
                >
                  <Maximize2 size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Project Gallery Thumbnails Grid */}
        <div className="border-t border-white/10 pt-12 text-left">
          <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-6">
            Project Gallery
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {project.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`relative aspect-[4/3] border overflow-hidden cursor-pointer bg-navy transition-all duration-300 ${
                  activeImageIndex === index
                    ? 'border-gold scale-98 shadow-md'
                    : 'border-white/10 opacity-60 hover:opacity-100 hover:scale-98'
                }`}
              >
                <img
                  src={`/images/${project.folder}/${image}`}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[120] bg-black/95 flex items-center justify-center p-4">
          {/* Close button */}
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 text-gray-400 hover:text-white p-2 transition-colors z-50 focus:outline-none"
          >
            <X size={28} />
          </button>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gold p-3 bg-black/40 hover:bg-black/60 transition-all z-50 rounded-sm focus:outline-none"
          >
            <ChevronLeft size={36} />
          </button>

          {/* Image Container */}
          <div className="relative max-w-5xl max-h-[80vh] w-full flex items-center justify-center">
            <img
              src={`/images/${project.folder}/${project.images[activeImageIndex]}`}
              alt={`${project.title} lightbox`}
              className="max-w-full max-h-[80vh] object-contain"
            />
            {/* Caption */}
            <div className="absolute bottom-[-50px] left-0 right-0 flex justify-between items-center text-sm text-gray-400">
              <span className="uppercase text-gold font-bold tracking-wider">{project.title}</span>
              <span>{activeImageIndex + 1} / {project.images.length}</span>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gold p-3 bg-black/40 hover:bg-black/60 transition-all z-50 rounded-sm focus:outline-none"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </div>
  );
}
