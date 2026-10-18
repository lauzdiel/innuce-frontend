import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import gridBg from '../../assets/grid_bg.svg';

// LOGOS
import spikifyLogo from '../../assets/spikify.svg';
import neurobenchLogo from '../../assets/neurobench.svg';
import nirLogo from '../../assets/nir.svg';
import snn4cspLogo from '../../assets/snn4csp.svg';
import faeryLogo from '../../assets/faery.svg';
import gennLogo from '../../assets/genn.svg';
import pyspinnaker2Logo from '../../assets/pyspinnaker2.svg';
import lavaLogo from '../../assets/lava.svg';
import metatfLogo from '../../assets/metatf.svg';

import spinnaker2HwLogo from '../../assets/spinnaker2_hw.svg';
import stm32Logo from '../../assets/stm32.svg';
import brainchipLogo from '../../assets/brainchip.svg';
import jetsonLogo from '../../assets/jetson.svg';
import zynqLogo from '../../assets/zynq.svg';

const logoMap = {
  'Spikify': spikifyLogo, 'spikify.svg': spikifyLogo,
  'NeuroBench': neurobenchLogo, 'neurobench.svg': neurobenchLogo,
  'NIR': nirLogo, 'nir.svg': nirLogo,
  'snn4csp': snn4cspLogo, 'snn4csp.svg': snn4cspLogo,
  'Faery': faeryLogo, 'faery.svg': faeryLogo,
  'GeNN': gennLogo, 'genn.svg': gennLogo,
  'PySpiNNaker2': pyspinnaker2Logo, 'pyspinnaker2.svg': pyspinnaker2Logo,
  'Lava': lavaLogo, 'lava.svg': lavaLogo,
  'MetaTF': metatfLogo, 'metatf.svg': metatfLogo,
  'SpiNNaker2': spinnaker2HwLogo, 'spinnaker2_hw.svg': spinnaker2HwLogo,
  'STM32 Series': stm32Logo, 'stm32.svg': stm32Logo,
  'BrainChip': brainchipLogo, 'brainchip.svg': brainchipLogo,
  'NVIDIA Jetson': jetsonLogo, 'jetson.svg': jetsonLogo,
  'Xilinx ZYNQ2': zynqLogo, 'zynq.svg': zynqLogo
};

const ExternalLinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

import { getInfrastructures } from '../../services/api';

import LoadingSpinner from '../../components/LoadingSpinner';

function Infrastructure() {
  const navigate = useNavigate();
  const [activeCardId, setActiveCardId] = useState(null);

  const { data: infrastructures = [], isLoading, isError } = useQuery({
    queryKey: ['infrastructures'],
    queryFn: getInfrastructures
  });

  if (isLoading) {
    return <LoadingSpinner message="Loading lab infrastructures..." />;
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-[#021B2B] text-white px-4 text-center font-['Inter',sans-serif]">
        <p className="text-red-400 text-[16px] mb-2 font-medium">Failed to load infrastructures.</p>
        <p className="text-[#7FA8B8] text-[14px]">Please refresh the page to try again.</p>
      </div>
    );
  }

  const handleCardClick = (id) => {
    if (window.innerWidth <= 1024) {
      setActiveCardId(activeCardId === id ? null : id);
    }
  };

  const toolsData = infrastructures.filter(item => item.type === 'tool');
  const hardwareData = infrastructures.filter(item => item.type === 'hardware');

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="relative w-full min-h-screen bg-[#021B2B] text-white pt-[180px] pb-[120px] overflow-x-hidden font-['Inter',sans-serif]">
      {/* Background Grid */}
      <div className="absolute top-0 left-0 w-full h-[800px] z-0 pointer-events-none">
        <img 
          src={gridBg} 
          alt="Grid Background" 
          className="w-full h-full object-cover opacity-30"
          style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' }}
        />
      </div>

      {/* Floating Cubes (Only Right Cube remains) */}
      <motion.div 
        className="absolute rounded-[16px] bg-[rgba(2,48,71,0.37)] border-2 border-solid border-[rgba(127,168,184,0.3)] z-[1] pointer-events-none hidden md:block w-[120px] h-[120px] top-[15%] right-[12%] will-change-transform rotate-[25deg]" 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex flex-col items-center w-full px-[5%] box-border">
        
        {/* HERO SECTION */}
        <motion.section 
          className="text-center max-w-[960px] mb-[120px] will-change-transform"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
        >
          <h1 className="font-['Inter',sans-serif] text-[50px] md:text-[72px] lg:text-[96px] font-normal leading-[1.1] lg:leading-[110px] tracking-[-1px] m-[0_0_40px_0] whitespace-normal lg:whitespace-nowrap">
            The Neuromorphic<br />
            <span className="bg-[linear-gradient(90deg,#FF6B00_0%,#FF0000_100%)] text-transparent bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">Prototyping Platform</span>
          </h1>
          <p className="font-['Inter',sans-serif] text-[16px] font-normal leading-[1.6] text-[#7FA8B8] m-[0_auto_40px_auto] max-w-[800px] text-center">
            InNuCe Lab offers a complete, easy to use Prototyping Platform for all Neuromorphic needs.
            From the development, with the most updated and innovative tools and libraries, to the
            deployment, done on the most popular and cutting-edge hardware.
          </p>
          <div className="flex justify-center gap-[16px] flex-col md:flex-row items-center">
            <button 
              className="w-[180px] h-[42px] rounded-[8px] bg-[rgba(255,255,255,0.05)] border border-solid border-[rgba(127,168,184,0.3)] text-white font-['Inter',sans-serif] text-[14px] font-normal cursor-pointer transition-all duration-200 ease-in hover:bg-[rgba(255,255,255,0.1)] hover:border-white"
              onClick={() => navigate('/coming-soon')}
            >
              Go to the Platform
            </button>
            <button 
              className="w-[220px] h-[42px] rounded-[8px] bg-[linear-gradient(90deg,#FF6B00_0%,#FF0000_100%)] border-none text-white font-['Inter',sans-serif] text-[14px] font-normal cursor-pointer transition-all duration-200 ease-in hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(255,107,0,0.4)]"
              onClick={() => navigate('/services')}
            >
              Discover our Services
            </button>
          </div>
        </motion.section>

        {/* SUPPORTED TOOLS */}
        <motion.section 
          className="w-full max-w-[1280px] mb-[100px] flex flex-col items-center will-change-transform"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUpVariant}
        >
          <h2 className="font-['Inter',sans-serif] text-[32px] font-semibold text-white mb-[50px] text-center">Supported Tools</h2>
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-[24px]">
            {toolsData.map((tool) => {
              const isActive = activeCardId === `tool-${tool.id}`;
              return (
                <motion.div 
                  className="w-full md:w-[calc(50%-12px)] lg:w-[410px] will-change-transform" 
                  key={`tool-${tool.id}`}
                  onClick={() => handleCardClick(`tool-${tool.id}`)}
                >
                  <div className={`group relative w-full border border-solid rounded-[16px] backdrop-blur-[10px] box-border flex flex-col items-center justify-start p-[20px] text-center overflow-hidden transition-[height,transform,border-color,background-color,box-shadow] duration-500 ease-out hover:h-[302px] hover:-translate-y-[5px] hover:border-[rgba(255,107,0,0.4)] hover:bg-[rgba(4,35,53,0.6)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.3)] ${isActive ? 'h-[302px] -translate-y-[5px] border-[rgba(255,107,0,0.4)] bg-[rgba(4,35,53,0.6)] shadow-[0_15px_35px_rgba(0,0,0,0.3)]' : 'h-[225px] border-[rgba(127,168,184,0.15)] bg-[rgba(4,35,53,0.4)]'}`}>
                    <div className="absolute top-0 inset-x-0 mx-auto w-[64px] h-[4px] bg-[linear-gradient(90deg,#FF6B00_0%,#FF0000_100%)] rounded-bl-[4px] rounded-br-[4px]"></div>
                    
                    <div className="flex flex-col items-center w-full">
                      <div className="h-[48px] flex items-center justify-center mt-[10px]">
                        <img src={logoMap[tool.logo] || logoMap[tool.name] || tool.logo} alt={tool.name} className="w-auto h-auto max-w-[140px] max-h-[48px] object-contain block bg-transparent" />
                      </div>
                      <h3 className="font-['Inter',sans-serif] text-[20px] font-normal text-white m-[16px_0_8px_0]">{tool.name}</h3>
                      <p className="font-['Inter',sans-serif] text-[14px] font-normal text-[#7FA8B8] leading-[1.5] m-0 max-w-[90%]">{tool.description}</p>
                    </div>

                    <div className={`flex gap-[16px] mt-[24px] pointer-events-none transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto ${isActive ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-[20px]'}`}>
                      <button className="flex items-center justify-center h-[40px] px-[20px] rounded-[8px] bg-[rgba(255,255,255,0.05)] border border-solid border-[rgba(127,168,184,0.3)] text-white font-['Inter',sans-serif] text-[14px] font-medium cursor-pointer transition-all duration-200 hover:bg-[rgba(255,255,255,0.15)] hover:border-white" onClick={(e) => { e.stopPropagation(); navigate('/apply'); }}>Try On <ExternalLinkIcon /></button>
                      <button className="flex items-center justify-center h-[40px] px-[20px] rounded-[8px] bg-[rgba(255,255,255,0.05)] border border-solid border-[rgba(127,168,184,0.3)] text-white font-['Inter',sans-serif] text-[14px] font-medium cursor-pointer transition-all duration-200 hover:bg-[rgba(255,255,255,0.15)] hover:border-white" onClick={(e) => { e.stopPropagation(); if (tool.docsLink && tool.docsLink !== '#') window.open(tool.docsLink, '_blank', 'noopener,noreferrer'); }}>Docs</button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* SUPPORTED HARDWARE */}
        <motion.section 
          className="w-full max-w-[1280px] mb-[100px] flex flex-col items-center will-change-transform"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUpVariant}
        >
          <h2 className="font-['Inter',sans-serif] text-[32px] font-semibold text-white mb-[50px] text-center">Supported Hardware</h2>
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-[24px] max-w-[1280px]">
            {hardwareData.map((hw) => {
              const isActive = activeCardId === `hw-${hw.id}`;
              return (
                <motion.div 
                  className="w-full md:w-[calc(50%-12px)] lg:w-[410px] will-change-transform" 
                  key={`hw-${hw.id}`}
                  onClick={() => handleCardClick(`hw-${hw.id}`)}
                >
                  <div className={`group relative w-full border border-solid rounded-[16px] backdrop-blur-[10px] box-border flex flex-col items-center justify-start p-[20px] text-center overflow-hidden transition-[height,transform,border-color,background-color,box-shadow] duration-500 ease-out hover:h-[302px] hover:-translate-y-[5px] hover:border-[rgba(255,107,0,0.4)] hover:bg-[rgba(4,35,53,0.6)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.3)] ${isActive ? 'h-[302px] -translate-y-[5px] border-[rgba(255,107,0,0.4)] bg-[rgba(4,35,53,0.6)] shadow-[0_15px_35px_rgba(0,0,0,0.3)]' : 'h-[225px] border-[rgba(127,168,184,0.15)] bg-[rgba(4,35,53,0.4)]'}`}>
                    <div className="absolute top-0 inset-x-0 mx-auto w-[64px] h-[4px] bg-[linear-gradient(90deg,#FF6B00_0%,#FF0000_100%)] rounded-bl-[4px] rounded-br-[4px]"></div>

                    <div className="flex flex-col items-center w-full">
                      <div className="w-full lg:w-[358px] h-[64px] bg-[rgba(255,255,255,0.03)] border border-solid border-[rgba(127,168,184,0.1)] rounded-[8px] flex items-center justify-center mt-[10px] mb-[8px] p-[5px]">
                        <img src={logoMap[hw.logo] || logoMap[hw.name] || hw.logo} alt={hw.name} className="w-auto h-auto max-w-[280px] max-h-[50px] object-contain block bg-transparent" />
                      </div>
                      <h3 className="font-['Inter',sans-serif] text-[20px] font-normal text-white m-[16px_0_8px_0]">{hw.name}</h3>
                      <p className="font-['Inter',sans-serif] text-[14px] font-normal text-[#7FA8B8] leading-[1.5] m-0 max-w-[90%]">{hw.description}</p>
                    </div>

                    <div className={`flex gap-[16px] mt-[24px] pointer-events-none transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto ${isActive ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-[20px]'}`}>
                      <button className="flex items-center justify-center h-[40px] px-[20px] rounded-[8px] bg-[rgba(255,255,255,0.05)] border border-solid border-[rgba(127,168,184,0.3)] text-white font-['Inter',sans-serif] text-[14px] font-medium cursor-pointer transition-all duration-200 hover:bg-[rgba(255,255,255,0.15)] hover:border-white" onClick={(e) => { e.stopPropagation(); navigate('/apply'); }}>Try On <ExternalLinkIcon /></button>
                      <button className="flex items-center justify-center h-[40px] px-[20px] rounded-[8px] bg-[rgba(255,255,255,0.05)] border border-solid border-[rgba(127,168,184,0.3)] text-white font-['Inter',sans-serif] text-[14px] font-medium cursor-pointer transition-all duration-200 hover:bg-[rgba(255,255,255,0.15)] hover:border-white" onClick={(e) => { e.stopPropagation(); if (hw.docsLink && hw.docsLink !== '#') window.open(hw.docsLink, '_blank', 'noopener,noreferrer'); }}>Docs</button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default Infrastructure;
