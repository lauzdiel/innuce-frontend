import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';

import gridBg from '../../assets/grid_bg.svg';
import bookIcon from '../../assets/book.svg';
import sourceOkIcon from '../../assets/source_ok.svg';

import { getResources } from '../../services/api';

import LoadingSpinner from '../../components/LoadingSpinner';

function Resources() {
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedPaperId, setExpandedPaperId] = useState(null);
  const cardsSectionRef = useRef(null);

  const { data: papersData = [], isLoading, isError } = useQuery({
    queryKey: ['resources'],
    queryFn: getResources
  });

  if (isLoading) {
    return <LoadingSpinner message="Loading research publications..." />;
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-[#021B2B] text-white px-4 text-center font-['Inter',sans-serif]">
        <p className="text-red-400 text-[16px] mb-2 font-medium">Failed to load resources.</p>
        <p className="text-[#7FA8B8] text-[14px]">Please refresh the page to try again.</p>
      </div>
    );
  }

  const itemsPerPage = 10;
  const totalPages = Math.ceil(papersData.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPapers = papersData.slice(indexOfFirstItem, indexOfLastItem);

  const goToPage = (pageNumber) => {
    setExpandedPaperId(null);
    setCurrentPage(pageNumber);
    if (cardsSectionRef.current) {
      const yOffset = -140; 
      const y = cardsSectionRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  const toggleNutshell = (id) => {
    setExpandedPaperId(expandedPaperId === id ? null : id);
  };

  const handleScrollDown = () => {
    if (cardsSectionRef.current) {
      const yOffset = -140; 
      const y = cardsSectionRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Ok butonları
  const renderPaginationControls = () => (
    <div className="flex flex-wrap justify-center items-center gap-[6px] sm:gap-[12px] px-2 max-w-full">
      <button
        aria-label="Previous page"
        className="bg-[#1a1a1a] border border-solid border-[rgba(255,255,255,0.1)] text-white w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] rounded-full cursor-pointer text-[13px] sm:text-[14px] font-medium flex items-center justify-center hover:bg-[#333] disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >&lt;</button>

      <div className="flex flex-wrap justify-center items-center gap-[6px] sm:gap-[12px]">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
          <button
            key={number}
            className={`w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] rounded-full cursor-pointer text-[13px] sm:text-[14px] font-medium flex items-center justify-center border-none shrink-0 ${currentPage === number ? 'bg-[#FF6B00] text-white font-semibold' : 'bg-[#e0e0e0] text-[#333] hover:bg-[#ccc] hover:text-[#111]'}`}
            onClick={() => goToPage(number)}
          >
            {number}
          </button>
        ))}
      </div>

      <button
        aria-label="Next page"
        className="bg-[#1a1a1a] border border-solid border-[rgba(255,255,255,0.1)] text-white w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] rounded-full cursor-pointer text-[13px] sm:text-[14px] font-medium flex items-center justify-center hover:bg-[#333] disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >&gt;</button>
    </div>
  );

  return (
    <section className="relative w-full min-h-screen pt-[240px] pb-[100px] bg-[#021B2B] text-white overflow-x-hidden font-['Inter',sans-serif]">

      {/* Background Grid */}
      <div className="absolute top-0 left-0 w-full h-[652px] z-0 pointer-events-none">
        <img src={gridBg} alt="Grid" className="w-full h-full object-cover opacity-60 [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]" />
      </div>

      {/* Decorative Cubes */}
      <div className="absolute w-[120px] h-[120px] border border-solid border-[rgba(127,168,184,0.1)] rounded-[12px] pointer-events-none top-[20%] left-[-40px] rotate-[15deg]"></div>
      <div className="absolute w-[120px] h-[120px] border border-solid border-[rgba(127,168,184,0.1)] rounded-[12px] pointer-events-none top-[60%] right-[-30px] -rotate-[25deg]"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-[5%] box-border flex flex-col items-center">

        {/* Hero Header */}
        <motion.div
          className="w-full max-w-[1244px] mx-auto mb-[116px] will-change-transform text-center lg:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
        >
          <h1 className="text-[42px] lg:text-[56px] font-semibold tracking-[-1.5px] m-[0_0_20px_0] bg-[linear-gradient(90deg,#FF6B00_0%,#FF0000_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Explore our Papers
          </h1>
          <p className="text-[16px] leading-[1.6] text-[#7FA8B8] mb-[30px] max-w-[800px] mx-auto lg:mx-0">
            Dive into our scientific contributions and follow our journey through the evolving landscape of Neuromorphic Computing. Each publication highlights a step forward in our mission to build more efficient, adaptive, and brain-inspired technologies.
          </p>
          <button
            className="bg-[linear-gradient(90deg,#FF6B00_0%,#FF0000_100%)] text-white border-none rounded-[8px] py-[12px] px-[28px] text-[15px] font-semibold cursor-pointer inline-flex items-center gap-[10px] hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(255,107,0,0.4)]"
            style={{ transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
            onClick={handleScrollDown}
          >
            Discover More
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}>
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </button>
        </motion.div>

        {/* Cards & Pagination */}
        <div ref={cardsSectionRef} className="w-full flex flex-col items-center">

          <motion.div className="mb-[40px]" initial="hidden" whileInView="visible" variants={fadeUpVariant} viewport={{ once: true }}>
            {renderPaginationControls()}
          </motion.div>

          <motion.div layout className="grid grid-cols-1 xl:grid-cols-2 gap-[24px] w-full max-w-[1244px] mx-auto justify-center items-start">
            <AnimatePresence mode="popLayout">
              {currentPapers.map((paper) => {
                const isExpanded = expandedPaperId === paper.id;

                return (
                  <motion.div
                    layout
                    key={paper.id}
                    className={`relative min-h-[230px] rounded-[14px] p-[24px] backdrop-blur-[8px] box-border border border-solid will-change-transform ${isExpanded ? 'border-[rgba(255,107,0,0.3)] bg-[rgba(4,35,53,0.7)] shadow-[0_12px_40px_rgba(255,107,0,0.12)]' : 'border-[rgba(127,168,184,0.12)] bg-[rgba(4,35,53,0.4)]'}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  >
                    {/* Left accent line */}
                    <div className="absolute top-[24px] left-0 w-[4px] h-[24px] bg-[#FF6B00] rounded-tr-[4px] rounded-br-[4px]"></div>

                    <div className="w-full">
                      {isExpanded ? (
                        <motion.div
                          className="flex flex-col"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="flex items-center gap-[8px] text-[#FF6B00] text-[12px] font-semibold tracking-[1px] mb-[14px]">
                            <img src={bookIcon} alt="Book Icon" className="w-[14px] h-[14px]" />
                            <span>IN A NUTSHELL</span>
                          </div>

                          <h3 className="text-[22px] font-semibold leading-[1.4] text-white m-[0_0_10px_0]">{paper.title}</h3>

                          <div className="text-[13px] text-[#7FA8B8] mb-[20px]">
                            {paper.year && <span className="inline-block mb-[4px] font-medium">{paper.year}</span>}
                            {paper.tags && <span> • {paper.tags}</span>}
                          </div>

                          <div className="text-[14px] leading-[1.6] text-[#A0C0CF] mb-[24px]">
                            <p>{paper.description || 'No summary available.'}</p>
                          </div>

                          <div className="flex justify-between items-center gap-[16px]">
                            <button
                              className="bg-[linear-gradient(90deg,#FF6B00_0%,#FF0000_100%)] text-white border-none rounded-[8px] py-[12px] px-[24px] text-[14px] font-semibold cursor-pointer inline-flex items-center gap-[10px] flex-1 justify-center"
                              onClick={() => paper.notebookLmLink && window.open(paper.notebookLmLink, '_blank', 'noopener,noreferrer')}
                            >
                              Open in NotebookLM
                              <img src={sourceOkIcon} alt="Source OK" className="w-[16px] h-[16px]" />
                            </button>
                            <button
                              type="button"
                              aria-label="Collapse summary"
                              className="bg-transparent border border-solid border-[rgba(127,168,184,0.3)] text-[#7FA8B8] hover:text-[#FF6B00] hover:border-[#FF6B00] hover:bg-[rgba(255,107,0,0.05)] py-[12px] px-[18px] rounded-[8px] cursor-pointer flex items-center justify-center transition-all duration-200"
                              onClick={() => setExpandedPaperId(null)}
                            >
                              <svg 
                                width="16" 
                                height="16" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2.5" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                              >
                                <polyline points="18 15 12 9 6 15"></polyline>
                              </svg>
                            </button>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          className="flex flex-col justify-between min-h-[180px]"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div>
                            <h3 className="text-[18px] font-medium leading-[1.4] text-white m-[0_0_12px_0]">{paper.title}</h3>
                            <div className="mb-[20px]">
                              {paper.year && <span className="text-[13px] text-[#7FA8B8] font-medium inline-block mb-[4px]">{paper.year}</span>}
                              {paper.tags && <p className="text-[13px] text-[#7FA8B8] leading-[1.5] m-0">{paper.tags}</p>}
                            </div>
                          </div>

                          <div className="flex gap-[12px] justify-end mt-auto">
                            {Boolean(paper.readOnlineLink) && (
                              <button
                                className="bg-transparent border border-solid border-[rgba(127,168,184,0.3)] text-[#7FA8B8] py-[8px] px-[16px] rounded-[6px] text-[13px] cursor-pointer hover:border-white hover:text-white"
                                style={{ transition: 'border-color 0.2s, color 0.2s' }}
                                onClick={() => window.open(paper.readOnlineLink, '_blank', 'noopener,noreferrer')}
                              >
                                Read Online
                              </button>
                            )}
                            <button
                              className="bg-[#FF6B00] border-none text-white py-[8px] px-[18px] rounded-[6px] text-[13px] font-semibold cursor-pointer hover:opacity-90"
                              style={{ transition: 'opacity 0.2s' }}
                              onClick={() => toggleNutshell(paper.id)}
                            >
                              In a Nutshell
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          <motion.div className="mt-[40px]" initial="hidden" whileInView="visible" variants={fadeUpVariant} viewport={{ once: true }}>
            {renderPaginationControls()}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Resources;