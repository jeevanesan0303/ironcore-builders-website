import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  HardHat,
  Users,
  Award,
  Building2,
  Route,
  Wrench,
  ChevronRight,
  ChevronLeft,
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Play,
  X,
  Check
} from 'lucide-react';

export default function Home({ onSelectProject, projects, onOpenQuote }) {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [typingLength, setTypingLength] = useState(0);

  useEffect(() => {
    const fullText = "BUILDING STRONGER TOMORROWS.";
    const totalLength = fullText.length;

    let timeoutId;
    let intervalId;

    const startTyping = () => {
      setTypingLength(0);
      let current = 0;
      intervalId = setInterval(() => {
        current += 1;
        setTypingLength(current);
        if (current >= totalLength) {
          clearInterval(intervalId);
          timeoutId = setTimeout(() => {
            startTyping();
          }, 3000);
        }
      }, 150);
    };

    startTyping();

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  const fullText = "BUILDING STRONGER TOMORROWS.";
  const [contactData, setContactData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Building Construction',
    message: ''
  });

  const [jcbVideoOpen, setJcbVideoOpen] = useState(false);
  const [jcbLightboxImage, setJcbLightboxImage] = useState(null);
  const jcbScrollRef = React.useRef(null);

  const scrollJcb = (direction) => {
    if (jcbScrollRef.current) {
      const scrollAmount = 260; // width + gap
      jcbScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const jcbHighlights = [
    { title: 'Classroom Briefing', image: '094a622b-0ad1-4fba-8b2e-a4b97de4db95.jpg' },
    { title: 'Machine Familiarization', image: '0ef70b2c-793b-4437-b2b1-131cbf55d3f9.jpg' },
    { title: 'Pre-operation Inspection', image: 'jcb-training-maintenance-2.jpg' },
    { title: 'Engine Maintenance', image: 'jcb-training-maintenance-1.jpg' },
    { title: 'Engine Diagnostics', image: 'jcb-training-maintenance-3.jpg' },
    { title: 'Cabin Control Training', image: 'jcb-training-cab-1.jpg' },
    { title: 'Operator Guidance', image: 'jcb-training-cab-2.jpg' },
    { title: 'Hands-on Steer Control', image: 'jcb-training-cab-3.jpg' },
    { title: 'Hands-on Operation', image: '1b0f937e-1d8d-4a72-aa2e-95511b822d38.jpg' },
    { title: 'Loader Bucket Inspection', image: 'jcb-training-bucket.jpg' },
    { title: 'Tire & Rim Maintenance', image: 'jcb-training-wheel-maintenance.jpg' },
    { title: 'Safety Rigging & Ropes', image: 'jcb-training-rigging.jpg' },
    { title: 'Field Site Overview', image: 'jcb-training-overhead.jpg' },
    { title: 'Live Site Practice', image: '2c4bb512-afb4-4ee8-a004-bf668b46e4f5.jpg' },
    { title: 'Certification Ceremony', image: '404a845e-1480-4622-b34b-3debe598d678.jpg' },
    { title: 'Successful Graduates', image: 'jcb-main-trainees.jpg' }
  ];

  // Filter projects based on selected type
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'ALL') return true;
    return project.type.toUpperCase() === activeFilter.toUpperCase();
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  const handleContactReset = () => {
    setContactData({
      name: '',
      phone: '',
      email: '',
      service: 'Building Construction',
      message: ''
    });
    setContactSubmitted(false);
  };

  return (
    <div className="bg-ink min-h-screen text-gray-200 animate-page-entrance">
      {/* 1. HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-navy"
      >
        {/* Background & Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center filter brightness-[0.85] saturate-[0.9] scale-102 animate-hero-zoom" style={{ backgroundImage: "url('/images/hero-house-full.png')" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent z-10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 flex flex-col items-start text-left reveal visible">
            <span className="inline-flex items-center gap-3 text-gold text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-10 h-[1.5px] bg-gold" />
              Trusted Construction Partner
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase leading-tight font-display tracking-tight text-white mb-6 min-h-[90px] sm:min-h-[140px] lg:min-h-[180px]">
              {fullText.split("").map((char, index) => {
                const isGold = index >= 18;
                const isVisible = index < typingLength;
                return (
                  <span
                    key={index}
                    className={`transition-opacity duration-500 ease-out ${
                      isGold ? 'text-gold' : 'text-white'
                    } ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                  >
                    {char}
                  </span>
                );
              })}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 font-light leading-relaxed max-w-2xl mb-8">
              From concept to completion, Iron Core Builders delivers dependable building, road, and heavy-machinery solutions with precision, integrity, and exceptional care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto">
              <button
                onClick={() => {
                  const el = document.getElementById('projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-4 bg-gold hover:bg-gold-hover text-ink font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 group transition-colors duration-300 rounded-sm"
              >
                Explore Projects
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-4 border border-white/20 hover:border-gold hover:text-gold text-white font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-colors duration-300 rounded-sm"
              >
                Our Services
              </button>
            </div>
          </div>
        </div>

        {/* Hero Features Bar */}
        <div className="absolute bottom-0 inset-x-0 z-20 bg-black/60 backdrop-blur-md border-t border-white/15">
          <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div className="flex items-start gap-3">
              <Award className="text-gold mt-1 shrink-0" size={20} />
              <div>
                <h4 className="text-white text-xs font-bold uppercase tracking-wider">Expert Team</h4>
                <p className="text-[10px] text-gray-400 mt-1 font-light leading-snug">Skilled professionals with years of experience</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="text-gold mt-1 shrink-0" size={20} />
              <div>
                <h4 className="text-white text-xs font-bold uppercase tracking-wider">Quality Assured</h4>
                <p className="text-[10px] text-gray-400 mt-1 font-light leading-snug">Premium materials and rigorous standards</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="text-gold mt-1 shrink-0" size={20} />
              <div>
                <h4 className="text-white text-xs font-bold uppercase tracking-wider">On-Time Delivery</h4>
                <p className="text-[10px] text-gray-400 mt-1 font-light leading-snug">Projects delivered on schedules</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <HardHat className="text-gold mt-1 shrink-0" size={20} />
              <div>
                <h4 className="text-white text-xs font-bold uppercase tracking-wider">Safety First</h4>
                <p className="text-[10px] text-gray-400 mt-1 font-light leading-snug">Your safety is our top priority</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US SECTION */}
      <section id="about" className="py-24 bg-[#f5f2eb] border-b border-black/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Rotated label sidebar + Founder Portrait */}
          <div className="lg:col-span-6 flex items-center justify-center reveal visible">
            <div className="flex w-full max-w-lg items-center">
              {/* Vertical Rotated Text Sidebar */}
              <div className="hidden sm:flex flex-col items-center justify-center mr-6 select-none shrink-0">
                <div className="[writing-mode:vertical-lr] rotate-180 text-[10px] tracking-[0.2em] font-semibold text-gray-500 uppercase mb-8 border-r border-gray-300 pr-2">
                  DISCIPLINE / PRECISION / TRUST
                </div>
                <div className="[writing-mode:vertical-lr] rotate-180 text-5xl font-black tracking-widest text-ink font-display">
                  IRON
                </div>
              </div>

              {/* Portrait Frame and Overlay Quote */}
              <div className="relative w-full">
                <div className="border border-black/10 overflow-hidden bg-white p-3 shadow-md">
                  <img
                    src="/images/founder.jpg"
                    alt="RASAYAH PATHMANATHAN - Iron Core Builders Founder"
                    className="w-full h-[400px] lg:h-[460px] object-cover filter saturate-90"
                  />
                </div>
                {/* Overlapping Quote Card */}
                <div className="absolute bottom-[-30px] left-[-20px] bg-[#07111b] p-6 text-left max-w-[280px] shadow-2xl border border-white/5">
                  <span className="text-gold text-3xl font-serif leading-none block mb-1">“</span>
                  <p className="text-[11px] text-gray-300 font-medium leading-relaxed font-sans mb-3.5">
                    Every strong structure starts with a clear promise: do the work properly.
                  </p>
                  <div className="border-t border-white/10 pt-2.5">
                    <span className="block text-[10px] text-white font-extrabold uppercase tracking-wider font-display">
                      RASAYAH PATHMANATHAN
                    </span>
                    <span className="block text-[8px] text-gold uppercase font-bold tracking-widest mt-0.5">
                      Founder & Managing Director
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text and Checked list items */}
          <div className="lg:col-span-6 flex flex-col items-start text-left reveal visible">
            <h2 className="text-3xl sm:text-[40px] font-extrabold uppercase leading-tight font-display tracking-tight text-ink mb-6">
              Construction is not only <br className="hidden sm:inline" />
              what we build. It is the <br className="hidden sm:inline" />
              confidence we leave <br className="hidden sm:inline" />
              behind.
            </h2>
            <p className="text-sm text-gray-600 font-light leading-relaxed mb-8">
              Iron Core Builders brings together responsible planning, experienced supervision and practical execution. Our approach is direct: understand the client, respect the site, control the quality and finish with pride.
            </p>

            {/* Checkbox List */}
            <div className="flex flex-col gap-6 w-full max-w-lg">
              {[
                {
                  title: 'Accountable execution',
                  sub: 'Clear communication from first discussion to handover.'
                },
                {
                  title: 'Site-first thinking',
                  sub: 'Decisions made around safety, durability and real conditions.'
                },
                {
                  title: 'Quality without shortcuts',
                  sub: 'Using correct methods and certified materials for lasting durability.'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-5 h-5 bg-gold flex items-center justify-center shrink-0 mt-0.5 rounded-sm">
                    <Check size={11} className="text-ink stroke-[3px]" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-bold text-ink uppercase tracking-wider mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-light">
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="services" className="py-24 bg-[#050f18] border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 reveal visible">
            <div className="lg:col-span-8 text-left">
              <span className="text-gold text-xs font-bold uppercase tracking-widest mb-3">Our Services</span>
              <h2 className="text-3xl sm:text-5xl font-bold uppercase leading-tight font-display tracking-tight text-white">
                Comprehensive Construction Solutions
              </h2>
            </div>
            <div className="lg:col-span-4 text-left lg:text-right">
              <p className="text-sm text-gray-400 font-light leading-relaxed max-w-sm">
                We offer a wide range of construction services designed to meet the highest industry standards and exceed client expectations.
              </p>
            </div>
          </div>

          {/* Core Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal visible">
            <div id="service-building" className="glass-card p-8 flex flex-col items-start text-left min-h-[300px]">
              <div className="w-12 h-12 rounded-sm bg-gold/10 flex items-center justify-center text-gold mb-6 border border-gold/25">
                <Building2 size={24} />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide text-white mb-3">Building</h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Residential, commercial and industrial building solutions designed with precision, style, and care.
              </p>
            </div>

            <div id="service-road-works" className="glass-card p-8 flex flex-col items-start text-left min-h-[300px]">
              <div className="w-12 h-12 rounded-sm bg-gold/10 flex items-center justify-center text-gold mb-6 border border-gold/25">
                <Route size={24} />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide text-white mb-3">Road Works</h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Construction and maintenance of high-quality highways, primary roads, and supporting drainage infrastructure.
              </p>
            </div>

            <div id="service-heavy-machinery" className="glass-card p-8 flex flex-col items-start text-left min-h-[300px]">
              <div className="w-12 h-12 rounded-sm bg-gold/10 flex items-center justify-center text-gold mb-6 border border-gold/25">
                <HardHat size={24} />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide text-white mb-3">Heavy Machinery</h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Reliable excavation and heavy site support using standard operated JCB loaders and grading mechanisms.
              </p>
            </div>

            <div id="service-renovation" className="glass-card p-8 flex flex-col items-start text-left min-h-[300px]">
              <div className="w-12 h-12 rounded-sm bg-gold/10 flex items-center justify-center text-gold mb-6 border border-gold/25">
                <Wrench size={24} />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide text-white mb-3">Renovation</h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Professional renovation and architectural remodeling services to transform and enhance your existing structures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JCB TRAINING ACADEMY SECTION */}
      <section className="py-24 bg-[#f5f2eb] border-b border-black/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top content row: title, image, stats */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            {/* Left Description and features */}
            <div className="lg:col-span-6 flex flex-col items-start text-left reveal">
              <span className="inline-flex items-center gap-3 text-gold text-xs font-bold uppercase tracking-widest mb-4">
                <HardHat size={14} className="text-gold" />
                JCB TRAINING ACADEMY
                <span className="w-10 h-[1.5px] bg-gold" />
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase leading-tight font-display tracking-tight text-ink mb-6">
                JCB TRAINING RECENTLY IN INDIA <br />
                MASTER HEAVY MACHINERY <br />
                THROUGH <span className="text-gold">REAL FIELD EXPERIENCE.</span>
              </h2>
              <p className="text-sm text-gray-600 font-light leading-relaxed mb-10">
                Our specialized JCB training program in India provides hands-on learning with real machines on active sites. From basic operation to advanced techniques, we build confident, safety-first operators.
              </p>

              {/* Highlights 4 grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mb-10">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 shrink-0 bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                    <Wrench size={16} />
                  </div>
                  <div>
                    <h4 className="text-ink font-bold text-xs uppercase tracking-wide">Real Machines</h4>
                    <p className="text-[10px] text-gray-500 mt-1 font-light leading-snug">Train on actual JCB equipment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 shrink-0 bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <h4 className="text-ink font-bold text-xs uppercase tracking-wide">Safety First</h4>
                    <p className="text-[10px] text-gray-500 mt-1 font-light leading-snug">Industry standard safety practices</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 shrink-0 bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                    <Users size={16} />
                  </div>
                  <div>
                    <h4 className="text-ink font-bold text-xs uppercase tracking-wide">Expert Trainers</h4>
                    <p className="text-[10px] text-gray-500 mt-1 font-light leading-snug">Learn from certified professionals</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 shrink-0 bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                    <Award size={16} />
                  </div>
                  <div>
                    <h4 className="text-ink font-bold text-xs uppercase tracking-wide">Certification</h4>
                    <p className="text-[10px] text-gray-500 mt-1 font-light leading-snug">Get recognized completion certificate</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 items-center w-full sm:w-auto">
                <button
                  onClick={onOpenQuote}
                  className="px-6 py-3.5 bg-gold hover:bg-gold-hover text-ink font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-colors duration-300 rounded-sm"
                >
                  Explore Training
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Right: Main Image & Stats Bar underneath */}
            <div className="lg:col-span-6 flex flex-col gap-0 reveal">
              <div className="border border-black/10 overflow-hidden bg-white aspect-[16/10] w-full">
                <img
                  src="/images/indian-jcb/jcb-main-trainees.jpg"
                  alt="JCB Training Academy graduates with their luggage"
                  className="w-full h-full object-cover filter saturate-85 hover:scale-102 transition-transform duration-500"
                />
              </div>
              {/* Bottom statistics list */}
              <div className="bg-white border border-t-0 border-black/10 p-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                <div>
                  <span className="block text-2xl font-black text-gold font-display">1200+</span>
                  <span className="block text-[9px] text-gray-500 uppercase tracking-widest mt-1">Students Trained</span>
                </div>
                <div>
                  <span className="block text-2xl font-black text-gold font-display">15+</span>
                  <span className="block text-[9px] text-gray-500 uppercase tracking-widest mt-1">Years Experience</span>
                </div>
                <div>
                  <span className="block text-2xl font-black text-gold font-display">98%</span>
                  <span className="block text-[9px] text-gray-500 uppercase tracking-widest mt-1">Completion Rate</span>
                </div>
                <div>
                  <span className="block text-2xl font-black text-gold font-display">50+</span>
                  <span className="block text-[9px] text-gray-500 uppercase tracking-widest mt-1">JCB Machines</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lower row: What you will learn & Training highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12 pt-12 border-t border-black/10">
            {/* Left learn points */}
            <div className="lg:col-span-5 flex flex-col items-start text-left reveal">
              <span className="text-gold text-xs font-bold uppercase tracking-widest mb-6">
                What You Will Learn
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-sm font-light text-gray-600">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-gold shrink-0" />
                  <span>Basic Machine Operation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-gold shrink-0" />
                  <span>Excavation Techniques</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-gold shrink-0" />
                  <span>Loader & Backhoe Operation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-gold shrink-0" />
                  <span>Site Work & Leveling</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-gold shrink-0" />
                  <span>Hydraulic System Understanding</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-gold shrink-0" />
                  <span>Real Site Practice</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-gold shrink-0" />
                  <span>Safety Procedures & Protocols</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-gold shrink-0" />
                  <span>Maintenance Fundamentals</span>
                </div>
              </div>
            </div>

            {/* Right: Highlights Slider */}
            <div className="lg:col-span-7 flex flex-col text-left reveal w-full overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <span className="text-gold text-xs font-bold uppercase tracking-widest">
                  Training Highlights
                </span>
                {/* Arrow navigation buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => scrollJcb('left')}
                    className="w-8 h-8 border border-black/10 hover:border-gold text-gray-500 hover:text-gold flex items-center justify-center transition-colors rounded-sm focus:outline-none"
                    title="Previous Highlights"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() => scrollJcb('right')}
                    className="w-8 h-8 border border-black/10 hover:border-gold text-gray-500 hover:text-gold flex items-center justify-center transition-colors rounded-sm focus:outline-none"
                    title="Next Highlights"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Cards horizontal track */}
              <div
                ref={jcbScrollRef}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-2 scroll-smooth"
              >
                {jcbHighlights.map((hl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setJcbLightboxImage(`/images/indian-jcb/${hl.image}`)}
                    className="snap-start shrink-0 w-[240px] border border-black/10 bg-white relative group overflow-hidden text-left focus:outline-none cursor-pointer"
                  >
                    {/* Aspect Image */}
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img
                        src={`/images/indian-jcb/${hl.image}`}
                        alt={hl.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-350"
                      />
                    </div>
                    {/* Label text */}
                    <div className="p-3.5 bg-white border-t border-black/5 text-xs text-ink font-semibold uppercase tracking-wider text-center group-hover:text-gold transition-colors">
                      {hl.title}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROJECTS SECTION */}
      <section id="projects" className="py-24 border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12 reveal">
            <div className="lg:col-span-6 text-left">
              <span className="text-gold text-xs font-bold uppercase tracking-widest mb-3">Our Work</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase leading-tight font-display tracking-tight text-white">
                Project Details
              </h2>
            </div>
            <div className="lg:col-span-6 flex justify-end">
              <button
                onClick={() => {
                  const el = document.getElementById('projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-3 border border-gold text-gold hover:bg-gold hover:text-ink font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-colors duration-300 shrink-0"
              >
                View All Projects
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 border-b border-white/10 pb-6 mb-10 text-xs font-bold tracking-wider uppercase justify-start reveal visible">
            {['ALL', 'BUILDING', 'ROAD WORKS'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`py-2 px-4 border-b-2 transition-all duration-300 ${
                  activeFilter === filter
                    ? 'border-gold text-gold font-extrabold'
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal visible">
            {filteredProjects.map((project, idx) => (
              <button
                key={idx}
                onClick={() => onSelectProject(project)}
                className="group relative h-96 w-full text-left overflow-hidden border border-white/10 bg-navy cursor-pointer focus:outline-none"
              >
                {/* Image */}
                <img
                  src={`/images/${project.folder}/${project.images[0]}`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-90 group-hover:brightness-75"
                />
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-gold text-[10px] font-extrabold uppercase tracking-widest mb-1.5">
                    {project.type}
                  </span>
                  <h3 className="text-lg font-bold text-white uppercase group-hover:text-gold transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-1.5 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>View Project Details</span>
                    <ArrowRight size={12} className="text-gold" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION */}
      <section id="process" className="py-24 bg-[#f5f2eb] border-b border-black/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 reveal visible">
            <div className="lg:col-span-8 text-left">
              <span className="text-gold text-xs font-bold uppercase tracking-widest mb-3">Our Process</span>
              <h2 className="text-3xl sm:text-5xl font-bold uppercase leading-tight font-display tracking-tight text-ink">
                A Proven Process Delivering Results
              </h2>
            </div>
            <div className="lg:col-span-4 text-left lg:text-right">
              <p className="text-sm text-gray-600 font-light leading-relaxed max-w-sm">
                Our streamlined process ensures every project is delivered on time, within budget, and to the highest quality standards.
              </p>
            </div>
          </div>

          {/* Stepper Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 border border-black/10 divide-y md:divide-y-0 md:divide-x divide-black/10 reveal visible">
            {[
              {
                num: '01',
                title: 'LISTEN',
                desc: 'We understand your requirement, location, budget and expected timeline.'
              },
              {
                num: '02',
                title: 'PLAN',
                desc: 'We organize scope, materials, workflow, labour and machinery requirements.'
              },
              {
                num: '03',
                title: 'BUILD',
                desc: 'The site is executed with supervision, safety and continuous quality review.'
              },
              {
                num: '04',
                title: 'DELIVER',
                desc: 'Final inspection, clean completion and confident project handover.'
              }
            ].map((step, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-10 flex flex-col gap-6 text-left hover:bg-gold hover:text-ink transition-all duration-300 group bg-white"
              >
                <span className="text-xs font-bold text-gold group-hover:text-ink transition-colors">
                  {step.num}
                </span>
                <h3 className="text-2xl font-black uppercase tracking-wide text-ink group-hover:text-ink transition-colors font-display">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed group-hover:text-ink/80 transition-colors">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US SECTION */}
      <section className="py-24 border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left reveal visible">
            <span className="text-gold text-xs font-bold uppercase tracking-widest mb-3">Why Choose Us</span>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase leading-tight font-display tracking-tight text-white mb-8">
              The Iron Core Advantage
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                  <Users size={18} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1">Experienced Team</h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">Skilled, certified professionals with deep field capability.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1">Premium Quality</h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">We source top-tier materials and enforce rigorous benchmarks.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                  <Award size={18} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1">Competitive Pricing</h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">High-quality services shaped around your project budget.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                  <Award size={18} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1">Customer Focused</h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">Your specifications and structural requests lead our efforts.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-5 reveal visible">
            <div className="border border-white/10 overflow-hidden bg-navy">
              <img
                src="/images/advantage-road.jpg"
                alt="Road construction and paving team in action"
                className="w-full h-80 lg:h-[400px] object-cover hover:scale-102 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT US SECTION */}
      <section id="contact" className="py-24 relative overflow-hidden bg-navy">
        {/* Background & Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/images/contact-road-premium.jpg')" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/90 to-ink/80 z-10" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-left mb-12 reveal visible">
            <span className="text-gold text-xs font-bold uppercase tracking-widest mb-3">Contact Us</span>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase leading-none font-display tracking-tight text-white">
              Let's Build Something <span className="text-gold italic font-serif capitalize">Great Together</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Column 1: Left Details */}
            <div className="lg:col-span-5 flex flex-col gap-4 text-left reveal visible">
              <p className="text-sm text-gray-300 font-light leading-relaxed mb-2">
                Have a project in mind? Reach out today to organize a direct consultation and estimate. Our site supervisors cover island-wide jobs.
              </p>
              
              <div
                className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-sm"
              >
                <Phone size={20} className="text-gold shrink-0 mt-1" />
                <div className="text-left">
                  <span className="block text-[10px] text-gray-400 uppercase tracking-wider mb-1">Phone</span>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+94706451114" className="text-sm font-semibold text-white hover:text-gold transition-colors">+94 70 645 1114</a>
                    <a href="tel:+94772346434" className="text-sm font-semibold text-white hover:text-gold transition-colors">+94 77 234 6434</a>
                  </div>
                </div>
              </div>
              <a
                href="mailto:ironcoreb@gmail.com"
                className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 hover:border-gold/50 transition-colors rounded-sm"
              >
                <Mail size={20} className="text-gold shrink-0" />
                <div className="text-left">
                  <span className="block text-[10px] text-gray-400 uppercase tracking-wider">Email Address</span>
                  <span className="text-sm font-semibold text-white">ironcoreb@gmail.com</span>
                </div>
              </a>
              <a
                href="https://maps.google.com/?q=9.6879,80.3285"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 hover:border-gold/50 transition-colors rounded-sm group"
              >
                <MapPin size={20} className="text-gold shrink-0 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <span className="block text-[10px] text-gray-400 uppercase tracking-wider">Office Location</span>
                  <span className="text-sm font-semibold text-white group-hover:text-gold transition-colors">Nagarkovil East, Nagarkovil, Sri Lanka</span>
                </div>
              </a>
            </div>

            {/* Column 2: Middle Map */}
            <div className="lg:col-span-2 w-full reveal visible">
              <a
                href="https://maps.google.com/?q=9.6879,80.3285"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-white/15 overflow-hidden group relative h-[340px] w-full rounded-sm"
                title="Open in Google Maps"
              >
                <iframe
                  title="Iron Core Builders location preview"
                  src="https://www.google.com/maps?q=9.6879,80.3285&output=embed"
                  className="w-full h-full border-0 pointer-events-none filter grayscale-[0.8] invert-[0.9] contrast-[0.85] group-hover:grayscale-0 group-hover:invert-0 group-hover:contrast-100 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors flex items-center justify-center">
                  <span className="px-4 py-2 bg-ink/90 border border-gold/40 text-gold text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Open in Google Maps
                  </span>
                </div>
              </a>
            </div>

            {/* Column 3: Right Form */}
            <div className="lg:col-span-5 w-full reveal visible">
              {!contactSubmitted ? (
                <form
                  onSubmit={handleContactSubmit}
                  className="glass-panel p-8 sm:p-10 flex flex-col gap-5 border border-white/15"
                >
                  <span className="text-gold text-[10px] font-bold uppercase tracking-wider text-left self-start">
                    Message Form
                  </span>
                  <h3 className="text-2xl font-bold uppercase text-white text-left mb-2">
                    Tell us what you are planning
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="text-left">
                      <label className="block text-[9px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={contactData.name}
                        onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/15 px-4 py-2 text-sm text-white focus:border-gold focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="text-left">
                      <label className="block text-[9px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+94"
                        value={contactData.phone}
                        onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/15 px-4 py-2 text-sm text-white focus:border-gold focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="text-left">
                      <label className="block text-[9px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={contactData.email}
                        onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/15 px-4 py-2 text-sm text-white focus:border-gold focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="text-left">
                      <label className="block text-[9px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                        Service Type
                      </label>
                      <select
                        value={contactData.service}
                        onChange={(e) => setContactData({ ...contactData, service: e.target.value })}
                        className="w-full bg-[#121d28] border border-white/15 px-3 py-2 text-sm text-white focus:border-gold focus:outline-none transition-colors"
                      >
                        <option className="bg-[#0a1928] text-white" value="Building Construction">Building Construction</option>
                        <option className="bg-[#0a1928] text-white" value="Road Works">Road Works</option>
                        <option className="bg-[#0a1928] text-white" value="Renovation">Renovation</option>
                      </select>
                    </div>
                  </div>

                  <div className="text-left">
                    <label className="block text-[9px] uppercase tracking-wider text-gray-400 font-semibold mb-1">
                      Project Details
                    </label>
                    <textarea
                      required
                      placeholder="Provide site location, expectations..."
                      rows={4}
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 px-4 py-2 text-sm text-white focus:border-gold focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gold text-ink hover:bg-gold-hover transition-colors font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 rounded-sm"
                  >
                    <Send size={14} />
                    <span>Send Message</span>
                  </button>
                </form>
              ) : (
                <div className="glass-panel p-10 flex flex-col items-center justify-center text-center border border-white/15 min-h-[420px]">
                  <CheckCircle2 size={56} className="text-gold mb-4" />
                  <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-2">
                    Message Sent
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed max-w-sm mb-6">
                    Thank you, <strong className="text-gold">{contactData.name}</strong>. We have received your query for <span className="underline">{contactData.service}</span>. One of our engineers will contact you shortly at <span className="text-white">{contactData.phone}</span>.
                  </p>
                  <button
                    onClick={handleContactReset}
                    className="px-6 py-2.5 border border-gold text-gold hover:bg-gold hover:text-ink font-bold text-xs uppercase tracking-wider transition-all duration-300"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* JCB Video Modal */}
      {jcbVideoOpen && (
        <div className="fixed inset-0 z-[120] bg-black/90 flex items-center justify-center p-4">
          <div className="absolute inset-0" onClick={() => setJcbVideoOpen(false)} />
          <div className="relative w-full max-w-4xl aspect-video bg-black border border-white/10 z-10">
            <button
              onClick={() => setJcbVideoOpen(false)}
              className="absolute top-[-40px] right-0 text-white hover:text-gold flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider focus:outline-none"
            >
              <X size={16} />
              <span>Close Video</span>
            </button>
            <iframe
              title="JCB Heavy Machinery Training"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              className="w-full h-full border-0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* JCB Image Lightbox Modal */}
      {jcbLightboxImage && (
        <div className="fixed inset-0 z-[130] bg-black/95 flex items-center justify-center p-4 animate-page-entrance">
          <div className="absolute inset-0" onClick={() => setJcbLightboxImage(null)} />
          <button
            onClick={() => setJcbLightboxImage(null)}
            className="absolute top-6 right-6 text-gray-400 hover:text-white p-2 transition-colors z-50 focus:outline-none cursor-pointer"
            title="Close Lightbox"
          >
            <X size={28} />
          </button>
          <div className="relative max-w-5xl max-h-[85vh] w-full flex items-center justify-center z-10">
            <img
              src={jcbLightboxImage}
              alt="JCB Training Highlight fullscreen"
              className="max-w-full max-h-[85vh] object-contain border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
