import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg'; 

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevPath, setPrevPath] = useState(location.pathname);

  // Automatically close mobile menu when route changes
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setIsMenuOpen(false);
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isHome = location.pathname === '/';
  const isInfra = location.pathname === '/infrastructure';
  const isUseCases = location.pathname.startsWith('/use-cases');
  const isResources = location.pathname === '/resources';
  const isAboutUs = location.pathname === '/about-us';

  const linkBaseClass = "text-[#7FA8B8] no-underline text-[20px] md:text-[15px] font-['Inter',sans-serif] font-medium transition-colors duration-200 hover:text-[#FF6B00] hover:font-semibold";
  const activeClass = "text-[#FF6B00] font-semibold";

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-[25px] py-[15px] md:px-[50px] md:py-[20px] bg-[rgba(2,27,43,0.95)] backdrop-blur-[10px] z-[1000] shadow-[0px_4px_23.2px_rgba(127,168,184,0.62)] box-border">
      
      <div className="flex items-center">
        <Link to="/" onClick={closeMenu} className="flex items-center">
          <img src={logo} alt="InNuCe LAB" className="h-[40px] w-auto max-w-[200px] object-contain block bg-transparent" />
        </Link>
      </div>

      <button 
        type="button"
        className="flex flex-col gap-[5px] cursor-pointer z-[1001] md:hidden bg-transparent border-none p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] rounded" 
        onClick={toggleMenu} 
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <span className={`w-[25px] h-[3px] bg-[#FF6B00] rounded-[3px] transition-all duration-300 block ${isMenuOpen ? 'translate-y-[8px] rotate-45' : ''}`}></span>
        <span className={`w-[25px] h-[3px] bg-[#FF6B00] rounded-[3px] transition-all duration-300 block ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-[25px] h-[3px] bg-[#FF6B00] rounded-[3px] transition-all duration-300 block ${isMenuOpen ? '-translate-y-[8px] -rotate-45' : ''}`}></span>
      </button>

      <div className={`${isMenuOpen ? 'flex fixed top-0 left-0 w-full h-screen bg-[rgba(2,27,43,0.98)] backdrop-blur-[15px] flex-col justify-center gap-[30px] z-[1000] p-0' : 'hidden'} md:flex md:static md:w-auto md:h-auto md:bg-transparent md:flex-row md:items-center md:gap-[40px] md:z-auto`}>
        <nav className="flex flex-col items-center gap-[30px] md:flex-row md:gap-[35px]">
          <Link 
            to="/" 
            className={`${linkBaseClass} ${isHome ? activeClass : ''}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          
          <Link 
            to="/infrastructure" 
            className={`${linkBaseClass} ${isInfra ? activeClass : ''}`}
            onClick={closeMenu}
          >
            Infrastructure
          </Link>
          
          <Link 
            to="/use-cases" 
            className={`${linkBaseClass} ${isUseCases ? activeClass : ''}`}
            onClick={closeMenu}
          >
            Use Cases
          </Link>
          
          <Link 
            to="/resources" 
            className={`${linkBaseClass} ${isResources ? activeClass : ''}`}
            onClick={closeMenu}
          >
            Research
          </Link>
          
          <Link 
            to="/about-us" 
            className={`${linkBaseClass} ${isAboutUs ? activeClass : ''}`}
            onClick={closeMenu}
          >
            About Us
          </Link>
        </nav>

        <Link 
          to="/coming-soon" 
          className="bg-[linear-gradient(90deg,#FF6B00_0%,#FF0000_100%)] text-white rounded-[8px] px-[24px] py-[12px] font-['Inter',sans-serif] font-semibold text-[15px] transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_5px_15px_rgba(255,107,0,0.4)] text-center no-underline inline-block" 
          onClick={closeMenu}
        >
          Access App
        </Link>
      </div>

    </header>
  );
}

export default Header;