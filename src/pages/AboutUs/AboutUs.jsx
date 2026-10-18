import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import gridBg from '../../assets/grid_bg.svg';
import brainIcon from '../../assets/brain_team.svg';

import polminIcon from '../../assets/polmin.svg';
import linkedinIcon from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github_icon.svg';
import orcidIcon from '../../assets/orcid.svg';
import LoadingSpinner from '../../components/LoadingSpinner';

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="7" x2="17" y2="17"></line>
    <polyline points="17 7 17 17 7 17"></polyline>
  </svg>
);

import { getTeam } from '../../services/api';

function AboutUs() {
  const colors = ["orange", "red", "blue"];
  const [flippedCardId, setFlippedCardId] = useState(null);

  const handleCardFlip = (id) => {
    setFlippedCardId(prev => (prev === id ? null : id));
  };

  const { data: teamMembers = [], isLoading, isError } = useQuery({
    queryKey: ['team'],
    queryFn: getTeam
  });

  if (isLoading) {
    return <LoadingSpinner message="Loading team members..." />;
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-[#021B2B] text-white px-4 text-center font-['Inter',sans-serif]">
        <p className="text-red-400 text-[16px] mb-2 font-medium">Failed to load team members.</p>
        <p className="text-[#7FA8B8] text-[14px]">Please refresh the page to try again.</p>
      </div>
    );
  }

  const lineColorClass = (color) => {
    if (color === 'orange') return 'bg-[#FF6B00]';
    if (color === 'red') return 'bg-[#FF0000]';
    return 'bg-[#7FA8B8]';
  };

  return (
    <div className="relative w-full min-h-screen bg-[#021B2B] text-white overflow-x-hidden pb-[120px] font-['Inter',sans-serif]">
      
      {/* Background Grid */}
      <div className="absolute top-0 left-0 w-full h-[650px] z-0 pointer-events-none [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.7)_0%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.7)_0%,transparent_100%)]">
        <img src={gridBg} alt="Grid" className="w-full h-full object-cover opacity-30" />
      </div>

      {/* Floating Cubes — Framer Motion only, NO Tailwind transitions */}
      <motion.div 
        className="absolute rounded-[16px] z-[1] pointer-events-none border-2 border-solid border-[rgba(127,168,184,0.25)] w-[160px] h-[160px] top-[360px] left-[6%] will-change-transform hidden md:block"
        animate={{ y: [0, -20, 0], rotate: [25, 30, 25] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute rounded-[16px] z-[1] pointer-events-none border-2 border-solid border-[rgba(255,107,0,0.35)] w-[180px] h-[180px] top-[140px] right-[12%] will-change-transform hidden md:block"
        animate={{ y: [0, -20, 0], rotate: [-15, -10, -15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Hero Section */}
      <section className="relative z-10 max-w-[850px] mx-auto pt-[200px] pb-[100px] px-[24px] text-center">
        <motion.h1 
          className="text-[42px] sm:text-[56px] font-bold tracking-[-1.5px] m-[0_0_24px_0] bg-[linear-gradient(90deg,#FF6B00_0%,#FF0000_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block will-change-transform"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h1>

        <motion.p 
          className="text-[16px] leading-[1.6] text-[#7FA8B8] mx-auto font-normal will-change-transform"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We are a research team at EDA Group, Politecnico di Torino, developing cutting-edge solutions in neuromorphic computing, AIoT, and bioinformatics. Our work bridges hardware and software to enable intelligent, efficient, and scalable systems.
        </motion.p>
      </section>

      {/* Info Columns */}
      <section className="relative z-10 w-full my-[120px] mx-auto px-[10%] flex flex-col md:flex-row justify-between gap-[40px] md:gap-[60px] box-border">
        <motion.div className="flex-1 max-w-[434px] will-change-transform" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-[12px] mb-[20px]"><ArrowIcon /> <h3 className="font-['Inter',sans-serif] text-[14px] font-medium tracking-[1.5px] text-[#FF6B00] m-0 uppercase">OUR MISSION</h3></div>
          <p className="font-['Inter',sans-serif] text-[14px] font-normal leading-[1.7] text-white m-0 opacity-90">We strive to promote innovation through neuromorphic technologies by making it accessible and <strong className="text-white font-bold opacity-100">impactful</strong> for a broader audience.</p>
        </motion.div>

        <motion.div className="flex-1 max-w-[434px] will-change-transform" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="flex items-center gap-[12px] mb-[20px]"><ArrowIcon /> <h3 className="font-['Inter',sans-serif] text-[14px] font-medium tracking-[1.5px] text-[#FF6B00] m-0 uppercase">OUR AIM</h3></div>
          <p className="font-['Inter',sans-serif] text-[14px] font-normal leading-[1.7] text-white m-0 opacity-90">We are developing practical tools to support and accelerate neuromorphic system design and experimentation.</p>
        </motion.div>

        <motion.div className="flex-1 max-w-[434px] will-change-transform" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
          <div className="flex items-center gap-[12px] mb-[20px]"><ArrowIcon /> <h3 className="font-['Inter',sans-serif] text-[14px] font-medium tracking-[1.5px] text-[#FF6B00] m-0 uppercase">OUR LOCATION</h3></div>
          <p className="font-['Inter',sans-serif] text-[14px] font-normal leading-[1.7] text-white m-0 opacity-90">We are based at Politecnico di Torino, Italy's first engineering school and a hub for technological excellence.</p>
        </motion.div>
      </section>

      {/* Meet the Team */}
      <section className="relative z-10 max-w-[950px] mx-auto px-[24px] text-center">
        <motion.h2 
          className="text-[36px] sm:text-[46px] font-bold mb-[50px] bg-[linear-gradient(90deg,#FF6B00_0%,#FF0000_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block will-change-transform"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Meet the Team
        </motion.h2>
        
        <div className="flex flex-wrap justify-center gap-[20px]">
          {teamMembers.map((member, index) => {
            const memberColor = member.color || colors[index % colors.length];
            return (
            <motion.div 
              className="w-[193px] h-[231px] bg-transparent will-change-transform"
              style={{ perspective: '1000px' }}
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }} 
            >
              {/* group wrapper for CSS hover on desktop, click/tap on mobile */}
              <div 
                className="group relative w-full h-full hover:-translate-y-[5px] cursor-pointer" 
                style={{ transition: 'transform 0.3s ease' }}
                onClick={() => handleCardFlip(member.id)}
              >
                {/* Card Inner — 3D flip on hover or tap */}
                <div 
                  className={`relative w-full h-full group-hover:[transform:rotateY(180deg)] ${flippedCardId === member.id ? '[transform:rotateY(180deg)]' : ''}`} 
                  style={{ transition: 'transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1)', transformStyle: 'preserve-3d' }}
                >
                  {/* FRONT FACE */}
                  <div 
                    className="absolute w-full h-full bg-[rgba(4,35,53,0.6)] border border-solid border-[rgba(127,168,184,0.15)] rounded-[16px] backdrop-blur-[5px] box-border p-[30px_10px_20px_10px] flex flex-col items-center group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                    style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transition: 'box-shadow 0.3s ease' }}
                  >
                    <div className={`w-[48px] h-[5.61px] rounded-[5.61px] mb-[20px] shrink-0 ${lineColorClass(memberColor)}`}></div>
                    <img 
                      src={member.avatar || brainIcon} 
                      alt={member.name} 
                      className={`w-[64px] ${member.avatar ? 'h-[64px] object-cover rounded-full' : 'h-auto'} mb-auto`} 
                    />
                    <h4 className="font-['Inter',sans-serif] text-[15px] font-semibold text-white m-[0_0_6px_0] text-center">{member.name}</h4>
                    <p className="font-['Inter',sans-serif] text-[12px] font-normal text-[#7FA8B8] m-0 text-center">{member.role}</p>
                  </div>

                  {/* BACK FACE */}
                  <div 
                    className="absolute w-full h-full bg-[rgba(4,35,53,0.6)] border border-solid border-[rgba(127,168,184,0.15)] rounded-[16px] backdrop-blur-[5px] box-border p-[30px_10px_20px_10px] flex flex-col items-center group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                    style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)', transition: 'box-shadow 0.3s ease' }}
                  >
                    <div className={`w-[48px] h-[5.61px] rounded-[5.61px] mb-[20px] shrink-0 ${lineColorClass(memberColor)}`}></div>
                    
                    {/* 2x2 Social Icons */}
                    <div className="grid grid-cols-2 gap-[12px] mb-auto -mt-[5px]">
                      <a 
                        href={member.polmin || "#"} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`flex items-center justify-center w-[44px] h-[44px] rounded-full hover:scale-110 hover:opacity-80 ${!member.polmin ? 'opacity-40 cursor-default' : ''}`} 
                        style={{ transition: 'transform 0.2s ease, opacity 0.2s ease' }}
                        onClick={(e) => { e.stopPropagation(); if (!member.polmin) e.preventDefault(); }}
                      >
                        <img src={polminIcon} alt="Polmin" className="w-full h-full object-contain" />
                      </a>
                      <a 
                        href={member.linkedin || "#"} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`flex items-center justify-center w-[44px] h-[44px] rounded-full hover:scale-110 hover:opacity-80 ${!member.linkedin ? 'opacity-40 cursor-default' : ''}`} 
                        style={{ transition: 'transform 0.2s ease, opacity 0.2s ease' }}
                        onClick={(e) => { e.stopPropagation(); if (!member.linkedin) e.preventDefault(); }}
                      >
                        <img src={linkedinIcon} alt="LinkedIn" className="w-full h-full object-contain" />
                      </a>
                      <a 
                        href={member.github || "#"} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`flex items-center justify-center w-[44px] h-[44px] rounded-full hover:scale-110 hover:opacity-80 ${!member.github ? 'opacity-40 cursor-default' : ''}`} 
                        style={{ transition: 'transform 0.2s ease, opacity 0.2s ease' }}
                        onClick={(e) => { e.stopPropagation(); if (!member.github) e.preventDefault(); }}
                      >
                        <img src={githubIcon} alt="GitHub" className="w-full h-full object-contain" />
                      </a>
                      <a 
                        href={member.orcid || "#"} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`flex items-center justify-center w-[44px] h-[44px] rounded-full hover:scale-110 hover:opacity-80 ${!member.orcid ? 'opacity-40 cursor-default' : ''}`} 
                        style={{ transition: 'transform 0.2s ease, opacity 0.2s ease' }}
                        onClick={(e) => { e.stopPropagation(); if (!member.orcid) e.preventDefault(); }}
                      >
                        <img src={orcidIcon} alt="ORCID" className="w-full h-full object-contain" />
                      </a>
                    </div>

                    <h4 className="font-['Inter',sans-serif] text-[15px] font-semibold text-white m-[0_0_6px_0] text-center">{member.name}</h4>
                    <p className="font-['Inter',sans-serif] text-[12px] font-normal text-[#7FA8B8] m-0 text-center">{member.role}</p>
                  </div>

                </div>
              </div>
            </motion.div>
          )})}
        </div>
      </section>

    </div>
  );
}

export default AboutUs;