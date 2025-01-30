import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);

    // Calculer directement la première position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      className="fixed top-0 right-0 h-full w-16 pointer-events-none -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 496.26 871.27"
        className=" h-full"
        preserveAspectRatio="xMidYMid meet"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          transform: 'translate(0, 0)',
          opacity: 0.1
        }}
      >
        {/* Background path */}
        <motion.path
          d="M173.33,27.79c118.48-60.93,256.43-5.35,296,98,37.14,97.01-23.39,207.37-107,249-75,37.35-189.37,29.75-217-29-22.11-47.01,11.97-125.36,64-147,93.06-38.7,274.1,91.36,284,233,5.38,76.91-41.04,138.14-94,208-19.77,26.07-79.26,99.87-184,158-84.59,46.95-163.42,64.11-215,71"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="4"
        />
        
        {/* Progress path */}
        <motion.path
          d="M173.33,27.79c118.48-60.93,256.43-5.35,296,98,37.14,97.01-23.39,207.37-107,249-75,37.35-189.37,29.75-217-29-22.11-47.01,11.97-125.36,64-147,93.06-38.7,274.1,91.36,284,233,5.38,76.91-41.04,138.14-94,208-19.77,26.07-79.26,99.87-184,158-84.59,46.95-163.42,64.11-215,71"
          fill="none"
          stroke={`rgb(${scrollProgress * 2.55}, 0, 0)`}  // Color change based on scroll
          strokeWidth="20"
          strokeDasharray="4000"
          strokeDashoffset={4000 - (scrollProgress / 100) * 4000}
          strokeLinecap="round"
          transition={{ strokeDashoffset: { duration: 0.55, ease: "easeOut" } }} 
        />
      </motion.svg>
    </motion.div>
  );
}
