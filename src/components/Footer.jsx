import React from 'react';
import { Link } from 'react-router-dom';

import mainLogo from '../assets/big_logo.svg'; 
import githubIcon from '../assets/github_icon.svg';
import hfIcon from '../assets/hf_icon.svg'; 

import consigliaLogo from '../assets/consiglia_logo.svg';
import ministerLogo from '../assets/minister_logo.svg';
import europeLogo from '../assets/europe_logo.svg';
import politoLogo from '../assets/polito_logo.svg';
import italiaLogo from '../assets/italia_logo.svg';
import ebrainsLogo from '../assets/ebrains_logo.svg';

function Footer() {
  return (
    <footer className="w-full bg-transparent py-[60px] px-[10%] box-border font-['Inter',sans-serif] border-x-0 border-b-0 border-t border-solid border-[rgba(127,168,184,0.15)]">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-[50px] gap-[50px] md:gap-0">
        
        <div className="flex flex-col max-w-[450px] items-center md:items-start w-full md:w-auto">
          <img src={mainLogo} alt="InNuCe Lab Logo" className="w-full max-w-[300px] md:max-w-[400px] h-auto object-contain mb-0 block mx-auto md:mx-0 bg-transparent" />
        </div>

        <div className="flex flex-col items-center md:items-start w-full md:w-auto">
          <h4 className="font-['Inter',sans-serif] text-[18px] font-medium text-white m-[0_0_24px_0] text-center md:text-left">Navigation</h4>
          <div className="flex flex-col gap-[16px] w-full text-center md:text-left">
            <Link to="/" className="font-['Inter',sans-serif] no-underline text-[#7FA8B8] text-[15px] font-normal transition-colors duration-200 hover:text-[#FF6B00] block">Home</Link>
            <Link to="/infrastructure" className="font-['Inter',sans-serif] no-underline text-[#7FA8B8] text-[15px] font-normal transition-colors duration-200 hover:text-[#FF6B00] block">Infrastructure</Link>
            <Link to="/use-cases" className="font-['Inter',sans-serif] no-underline text-[#7FA8B8] text-[15px] font-normal transition-colors duration-200 hover:text-[#FF6B00] block">Use Cases</Link>
            <Link to="/resources" className="font-['Inter',sans-serif] no-underline text-[#7FA8B8] text-[15px] font-normal transition-colors duration-200 hover:text-[#FF6B00] block">Research</Link>
            <Link to="/about-us" className="font-['Inter',sans-serif] no-underline text-[#7FA8B8] text-[15px] font-normal transition-colors duration-200 hover:text-[#FF6B00] block">About Us</Link>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start w-full md:w-auto">
          <h4 className="font-['Inter',sans-serif] text-[18px] font-medium text-white m-[0_0_24px_0] text-center md:text-left">Get In Touch</h4>
          <p className="font-['Inter',sans-serif] text-[15px] text-[#7FA8B8] m-[0_0_8px_0] leading-[1.6] text-center md:text-left">Politecnico di Torino</p>
          <p className="font-['Inter',sans-serif] text-[15px] text-[#7FA8B8] m-[0_0_8px_0] leading-[1.6] text-center md:text-left">Corso Duca degli Abruzzi, 24<br />10129 Torino TO, Italy</p>
          <p className="font-['Inter',sans-serif] text-[15px] text-[#7FA8B8] m-[16px_0_24px_0] text-center md:text-left">innuce@polito.it</p>
          
          <div className="flex gap-[16px] items-center justify-center md:justify-start w-full">
            <a href="https://github.com/neuromorphic-polito" target="_blank" rel="noopener noreferrer" className="flex items-center transition-all duration-200 hover:-translate-y-[2px] hover:brightness-125" aria-label="GitHub">
              <img src={githubIcon} alt="GitHub" className="w-[24px] h-[24px] object-contain bg-transparent" />
            </a>
            <a href="https://huggingface.co/neuromorphic-polito" target="_blank" rel="noopener noreferrer" className="flex items-center transition-all duration-200 hover:-translate-y-[2px] hover:brightness-125" aria-label="Hugging Face">
              <img src={hfIcon} alt="Hugging Face" className="w-[24px] h-[24px] object-contain bg-transparent" />
            </a>
          </div>
        </div>

      </div>

      <div className="flex justify-center items-center gap-[30px] md:gap-[40px] flex-col md:flex-row flex-wrap pt-[20px]">
        <img src={consigliaLogo} alt="Consiglio Nazionale delle Ricerche" className="h-[40px] w-auto max-w-[200px] object-contain opacity-90 transition-all duration-200 hover:opacity-100 hover:scale-105 bg-transparent" />
        <img src={ministerLogo} alt="Ministero" className="h-[40px] w-auto max-w-[200px] object-contain opacity-90 transition-all duration-200 hover:opacity-100 hover:scale-105 bg-transparent" />
        <img src={europeLogo} alt="Funded by the European Union" className="h-[40px] w-auto max-w-[200px] object-contain opacity-90 transition-all duration-200 hover:opacity-100 hover:scale-105 bg-transparent" />
        <img src={politoLogo} alt="Politecnico di Torino" className="h-[40px] w-auto max-w-[200px] object-contain opacity-90 transition-all duration-200 hover:opacity-100 hover:scale-105 bg-transparent" />
        <img src={italiaLogo} alt="Italia Domani" className="h-[40px] w-auto max-w-[200px] object-contain opacity-90 transition-all duration-200 hover:opacity-100 hover:scale-105 bg-transparent" />
        <img src={ebrainsLogo} alt="EBRAINS Italy" className="h-[40px] w-auto max-w-[200px] object-contain opacity-90 transition-all duration-200 hover:opacity-100 hover:scale-105 bg-transparent" />
      </div>
    </footer>
  );
}

export default Footer;