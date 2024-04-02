import { useState, useEffect } from 'react';

const useScrollVisibility = (selector) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(selector);
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
      setIsVisible(isVisible);
    };

    // Check initial visibility when component mounts
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selector]);

  return isVisible;
};

export default useScrollVisibility;
