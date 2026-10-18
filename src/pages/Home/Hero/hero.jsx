import React from 'react';
import { motion } from 'framer-motion';

// Background grid
import gridBg from '../../../assets/grid_bg.svg';

// Partner logos
import consigliaLogo from '../../../assets/consiglia_logo.svg';
import ministerLogo from '../../../assets/minister_logo.svg';
import europeLogo from '../../../assets/europe_logo.svg';
import politoLogo from '../../../assets/polito_logo.svg';
import italiaLogo from '../../../assets/italia_logo.svg';
import ebrainsLogo from '../../../assets/ebrains_logo.svg';

function Hero() {
  
  const handleScrollToDomains = () => {
    const domainsSection = document.getElementById('domains');
    
    if (domainsSection) {
      const elementPosition = domainsSection.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 120;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({
        top: window.innerHeight - 120,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between pt-[120px] px-[5%] pb-[40px] lg:pt-[130px] lg:px-[10%] box-border overflow-hidden">
      
      {/* 1. GRID BG */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <img src={gridBg} alt="Grid Background" className="w-full h-full object-cover opacity-[0.35] [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_95%)] [mask-image:linear-gradient(to_bottom,black_60%,transparent_95%)]" />
      </div>

      {/* 2. FLOATING CUBES */}
      <motion.div 
        className="absolute rounded-[16px] bg-[rgba(2,48,71,0.37)] border-2 border-solid border-[rgba(127,168,184,0.3)] z-[1] pointer-events-none w-[170px] h-[170px] top-[22%] right-[15%] hidden lg:block will-change-transform"
        initial={{ rotate: 15 }}
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute rounded-[16px] bg-[rgba(2,48,71,0.37)] border-2 border-solid border-[rgba(127,168,184,0.3)] z-[1] pointer-events-none w-[80px] h-[80px] top-[52%] right-[10%] hidden lg:block will-change-transform"
        initial={{ rotate: 45 }}
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div 
        className="absolute rounded-[16px] bg-[rgba(2,48,71,0.37)] border-2 border-solid border-[rgba(127,168,184,0.3)] z-[1] pointer-events-none w-[130px] h-[130px] top-[72%] left-[8%] hidden lg:block will-change-transform"
        initial={{ rotate: -20 }}
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* 3. MAIN CONTENT */}
      <motion.div 
        className="relative z-10 max-w-[800px] mt-[20px] flex flex-col items-center text-center lg:items-start lg:text-left mx-auto lg:mx-0 will-change-transform"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >

        {/* Hero Badge */}
        <div className="inline-flex items-center gap-[10px] py-[8px] px-[16px] rounded-[50px] bg-[linear-gradient(90deg,rgba(255,107,0,0.2)_0%,rgba(255,0,0,0.2)_100%)] border border-[rgba(127,167,184,0.5)]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
          </svg>
          <span className="font-['Poppins',sans-serif] text-[14px] text-[#7FA8B8]">The Neuromorphic Computing Research Infrastructure @ Politecnico di Torino</span>
        </div>

        {/* MAIN TITLE */}
        <h1 className="font-['Inter',sans-serif] font-medium text-[72px] lg:text-[145px] leading-[0.9] lg:leading-[0.85] tracking-[-3px] my-[12px] lg:my-[20px]">
          <span className="text-white">i</span>
          <span className="bg-[linear-gradient(90deg,#FF6B00_0%,#FF0000_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">n</span>
          <span className="text-white">N</span>
          <span className="bg-[linear-gradient(90deg,#FF6B00_0%,#FF0000_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">u</span>
          <span className="text-white">CE</span>
          <br />
          <span className="bg-[linear-gradient(90deg,#FF6B00_0%,#FF0000_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">Lab</span>
        </h1>

        <p className="font-['Inter',sans-serif] font-normal text-[16px] lg:text-[18px] leading-[1.45] text-[#7FA8B8] mt-0 mb-[24px]">
          Bring your brain-inspired projects to life with our own Cloud-Based<br />
          Neuromorphic Prototyping Platform.<br />
          Know more about our software tools, discover our development<br />
          services or just take a look at our use cases.
        </p>

        {/* Know More Button */}
        <button className="bg-[linear-gradient(90deg,#FF6B00_0%,#FF0000_100%)] text-white border-none rounded-[8px] py-[14px] px-[28px] font-['Inter',sans-serif] font-semibold text-[15px] cursor-pointer inline-flex items-center gap-[10px] transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(255,107,0,0.4)]" onClick={handleScrollToDomains}>
          Know More
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </button>
      </motion.div>

      {/* 4. PARTNER LOGOS */}
      <div className="relative z-10 flex justify-center items-center gap-[30px] lg:gap-[50px] flex-wrap mt-[60px] border-x-0 border-b-0 border-t border-solid border-[rgba(127,168,184,0.15)] pt-[25px] lg:pt-[35px]">
        <img src={consigliaLogo} alt="Consiglio Nazionale delle Ricerche" className="h-[48px] object-contain opacity-80 transition-all duration-300 hover:opacity-100 hover:scale-105" />
        <img src={ministerLogo} alt="Ministero" className="h-[48px] object-contain opacity-80 transition-all duration-300 hover:opacity-100 hover:scale-105" />
        <img src={europeLogo} alt="Funded by EU" className="h-[48px] object-contain opacity-80 transition-all duration-300 hover:opacity-100 hover:scale-105" />
        <img src={politoLogo} alt="Politecnico di Torino" className="h-[48px] object-contain opacity-80 transition-all duration-300 hover:opacity-100 hover:scale-105" />
        <img src={italiaLogo} alt="Italia Domani" className="h-[48px] object-contain opacity-80 transition-all duration-300 hover:opacity-100 hover:scale-105" />
        <img src={ebrainsLogo} alt="EBRAINS Italy" className="h-[48px] object-contain opacity-80 transition-all duration-300 hover:opacity-100 hover:scale-105" />
      </div>

    </div>
  );
}

export default Hero;