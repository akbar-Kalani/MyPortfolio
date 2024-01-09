"use client"

import Header from '@/components/header/header';
import React, { useState, useEffect } from 'react';
import Aside from '../aside/aside';


const UiApp = () => {


 
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is defined (i.e., we are in a browser environment)
    if (typeof window !== 'undefined') {
      // Set initial value based on window width
      setIsMobile(window.innerWidth <= 768);

      // Add event listener to update isMobile on window resize
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      window.addEventListener('resize', handleResize);

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []); // Empty dependency array to run the effect only once on mount


  return (
    <div className="">
      {isMobile ? (
        <>
          <Header />
          <Aside  />
        </>
      ) : (
        <>
          <Aside />
        </>
      )}
    </div>
  );
};
export default UiApp;
