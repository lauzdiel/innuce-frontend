import React from 'react';
import { motion } from 'framer-motion'; 

import brainIcon from '../../../assets/brain_icon.svg';
import chipIcon from '../../../assets/chip_icon.svg';
import bioIcon from '../../../assets/bio_icon.svg';

function Domains() {
  const domainCards = [
    {
      id: 1,
      title: "Neuromorphic Computing",
      description: "The emerging technology inspired by the biological brain that accelerates and enhances AI applications.",
      icon: brainIcon,
      colorClass: "card-orange" 
    },
    {
      id: 2,
      title: "AIoT",
      description: "Where sensors and microcontrollers meet AI to improve cities, industries and even your house.",
      icon: chipIcon,
      colorClass: "card-blue"
    },
    {
      id: 3,
      title: "Bioinformatics",
      description: "Combining biology, computer science, and mathematics to analyze biological data, genomics and proteomics.",
      icon: bioIcon,
      colorClass: "card-red"
    }
  ];

  return (
    <section className="py-[60px] px-[5%] lg:py-[80px] lg:px-[10%] flex flex-col items-center bg-transparent" id="domains">
      
      <motion.h2 
        className="text-white font-['Inter',sans-serif] text-[36px] font-semibold mb-[60px] text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Our Application Domains
      </motion.h2>
      
      <div className="flex justify-center gap-[30px] w-full max-w-[1200px] flex-wrap lg:flex-nowrap">
        {domainCards.map((card, index) => {
          let cardClasses = "";
          let hoverBgClass = "";
          if (card.colorClass === "card-orange") {
            cardClasses = "border-x-0 border-b-0 border-t-[3px] border-solid border-[rgba(255,107,0,0.8)] [box-shadow:0px_-10px_40px_-10px_rgba(255,107,0,0.3)] [--glow-color:#FF6B00]";
            hoverBgClass = "group-hover:bg-[rgba(255,107,0,0.2)] group-hover:border-[#FF6B00]";
          } else if (card.colorClass === "card-blue") {
            cardClasses = "border-x-0 border-b-0 border-t-[3px] border-solid border-[rgba(127,168,184,0.8)] [box-shadow:0px_-10px_40px_-10px_rgba(127,168,184,0.3)] [--glow-color:#7FA8B8]";
            hoverBgClass = "group-hover:bg-[rgba(127,168,184,0.2)] group-hover:border-[#7FA8B8]";
          } else if (card.colorClass === "card-red") {
            cardClasses = "border-x-0 border-b-0 border-t-[3px] border-solid border-[rgba(255,0,0,0.8)] [box-shadow:0px_-10px_40px_-10px_rgba(255,0,0,0.3)] [--glow-color:#FF0000]";
            hoverBgClass = "group-hover:bg-[rgba(255,0,0,0.2)] group-hover:border-[#FF0000]";
          }

          return (
            <motion.div 
              className="w-full max-w-[400px] md:max-w-none md:w-[calc(50%-15px)] lg:w-[320px] will-change-transform" 
              key={card.id}
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            >
              <div className={`group relative bg-[#0c2b3d] rounded-[67px] p-[50px_30px] w-full h-full flex flex-col items-center text-center backdrop-blur-[10px] z-[1] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-[67px] before:bg-[radial-gradient(ellipse_at_top,var(--glow-color)_0%,transparent_60%)] before:opacity-15 before:z-0 before:pointer-events-none transition-transform duration-300 ease-out hover:-translate-y-[10px] ${cardClasses}`}>
                <div className={`relative z-[2] w-[70px] h-[70px] bg-[rgba(255,255,255,0.05)] rounded-full flex justify-center items-center mb-[25px] border-0 border border-solid border-[rgba(255,255,255,0.1)] transition-all duration-400 ease-out group-hover:scale-110 ${hoverBgClass}`}>
                  <img src={card.icon} alt={card.title} className="w-[30px] h-auto transition-transform duration-[600ms] ease-in-out group-hover:[transform:rotate(360deg)]" />
                </div>
                
                <h3 className="relative z-[2] text-white font-['Inter',sans-serif] text-[22px] font-semibold mb-[15px]">{card.title}</h3>
                <p className="relative z-[2] text-[#7FA8B8] font-['Inter',sans-serif] text-[14px] leading-[1.6] font-normal">{card.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Domains;