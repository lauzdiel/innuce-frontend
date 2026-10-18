import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import gridBg from '../../assets/grid_bg.svg';

import ucFpga from '../../assets/uc_fpga.webp';
import ucTracking from '../../assets/uc_tracking.webp';
import ucNavigation from '../../assets/uc_navigation.webp';
import ucSemantic from '../../assets/uc_semantic.webp';
import ucBraille from '../../assets/uc_braille.webp';
import ucGenn from '../../assets/uc_genn.webp';
import ucGesture from '../../assets/uc_gesture.webp';

// Map image filenames or identifiers to actual imports to maintain images dynamically
const imageMap = {
  'uc_fpga.webp': ucFpga, 'uc_fpga.svg': ucFpga,
  'uc_tracking.webp': ucTracking, 'uc_tracking.svg': ucTracking,
  'uc_navigation.webp': ucNavigation, 'uc_navigation.svg': ucNavigation,
  'uc_semantic.webp': ucSemantic, 'uc_semantic.svg': ucSemantic,
  'uc_braille.webp': ucBraille, 'uc_braille.svg': ucBraille,
  'uc_genn.webp': ucGenn, 'uc_genn.svg': ucGenn,
  'uc_gesture.webp': ucGesture, 'uc_gesture.svg': ucGesture,
};

const frameworks = ['smTorch', 'PyTorch', 'NeuroBench', 'GeNN', 'Lava', 'Brian2', 'ReckOn'];
const keywords = [
  'Spiking Neural Networks', 'Tactile classification', 'Assistive technology', 
  'Temporal encoding', 'Neuromorphic Computing', 'Constraint satisfaction problem', 
  'Neuroscience', "Brain's memory consolidation", 'Continual learning', 
  'Human Activity Recognition', 'Temporal Learning', 'Codesign', 'AIoT', 
  'Edge-AI', 'Inertial Odometry', 'EKF', 'GPS', 'Sensor Fusion', 
  'Legendre Memory Unit', 'Dead Reckoning', 'Event Camera'
];

import { getUseCases } from '../../services/api';

import LoadingSpinner from '../../components/LoadingSpinner';

function UseCases() {
  const [activeFilters, setActiveFilters] = useState([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const filterSectionRef = useRef(null); 
  const navigate = useNavigate();

  const { data: useCasesData = [], isLoading, isError } = useQuery({
    queryKey: ['useCases'],
    queryFn: getUseCases
  });

  if (isLoading) {
    return <LoadingSpinner message="Loading use cases..." />;
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-[#021B2B] text-white px-4 text-center font-['Inter',sans-serif]">
        <p className="text-red-400 text-[16px] mb-2 font-medium">Failed to load use cases.</p>
        <p className="text-[#7FA8B8] text-[14px]">Please refresh the page to try again.</p>
      </div>
    );
  }

  const toggleFilter = (filterName) => {
    if (activeFilters.includes(filterName)) {
      setActiveFilters(activeFilters.filter(f => f !== filterName));
    } else {
      setActiveFilters([...activeFilters, filterName]);
    }
  };

  const filteredUseCases = useCasesData.filter(uc => {
    if (activeFilters.length === 0) return true;
    return activeFilters.some(filter => 
      (uc.keywords && uc.keywords.includes(filter)) || 
      (uc.frameworks && uc.frameworks.includes(filter))
    );
  });

  const handleScrollDown = () => {
    if (filterSectionRef.current) {
      const yOffset = -200; 
      const y = filterSectionRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } }
  };

  return (
    <div className="relative w-full min-h-screen bg-[#021B2B] text-white pt-[240px] pb-[120px] overflow-x-hidden font-['Inter',sans-serif]">
      <div className="absolute top-0 left-0 w-full h-[650px] z-0 pointer-events-none">
        <img src={gridBg} alt="Grid Background" className="w-full h-full object-cover opacity-60 [mask-image:linear-gradient(to_bottom,black_30%,transparent_95%)] [-webkit-mask-image:linear-gradient(to_bottom,black_30%,transparent_95%)]" />
      </div>

      <div className="absolute w-[120px] h-[120px] border border-solid border-[rgba(127,168,184,0.15)] rounded-[12px] pointer-events-none z-[5] top-[420px] left-[6%] rotate-[15deg]"></div>

      <div className="relative z-10 flex flex-col items-center w-full px-[5%] box-border">
        <motion.section 
          className="flex flex-col w-full max-w-[1244px] mb-[60px] lg:mb-[120px] items-center text-center lg:items-start lg:text-left will-change-transform"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
        >
          <h1 className="font-['Inter',sans-serif] text-[32px] sm:text-[40px] lg:text-[56px] font-semibold leading-[1.15] tracking-[-1.5px] m-[0_0_20px_0] bg-[linear-gradient(90deg,#FF6B00_0%,#FF0000_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Discover our Use Cases
          </h1>
          <p className="font-normal text-[15px] lg:text-[16px] leading-[1.6] text-[#7FA8B8] m-[0_0_40px_0] max-w-[680px]">
            Explore the use cases we have implemented and tested on our platform. 
            Get inspired, try them out on our cloud environment, and build upon them. 
            Extend the existing workflows, develop your own solutions and algorithms, 
            or create brand-new use cases tailored to your ideas and enjoy our platform!
          </p>
          <button className="bg-[linear-gradient(90deg,#FF6B00_0%,#FF0000_100%)] text-white border-none rounded-[8px] py-[12px] px-[28px] text-[15px] font-semibold cursor-pointer inline-flex items-center hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(255,107,0,0.4)]" style={{ transition: 'transform 0.2s ease, box-shadow 0.2s ease' }} onClick={handleScrollDown}>
            Discover More 
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </button>
        </motion.section>

        <div className="flex flex-col lg:flex-row gap-[34px] w-full max-w-[1030px]" ref={filterSectionRef}>
          
          {/* Mobile/Tablet Filter Toggle Button */}
          <div className="lg:hidden w-full flex justify-start mb-4">
            <button 
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="bg-[#0c2b3d] border border-[#7FA8B8]/30 text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:border-[#FF6B00] transition-colors"
            >
              Filters {showMobileFilters ? '^' : 'v'}
            </button>
          </div>
          
          {/* Mobile/Tablet Collapsible Accordion Menu */}
          <div className={`lg:hidden w-full bg-[#042335] border border-[#7FA8B8]/20 rounded-2xl p-6 mb-8 ${showMobileFilters ? 'block' : 'hidden'}`}>
            <div className="mb-6">
              <h4 className="text-[12px] font-semibold text-[#FF6B00] tracking-[1px] m-[0_0_20px_0] uppercase">FRAMEWORK</h4>
              <div className="flex flex-wrap gap-2">
                {frameworks.map(fw => (
                  <button 
                    key={fw} 
                    onClick={() => toggleFilter(fw)}
                    className={`rounded-full border border-solid px-3 py-1 text-sm transition-colors ${activeFilters.includes(fw) ? 'border-[#FF6B00] bg-[#FF6B00]/10 text-[#FF6B00]' : 'border-[#7FA8B8]/60 text-[#7FA8B8] hover:border-[#FF6B00]'}`}
                  >
                    {fw}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[12px] font-semibold text-[#FF6B00] tracking-[1px] m-[0_0_20px_0] uppercase">KEYWORDS</h4>
              <div className="flex flex-wrap gap-2">
                {keywords.map(kw => (
                  <button 
                    key={kw} 
                    onClick={() => toggleFilter(kw)}
                    className={`rounded-full border border-solid px-3 py-1 text-sm transition-colors ${activeFilters.includes(kw) ? 'border-[#FF6B00] bg-[#FF6B00]/10 text-[#FF6B00]' : 'border-[#7FA8B8]/60 text-[#7FA8B8] hover:border-[#FF6B00]'}`}
                  >
                    {kw}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Sidebar (Original styling) */}
          <aside className="hidden lg:flex w-[200px] shrink-0 flex-col gap-[20px]">
            <div className="flex flex-col">
              <h4 className="text-[12px] font-semibold text-[#FF6B00] tracking-[1px] m-[0_0_20px_0] uppercase">FRAMEWORK</h4>
              <ul className="list-none p-0 m-0 flex flex-col gap-[14px]">
                {frameworks.map(fw => (
                  <li 
                    key={fw} 
                    tabIndex={0}
                    role="button"
                    aria-pressed={activeFilters.includes(fw)}
                    className="flex items-start gap-[10px] cursor-pointer hover:opacity-80 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF6B00] rounded p-0.5" 
                    onClick={() => toggleFilter(fw)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleFilter(fw);
                      }
                    }}
                  >
                    <div className={`w-[14px] h-[14px] rounded-full border border-solid mt-[2px] shrink-0 flex items-center justify-center ${activeFilters.includes(fw) ? 'border-[#FF6B00]' : 'border-[#7FA8B8]'}`}>
                      {activeFilters.includes(fw) && <div className="w-[8px] h-[8px] bg-[#FF6B00] rounded-full"></div>}
                    </div>
                    <span className="text-[13px] text-[#7FA8B8] leading-[1.4]">{fw}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col">
              <h4 className="text-[12px] font-semibold text-[#FF6B00] tracking-[1px] m-[0_0_20px_0] uppercase">KEYWORDS</h4>
              <ul className="list-none p-0 m-0 flex flex-col gap-[14px]">
                {keywords.map(kw => (
                  <li 
                    key={kw} 
                    tabIndex={0}
                    role="button"
                    aria-pressed={activeFilters.includes(kw)}
                    className="flex items-start gap-[10px] cursor-pointer hover:opacity-80 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF6B00] rounded p-0.5" 
                    onClick={() => toggleFilter(kw)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleFilter(kw);
                      }
                    }}
                  >
                    <div className={`w-[14px] h-[14px] rounded-full border border-solid mt-[2px] shrink-0 flex items-center justify-center ${activeFilters.includes(kw) ? 'border-[#FF6B00]' : 'border-[#7FA8B8]'}`}>
                      {activeFilters.includes(kw) && <div className="w-[8px] h-[8px] bg-[#FF6B00] rounded-full"></div>}
                    </div>
                    <span className="text-[13px] text-[#7FA8B8] leading-[1.4]">{kw}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="flex flex-wrap w-full lg:w-[796px] gap-[18px] content-start">
            <AnimatePresence mode="popLayout">
              {filteredUseCases.length > 0 ? (
                filteredUseCases.map((uc, index) => (
                  <motion.div 
                    className={`will-change-transform ${
                      uc.cardType === 'card-448' ? 'w-full lg:w-[448px]' : 
                      uc.cardType === 'card-330' ? 'w-full lg:w-[330px]' : 
                      uc.cardType === 'card-256' ? 'w-full lg:w-[calc((100%-36px)/3)]' : 
                      'w-full'
                    }`}
                    key={uc.id}
                    layout
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={fadeUpVariant}
                    custom={index}
                    onClick={() => navigate(`/use-cases/${uc.id}`)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div 
                      className="group flex flex-col h-full bg-[rgba(4,35,53,0.4)] rounded-[16px] overflow-hidden border-b-[2px] border-x-0 border-t-0 border-solid border-[rgba(255,107,0,0.5)] hover:-translate-y-[4px] hover:shadow-[0_8px_24px_rgba(255,107,0,0.15)]"
                      style={{ transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out' }}
                    >
                      <div className="w-full h-[160px] overflow-hidden">
                        <img src={imageMap[uc.image] || uc.image || uc.img} alt={uc.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105" style={{ transition: 'transform 0.4s ease-out' }} />
                      </div>

                      <div className="p-[20px] flex flex-col flex-1">
                        <h3 className="text-[16px] font-medium text-white m-[0_0_12px_0] leading-[1.4]">{uc.title}</h3>
                        <p className="text-[13px] text-[#7FA8B8] leading-[1.5] m-[0_0_20px_0]">{uc.description}</p>
                        
                        <div className="flex flex-wrap gap-[8px] mt-auto">
                          {uc.keywords && uc.keywords.map(tag => (
                            <span className="h-[20px] flex items-center justify-center px-[10px] rounded-[10px] border border-solid border-[rgba(255,107,0,0.4)] text-[#FF6B00] font-['Inter',sans-serif] text-[10px] font-medium" key={tag}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.p className="text-[#7FA8B8] text-[15px] mt-[20px] italic" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  No use cases match the selected filters.
                </motion.p>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}

export default UseCases;