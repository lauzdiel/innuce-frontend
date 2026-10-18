import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  // with the useLocation hook, we can get the current pathname
  const { pathname } = useLocation();

  useEffect(() => {
    // every time the pathname changes, we scroll to the top of the page
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything to the DOM
}

export default ScrollToTop;