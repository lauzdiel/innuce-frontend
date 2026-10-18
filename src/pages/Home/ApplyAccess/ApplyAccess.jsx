import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 

function ApplyAccess() {
  return (
    <section className="w-full py-[100px] px-[10%] bg-[#082638] flex justify-center items-center box-border">
      <motion.div 
        className="max-w-[800px] text-center flex flex-col items-center gap-[24px]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-[32px] md:text-[42px] text-white font-bold m-0">Apply for Access</h2>
        <p className="text-[16px] leading-[1.6] text-[#A0C0CF] m-0">
          The InNuCe Lab platform is preparing for its official launch. We are now accepting applications for early access to our systems. If you are a researcher, student, or industry professional interested in leveraging our resources, <strong className="text-white font-semibold">please apply using the link below.</strong>
        </p>
        
        <Link to="/apply" className="bg-[linear-gradient(90deg,#FF6B00_0%,#FF0000_100%)] text-white border-none py-[14px] px-[32px] rounded-[8px] font-['Inter',sans-serif] font-semibold text-[16px] cursor-pointer mt-[10px] transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_10px_20px_rgba(255,107,0,0.3)] no-underline inline-block">
          Access Application Form
        </Link>
      </motion.div>
    </section>
  );
}

export default ApplyAccess;