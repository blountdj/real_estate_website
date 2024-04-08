import { useState, useEffect } from 'react';

// OLD
// const useScrollVisibility = (selector) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const element = document.querySelector(selector);
//       if (!element) return;

//       const rect = element.getBoundingClientRect();
//       const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
//       setIsVisible(isVisible);
//     };

//     // Check initial visibility when component mounts
//     handleScroll();

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [selector]);

//   return isVisible;
// };

// NEW
const useScrollVisibility = (selector) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = document.querySelector(selector);
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    });

    observer.observe(element);

    return () => observer.unobserve(element);
  }, [selector]);

  return isVisible;
};

export default useScrollVisibility;

