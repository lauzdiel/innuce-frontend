import React from 'react';
import { motion } from 'framer-motion';

function Facilities() {
  const facilitiesData = [
    {
      id: "01",
      title: "Heterogeneous Prototyping Platform",
      description: "Prototype your applications in the cloud with cutting-edge Neuromorphic HW/SW solutions. From concept to deployment, with a platform designed for all skill levels, from AI enthusiasts to neuromorphic ninjas.",
      accentHex: "#FF6B00" 
    },
    {
      id: "02",
      title: "Neuromorphic Software Modules",
      description: "Connect seamlessly with your favorite tools. Our RESTful APIs and webhooks make integration simple and powerful for any workflow.",
      accentHex: "#E70012" 
    },
    {
      id: "03",
      title: "Neuromorphic App Support Service",
      description: "Need external hardware, sensors, or expert advice? Our team is ready to assist you! Contact us to explore our range of Event Cameras, microcontrollers, MEMS, and FPGAs.",
      accentHex: "#0a5e9aff" 
    },
    {
      id: "04",
      title: "Neuromorphic Use Cases",
      description: "Curious about our technologies or in the need for inspiration? Explore our gallery of use cases, from Human Activity Recognition to GPS localization, and discover what is possible!",
      accentHex: "#7FA8B8" 
    }
  ];

  return (
    <section className="flex flex-col items-center bg-transparent py-[60px] px-[5%] lg:py-[80px] lg:px-[10%] box-border">
      
      <motion.h2 
        className="text-white font-['Inter',sans-serif] text-[36px] font-semibold mb-[60px] text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Lab Facilities
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] w-full max-w-[1286px]">
        {facilitiesData.map((item, index) => (
          <motion.div 
            key={item.id}
            className="w-full will-change-transform"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.15 }}
          >
            <div 
              className="relative w-full h-full min-h-[216px] p-[30px_40px] bg-[rgba(2,48,71,0.4)] rounded-[16px] border-2 border-solid border-[rgba(127,168,184,0.3)] overflow-hidden z-[1] flex flex-col justify-center transition-shadow duration-300 ease-in-out hover:shadow-[0px_10px_30px_-10px_rgba(127,168,184,0.5)]" 
              style={{ '--accent-color': item.accentHex }}
            >
              <span className="absolute top-[10px] right-[20px] font-['Inter',sans-serif] font-normal text-[96px] leading-none text-[#7FA8B8] opacity-10 z-[-1] pointer-events-none">{item.id}</span>
              
              <div className="w-[40px] h-[4px] rounded-[2px] mb-[14px] bg-[var(--accent-color)]"></div>
              <h3 className="text-white font-['Inter',sans-serif] text-[22px] font-semibold mb-[10px] leading-[1.3]">{item.title}</h3>
              <p className="text-[#7FA8B8] font-['Inter',sans-serif] text-[15px] leading-[1.6] font-normal m-0">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default Facilities;