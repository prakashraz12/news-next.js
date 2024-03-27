"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ChevronUp } from "lucide-react";

export const ScrollButton = () => {
    const [showButton, setShowButton] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const scrollHeight = document.body.scrollHeight;
        const scrollPosition = window.scrollY;
  
        if (scrollPosition > scrollHeight / 4) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    return (
      <>
        {showButton && (
          <div
            className="fixed bottom-4 right-4 bg-sky-700 text-white rounded-full p-3 shadow-lg cursor-pointer"
            onClick={scrollToTop}
            style={{ zIndex: 999 }}
          >
            <ChevronUp />
          </div>
        )}
      </>
    );
  };