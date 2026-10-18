import React from 'react';
import { motion } from 'framer-motion';
import gridBg from '../../assets/grid_bg.svg';

function ComingSoon() {
  // Takes its own tilt angle (baseRotate) for each cube and 
  // creates both an up/down floating and a slight rotation animation.
  const getFloatAnim = (baseRotate, delay, duration) => ({
    initial: { opacity: 0, rotate: baseRotate },
    animate: {
      opacity: [0.3, 0.7, 0.3], 
      y: [0, -25, 0], // Floating up and down
      // Let the cube rotate very slightly on its own axis (e.g., go from -15 degrees to -10 and back)
      rotate: [baseRotate, baseRotate + 5, baseRotate], 
      transition: {
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  });

  return (
    <section className="relative w-full h-screen bg-[#021B2B] flex justify-center items-center overflow-hidden font-['Inter',sans-serif]">
      
      {/* Background Grid */}
      <div className="absolute top-0 left-0 w-full h-[1000px] z-0 pointer-events-none [-webkit-mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]">
        <img src={gridBg} alt="Grid" className="w-full h-full object-cover opacity-25" />
      </div>

      {/* PURE CSS CUBES - We gave the tilt (rotate) angles to Framer Motion so it doesn't override the CSS! */}
      {/* Bottom Left Blue Cubes */}
      <motion.div className="absolute z-[1] max-md:opacity-40 will-change-transform bottom-[25%] left-[5%] w-[170px] h-[170px] border-2 border-solid border-[rgba(127,168,184,0.35)] rounded-[20px]" {...getFloatAnim(-15, 0, 8)} />
      <motion.div className="absolute z-[1] max-md:opacity-40 will-change-transform bottom-[16%] left-[14%] w-[80px] h-[80px] border-2 border-solid border-[rgba(127,168,184,0.35)] rounded-[12px]" {...getFloatAnim(25, 2, 9)} />
      
      {/* Top Right Orange Cubes */}
      <motion.div className="absolute z-[1] max-md:opacity-40 will-change-transform top-[18%] right-[12%] w-[150px] h-[150px] border-2 border-solid border-[rgba(255,107,0,0.5)] rounded-[20px]" {...getFloatAnim(-10, 4, 7)} />
      <motion.div className="absolute z-[1] max-md:opacity-40 will-change-transform top-[34%] right-[10%] w-[70px] h-[70px] border-2 border-solid border-[rgba(255,107,0,0.5)] rounded-[12px]" {...getFloatAnim(45, 6, 10)} />

      {/* CONTENT SECTION */}
      <div className="relative z-10 text-center">
        <motion.h1 
          className="text-[50px] md:text-[110px] text-white font-[700] tracking-[-2px] m-0 leading-[1.1] font-['Inter',sans-serif]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Coming <span className="bg-[linear-gradient(90deg,#FF6B00_0%,#FF0000_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">Soon</span>
        </motion.h1>
      </div>

    </section>
  );
}

export default ComingSoon;