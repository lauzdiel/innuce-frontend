import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useCountUp } from 'react-countup';

function AnimatedCounter({ end }) {
  const countUpRef = useRef(null);

  useCountUp({
    ref: countUpRef,
    end: end,
    duration: 2.5,
    enableScrollSpy: true,
    scrollSpyOnce: true,
  });

  return <span ref={countUpRef}>0</span>;
}

function OurNumbers() {
  const statsData = [
    {
      id: 1,
      type: "number",
      value: 50,
      label: "Tools Supported",
      gradientClass: "bg-[linear-gradient(90deg,#FF6B00_0%,#FF0000_100%)]",
      borderClass: "shadow-[0px_10px_40px_-15px_rgba(255,107,0,0.15)] [--accent-color:#FF6B00]"
    },
    {
      id: 2,
      type: "text", 
      value: "You",
      label: "The Neuromorphic Hero\nWe're Waiting For",
      gradientClass: "bg-[linear-gradient(90deg,#7FA8B8_0%,#DDF5FF_50%,#325766_100%)]",
      borderClass: "shadow-[0px_10px_40px_-15px_rgba(127,168,184,0.2)] [--accent-color:#7FA8B8]"
    },
    {
      id: 3,
      type: "number",
      value: 15,
      label: "Hardware Available",
      gradientClass: "bg-[linear-gradient(90deg,#FF6B00_0%,#FF0000_100%)]",
      borderClass: "shadow-[0px_10px_40px_-15px_rgba(255,107,0,0.15)] [--accent-color:#FF6B00]"
    }
  ];

  return (
    <section className="py-[60px] px-[5%] md:py-[100px] md:px-[10%] flex justify-center items-center bg-transparent box-border">
      <div className="flex justify-center gap-[50px] flex-col md:flex-row items-center flex-wrap max-w-[1200px] w-full">
        
        {statsData.map((stat, index) => (
          <motion.div 
            className="w-full max-w-[350px] md:w-[280px] will-change-transform"
            key={stat.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
          >
            <div className={`relative bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(2,48,71,0.4)_100%)] border border-solid border-[rgba(127,168,184,0.15)] rounded-[16px] p-[40px_30px] w-full h-full min-h-[200px] md:min-h-[240px] flex flex-col justify-center items-center text-center backdrop-blur-[10px] z-[1] before:content-[''] before:absolute before:w-10 before:h-10 before:pointer-events-none before:z-[2] before:top-[-1px] before:left-[-1px] before:border-r-0 before:border-b-0 before:border-t-2 before:border-l-2 before:border-solid before:border-[var(--accent-color)] before:rounded-tl-[16px] after:content-[''] after:absolute after:w-10 after:h-10 after:pointer-events-none after:z-[2] after:bottom-[-1px] after:right-[-1px] after:border-l-0 after:border-t-0 after:border-b-2 after:border-r-2 after:border-solid after:border-[var(--accent-color)] after:rounded-br-[16px] transition-transform duration-300 ease-out hover:-translate-y-[5px] ${stat.borderClass}`}>
              <h3 className={`font-['Inter',sans-serif] font-bold text-[90px] md:text-[110px] leading-none m-[0_0_15px_0] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] ${stat.gradientClass}`}>
                {stat.type === "number" ? (
                  <AnimatedCounter end={stat.value} />
                ) : (
                  stat.value
                )}
              </h3>
              
              <p className="text-white font-['Inter',sans-serif] text-[16px] font-normal leading-[1.4] m-0">
                {stat.label.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default OurNumbers;