"use client";
import { useState, useEffect } from 'react';

export const useDeviceType = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  const updateIsMobile = (): void => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', updateIsMobile);
    return () => {
      window.removeEventListener('resize', updateIsMobile);
    };
  }, []);

  return isMobile;
};

