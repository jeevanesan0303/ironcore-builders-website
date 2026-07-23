import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Loader from './components/Loader';

const projectsData = [
  {
    title: 'Luxury Villa Construction',
    type: 'Building',
    folder: 'project4',
    images: [
      '52fe561d-0059-40b8-b15e-ae38cc9f84fb.jpg',
      '1aeaa6e9-deef-4bb0-89ec-d8e6557586a6.jpg',
      '22ba9a6d-3e71-4a97-8cd9-3e96c9926036.jpg',
      '397c7780-75b2-43c2-a56e-979e4f3ab8ef.jpg',
      'f7ebfaa1-1f90-46d2-ac0c-95b919cdc3fb.jpg'
    ],
    location: 'Colombo, Sri Lanka',
    duration: '8 Months',
    completion: 'March 2024',
    description: 'A premium residential villa project designed and built with exceptional craftsmanship, open-plan spaces, pool deck integrations, and high-end detailing.'
  },
  {
    title: 'Kurunegala Highway Works',
    type: 'Road Works',
    folder: 'kurunagal-road',
    images: [
      '53323dfa-fe6a-421d-ba18-c86ff04cf692.jpg',
      '8b6883cd-b255-4a44-85a7-141ca32c135f.jpg',
      'd2b279f7-2e37-42e0-8f70-129ff5e6c3d3.jpg',
      'df900cac-bab9-425f-a2dc-73cbc0452f33.jpg'
    ],
    location: 'Kurunegala, Sri Lanka',
    duration: '12 Months',
    completion: 'January 2024',
    description: 'Highway expansion, sub-base compaction, drainage engineering, and hot-mix asphalt concrete paving delivered under rigorous inspection standards.'
  },
  {
    title: 'Commercial Complex Structure',
    type: 'Building',
    folder: 'project2',
    images: [
      '5eca2e86-9313-425c-9dbf-1f81e86d9652.jpg',
      '5257b0bc-7504-49b5-988d-7c3f30ef7445.jpg',
      '56c3e4f3-9a68-4086-977e-40ce5181d813.jpg',
      'eed5ef49-5f1c-4cfa-a234-aaee703ee063.jpg'
    ],
    location: 'Colombo, Sri Lanka',
    duration: '18 Months',
    completion: 'September 2023',
    description: 'A high-rise commercial complex framing, incorporating post-tensioned slabs, core wall systems, and curtain walling structures.'
  },

  {
    title: 'Anuradhapura Road Expansion',
    type: 'Road Works',
    folder: 'anurathapuram-road',
    images: [
      '0601caf4-f68a-4c1c-8304-d5d9fb1f09fc.jpg',
      'b5006156-e9d9-44de-ae6d-6ca16b17ac25.jpg',
      'c272ebf1-c96f-4982-9c89-dff3e3e442b9.jpg',
      'd1a07515-d8c2-4294-a285-ae693a3f5a4a.jpg',
      'ddb306ac-f61e-48ac-8bac-895da6d0cf0c.jpg',
      'e1e53f3e-1371-45ed-8f91-ebb429074092.jpg'
    ],
    location: 'Anuradhapura, Sri Lanka',
    duration: '6 Months',
    completion: 'November 2023',
    description: 'Re-routing, culvert construction, embankment stabilization, and granular sub-base preparation for highway connections.'
  },
  {
    title: 'House Project',
    type: 'Building',
    folder: 'house-project',
    images: [
      'house-1.jpg',
      'house-2.jpg',
      'house-3.jpg'
    ],
    location: 'Gampaha, Sri Lanka',
    duration: '5 Months',
    completion: 'June 2023',
    description: 'A premium two-story modern house build featuring clean white and grey architectural styling, external structural stairs, and elegant entry gate systems.'
  },
  {
    title: 'Foundation Concrete Piles',
    type: 'Building',
    folder: 'project1',
    images: [
      '4c6ca7eb-97e2-4280-9512-dce8d3650d54.jpg',
      'a5f60937-6bd1-4b6c-8bfb-97b9602098a3.jpg',
      'e855e638-0b69-43c6-9177-dfb99b2f5e6c.jpg'
    ],
    location: 'Galle, Sri Lanka',
    duration: '10 Months',
    completion: 'May 2024',
    description: 'Reinforced concrete foundation works, column structural masonry, casting, and framing for high-load residential villas.'
  },
  {
    title: 'House 2 Project',
    type: 'Building',
    folder: 'house-2-project',
    images: [
      'house2-1.jpg',
      'house2-2.jpg',
      'house2-3.jpg',
      'house2-4.jpg',
      'house2-5.jpg'
    ],
    location: 'Jaffna, Sri Lanka',
    duration: '3 Months',
    completion: 'June 2024',
    description: 'Construction of a premium single-story modern residential home, featuring structural concrete masonry foundations, plastering, internal wall layout construction, and custom roof timber framing with tiled roofing.'
  },
  {
    title: 'House Project 3',
    type: 'Building',
    folder: 'house-project-3',
    images: [
      'house3-1.jpg',
      'house3-2.jpg',
      'house3-3.jpg',
      'house3-4.jpg'
    ],
    location: 'Kurunegala, Sri Lanka',
    duration: '4 Months',
    completion: 'October 2024',
    description: 'Subgrade foundation concrete blockwork, structural perimeter framing, water tank/sump constructions, and site earthworks for a premium custom residential villa.'
  },
  {
    title: 'Shop Project',
    type: 'Building',
    folder: 'shop-project',
    images: [
      'shop-1.jpg',
      'shop-2.jpg',
      'shop-3.jpg'
    ],
    location: 'Point Pedro, Sri Lanka',
    duration: '6 Months',
    completion: 'March 2024',
    description: 'Construction of a multi-story commercial shop complex, including reinforced concrete framework, upper floor slab expansions, external brick partition layouts, and ground floor retail shop front fitting.'
  },
  {
    title: 'House Project 4',
    type: 'Building',
    folder: 'house-project-4',
    images: [
      'house4-1.jpg',
      'house4-2.jpg',
      'house4-3.jpg'
    ],
    location: 'Trincomalee, Sri Lanka',
    duration: '3 Months',
    completion: 'December 2024',
    description: 'Site excavation, debris clearing, timber supply logistics, and installation of external utility and lighting systems for a modern residential estate.'
  }
];

export default function App() {
  const [currentView, setView] = useState('home'); // 'home' | 'project-detail' | 'blog'
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState('home');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Track scroll coordinates to highlight active navbar section
  useEffect(() => {
    if (currentView !== 'home') return;

    const sections = ['home', 'about', 'services', 'projects', 'process', 'contact'];

    const handleScroll = () => {
      let current = 'home';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  // Reveal elements on scroll via Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    const targets = document.querySelectorAll('.reveal');
    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [currentView, selectedProject]);

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setView('project-detail');
  };

  const handleBackToProjects = () => {
    setView('home');
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'instant' });
    }, 100);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      {/* Global Navbar */}
      <Navbar
        currentView={currentView}
        setView={setView}
        activeSection={activeSection}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* Main Pages Switcher */}
      <main className="flex-1">
        {currentView === 'home' && (
          <Home
            onSelectProject={handleSelectProject}
            projects={projectsData}
            onOpenQuote={() => setIsQuoteOpen(true)}
          />
        )}
        {currentView === 'project-detail' && (
          <ProjectDetail
            project={selectedProject}
            onBack={handleBackToProjects}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer currentView={currentView} setView={setView} />

      {/* Global Quote Request Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}
