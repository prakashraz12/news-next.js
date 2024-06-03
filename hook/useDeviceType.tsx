"use client";
import { useState, useEffect } from 'react';


export const useDeviceType = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Check if window is defined to ensure it's executed on the client-side
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 768);
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};
