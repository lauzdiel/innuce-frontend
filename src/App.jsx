import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- COMPONENTS ---
import PublicLayout from './components/PublicLayout';
import ScrollToTop from './components/ScrollToTop'; 

// --- PUBLIC PAGES ---
import Home from './pages/Home/Home';
import Resources from './pages/Resources/Resources';
import RequestAccess from './pages/RequestAccess/RequestAccess';
import ComingSoon from './pages/ComingSoon/ComingSoon';
import Infrastructure from './pages/Infrastructure/Infrastructure';
import UseCases from './pages/UseCases/UseCases';
import AboutUs from './pages/AboutUs/AboutUs';
import Services from './pages/Services/Services';
import UseCaseDetail from './pages/UseCases/UseCaseDetail'; 
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <div className="flex flex-col min-h-screen w-full bg-[#021B2B] text-white font-['Inter',sans-serif] overflow-x-hidden">
        <Routes>
          {/* Public Routes with Header & Footer */}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="infrastructure" element={<Infrastructure />} />
            <Route path="use-cases" element={<UseCases />} />
            <Route path="use-cases/:id" element={<UseCaseDetail />} />
            <Route path="resources" element={<Resources />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="services" element={<Services />} />
            <Route path="apply" element={<RequestAccess />} />
            <Route path="coming-soon" element={<ComingSoon />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
