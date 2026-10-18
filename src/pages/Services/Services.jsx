import React, { useEffect } from 'react';
import { motion } from 'framer-motion';


import gridBg from '../../assets/grid_bg.svg';
import in_foto1 from '../../assets/in_foto1.webp'; 
import in_foto2 from '../../assets/in_foto2.webp';
import in_foto3 from '../../assets/in_foto3.webp';
import in_foto4 from '../../assets/in_foto4.webp';

function Services() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="relative w-full min-h-screen py-[160px] md:pb-[120px] bg-[#021B2B] text-white overflow-x-hidden font-['Inter',sans-serif]">
      
      {/* --- GRID --- */}
      <div className="absolute top-0 left-0 w-full h-[900px] z-0 pointer-events-none">
        <img 
          src={gridBg} 
          alt="Grid Background" 
          className="w-full h-full object-cover opacity-25 [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]" 
        />
      </div>

      {/* --- WIREFRAME SQUARES --- */}
      <div className="absolute w-[120px] h-[120px] border border-solid border-[rgba(127,168,184,0.15)] rounded-[12px] pointer-events-none z-[5] top-[180px] left-[8%] -rotate-[15deg]"></div>
      <div className="absolute w-[120px] h-[120px] border border-solid border-[rgba(127,168,184,0.15)] rounded-[12px] pointer-events-none z-[5] top-[600px] right-[5%] rotate-[25deg]"></div>

      <div className="relative z-10 w-full max-w-[900px] mx-auto px-[5%] box-border flex flex-col items-center">
        
        {/* --- HEADERS --- */}
        <motion.div 
          className="w-full text-center mb-[60px] lg:flex lg:flex-col lg:items-center will-change-transform"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
        >
          <h1 className="text-[40px] md:text-[52px] font-semibold tracking-[-1.5px] m-0 leading-[1.2] bg-[linear-gradient(90deg,#FF6B00_0%,#FF0000_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center">
            Heterogeneous Prototyping Platform
          </h1>
        </motion.div>

        {/* --- CONTENT AREA --- */}
        <div className="w-full flex flex-col items-center">
          
          {/* Foto 1: Neuromorphic Computing Diagram */}
          <motion.img 
            src={in_foto1} 
            alt="Neuromorphic Computing Paradigm" 
            loading="lazy"
            decoding="async"
            className="w-full max-w-full h-auto rounded-[12px] mb-[60px] will-change-transform"
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUpVariant}
          />

          {/* Text Block 1 */}
          <motion.div className="w-full text-left mb-[40px] will-change-transform" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
            <p className="text-[15px] md:text-[16px] leading-[1.8] text-[#A0C0CF] mb-[20px]">
              The <strong className="text-white font-semibold">Industry 5.0</strong> and AIoT sectors demand low-power, low-latency, and privacy-preserving computation. <strong className="text-white font-semibold">Neuromorphic HW</strong> offer brain-inspired, energy-efficient alternatives, but remains <strong className="text-white font-semibold">costly, fragmented, and difficult to access</strong>.
            </p>
            <p className="text-[15px] md:text-[16px] leading-[1.8] text-[#A0C0CF] mb-[20px]">
              To overcome this barrier, we introduce the <strong className="text-white font-semibold">inNuCE Research Infrastructure</strong>, a two-level facility that combines:
            </p>
            <ul className="text-[15px] md:text-[16px] leading-[1.8] text-[#A0C0CF] mb-[24px] pl-[24px] list-disc">
              <li className="mb-[12px]">The <strong className="text-white font-semibold">Heterogeneous Prototyping Platform (HPP)</strong> cloud-based Prototype-as-a-Service, democratizing access to neuromorphic and digital computing.</li>
              <li className="mb-[12px]">A <strong className="text-white font-semibold">dedicated laboratory</strong> hosting physical equipment such as neuromorphic sensors and boards for direct experimentation.</li>
            </ul>
          </motion.div>

          {/* Foto 2: inNuCE RI */}
          <motion.img 
            src={in_foto2} 
            alt="inNuCE RI Architecture" 
            loading="lazy"
            decoding="async"
            className="w-full max-w-[800px] h-auto rounded-[12px] mb-[40px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] will-change-transform"
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUpVariant}
          />

          {/* Subtitle */}
          <motion.h2 
            className="text-[28px] md:text-[36px] font-medium tracking-[-1px] my-[60px] mb-[30px] text-center bg-[linear-gradient(90deg,#FF6B00_0%,#FF0000_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] will-change-transform"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
          >
            inNuCE Research Infrastructure
          </motion.h2>

          {/* Text Block 2 */}
          <motion.div className="w-full text-left mb-[40px] will-change-transform" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
            <p className="text-[15px] md:text-[16px] leading-[1.8] text-[#A0C0CF] mb-[20px]">
              The inNuCE-HPP enables researchers, developers, and students to design, simulate, deploy, and benchmark neuroAI models across <strong className="text-white font-semibold">heterogeneous computing systems</strong>.
            </p>
            <ul className="text-[15px] md:text-[16px] leading-[1.8] text-[#A0C0CF] mb-[24px] pl-[24px] list-disc">
              <li className="mb-[12px]">Supports <strong className="text-white font-semibold">neuromorphic boards</strong> with their respective SDKs in containerized environments (Brainchip, SynSense Speck/Xylo, Intel Loihi 2, SpiNNaker 2), as well as embedded GPUs and edge devices.</li>
              <li className="mb-[12px]">Provides a full <strong className="text-white font-semibold">end-to-end workflow</strong>: model definition, training, simulation, deployment on HW, and results analysis.</li>
              <li className="mb-[12px]">Offers both <strong className="text-white font-semibold">expert tools</strong> (VSCode, Jupyter, MLOps pipelines) and novice interfaces (drag-and-drop pipelines).</li>
            </ul>
            <p className="text-[15px] md:text-[16px] leading-[1.8] text-[#A0C0CF] mb-[20px]">
              This accelerates innovation by enabling direct comparison of algorithms on multiple platforms.
            </p>
          </motion.div>

          {/* Foto 3: Layer 1 & 2 */}
          <motion.img 
            src={in_foto3} 
            alt="Model Development and Execution Layers" 
            loading="lazy"
            decoding="async"
            className="w-full max-w-[800px] h-auto rounded-[12px] mb-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] will-change-transform"
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUpVariant}
          />

          {/* Foto 4: Flowchart */}
          <motion.img 
            src={in_foto4} 
            alt="Workflow Process" 
            loading="lazy"
            decoding="async"
            className="w-full max-w-[800px] h-auto rounded-[12px] mb-[40px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] will-change-transform"
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUpVariant}
          />

        </div>
      </div>
    </div>
  );
}

export default Services;