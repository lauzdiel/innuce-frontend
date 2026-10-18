import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import gridBg from '../../assets/grid_bg.svg';

// --- HERO IMAGES ---
import us_1 from '../../assets/uc_fpga.webp';
import us_2 from '../../assets/uc_tracking.webp';
import us_3 from '../../assets/uc_navigation.webp';
import us_4 from '../../assets/uc_semantic.webp';
import us_5 from '../../assets/uc_braille.webp';
import us_6 from '../../assets/uc_genn.webp';
import us_7 from '../../assets/uc_gesture.webp';

// --- DETAIL SECTION IMAGES ---
import us1_p1 from '../../assets/us1_p1.webp';
import us1_p2 from '../../assets/us1_p2.webp';
import us2_p1 from '../../assets/us2_p1.webp';
import us2_p2 from '../../assets/us2_p2.webp';
import us4_p1 from '../../assets/us4_p1.webp';
import us4_p2 from '../../assets/us4_p2.webp';

const imageMap = {
  'uc_fpga.webp': us_1, 'uc_fpga.svg': us_1, 'us_1': us_1,
  'uc_tracking.webp': us_2, 'uc_tracking.svg': us_2, 'us_2': us_2,
  'uc_navigation.webp': us_3, 'uc_navigation.svg': us_3, 'us_3': us_3,
  'uc_semantic.webp': us_4, 'uc_semantic.svg': us_4, 'us_4': us_4,
  'uc_braille.webp': us_5, 'uc_braille.svg': us_5, 'us_5': us_5,
  'uc_genn.webp': us_6, 'uc_genn.svg': us_6, 'us_6': us_6,
  'uc_gesture.webp': us_7, 'uc_gesture.svg': us_7, 'us_7': us_7,
  'us1_p1.webp': us1_p1, 'us1_p1.svg': us1_p1, 'us1_p1': us1_p1,
  'us1_p2.webp': us1_p2, 'us1_p2.svg': us1_p2, 'us1_p2': us1_p2,
  'us2_p1.webp': us2_p1, 'us2_p1.svg': us2_p1, 'us2_p1': us2_p1,
  'us2_p2.webp': us2_p2, 'us2_p2.svg': us2_p2, 'us2_p2': us2_p2,
  'us4_p1.webp': us4_p1, 'us4_p1.svg': us4_p1, 'us4_p1': us4_p1,
  'us4_p2.webp': us4_p2, 'us4_p2.svg': us4_p2, 'us4_p2': us4_p2,
};

import { getUseCaseById } from '../../services/api';

import LoadingSpinner from '../../components/LoadingSpinner';

function UseCaseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['useCase', id],
    queryFn: () => getUseCaseById(id)
  });

  if (isLoading) {
    return <LoadingSpinner message="Loading use case details..." />;
  }

  if (isError || !data) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-white bg-[#021B2B] px-6 text-center font-['Inter',sans-serif] pt-[140px] pb-[80px]">
        <div className="w-16 h-16 rounded-full bg-[rgba(255,107,0,0.1)] border border-[#FF6B00] flex items-center justify-center mb-6 text-[#FF6B00]">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold mb-3 text-white">Use Case Not Found</h2>
        <p className="text-[#7FA8B8] max-w-md mb-8 text-[15px]">The requested use case could not be found or may have been moved.</p>
        <button 
          onClick={() => navigate('/use-cases')} 
          className="bg-[linear-gradient(90deg,#FF6B00_0%,#FF0000_100%)] text-white px-6 py-3 rounded-[8px] font-semibold text-[15px] hover:-translate-y-[2px] hover:shadow-[0_5px_15px_rgba(255,107,0,0.4)] transition-all cursor-pointer border-none"
        >
          Back to Use Cases
        </button>
      </div>
    );
  }

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Combine keywords and frameworks for the detail page tags, just like the hardcoded ones
  const tags = [...(data.keywords || []), ...(data.frameworks || [])];

  return (
    <div className="relative w-full min-h-screen pt-[140px] pb-[100px] bg-[#021B2B] text-white font-['Inter',sans-serif] overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-[900px] z-0 pointer-events-none">
        <img src={gridBg} alt="Grid" className="w-full h-full object-cover opacity-20 [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]" />
      </div>

      <div className="absolute w-[120px] h-[120px] border border-solid border-[rgba(127,168,184,0.15)] rounded-[12px] pointer-events-none z-[5] top-[250px] left-[5%] -rotate-[15deg]"></div>

      <div className="relative z-10 w-full max-w-[900px] mx-auto px-[5%]">
        <button className="bg-transparent border-none text-[#7FA8B8] text-[14px] cursor-pointer mb-[40px] flex items-center transition-colors duration-200 hover:text-[#FF6B00]" onClick={() => navigate('/use-cases')}>
          &larr; Back to Use Cases
        </button>

        <motion.div className="mb-[60px]" initial="hidden" animate="visible" variants={fadeUpVariant}>
          <h1 className="text-[48px] font-semibold tracking-[-1px] leading-[1.2] m-[0_0_20px_0] bg-[linear-gradient(90deg,#FF6B00_0%,#FF0000_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{data.title}</h1>
          
          <div className="flex flex-wrap gap-[8px] mb-[24px]">
            {tags.map(tag => (
              <span className="h-[24px] flex items-center px-[12px] rounded-[12px] border border-solid border-[rgba(255,107,0,0.4)] text-[#FF6B00] text-[11px] font-medium" key={tag}>{tag}</span>
            ))}
          </div>
          
          <div className="text-[16px] leading-[1.6] text-[#A0C0CF]">
            {(data.content || '').split('\n').map((paragraph, idx) => (
              paragraph.trim() && <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        {data.detailHeroImage && (
          <motion.img 
            src={imageMap[data.detailHeroImage] || data.detailHeroImage} 
            alt={data.title} 
            loading="lazy"
            decoding="async"
            className="w-full rounded-[12px] mb-[60px]"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
          />
        )}

        <div>
          {(data.detailSections || []).map((section, index) => (
            <motion.div 
              key={index} 
              className="mb-[60px] will-change-transform"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUpVariant}
            >
              {section.heading && <h2 className="text-[24px] font-semibold text-[#7FA8B8] mb-[20px]">{section.heading}</h2>}
              {section.text && (
                <div className="text-[15px] leading-[1.8] text-[#A0C0CF] mb-[30px]">
                  {section.text.split('\n').map((paragraph, idx) => (
                    paragraph.trim() && <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              )}
              {section.image && (
                <img 
                  src={imageMap[section.image] || section.image} 
                  alt={section.heading || 'Section Image'} 
                  loading="lazy"
                  decoding="async"
                  className="w-full max-w-[600px] block mx-auto rounded-[8px]" 
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UseCaseDetail;
