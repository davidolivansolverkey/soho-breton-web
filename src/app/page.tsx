"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import MusicSection from "@/components/MusicSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      {/* Background gradient orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-[#ff0080] opacity-[0.07] blur-[120px]" />
        <div className="absolute top-[50%] right-[5%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full bg-[#00bfff] opacity-[0.07] blur-[100px]" />
        <div className="absolute bottom-[10%] left-[30%] w-[25vw] h-[25vw] max-w-[300px] max-h-[300px] rounded-full bg-[#9b59b6] opacity-[0.05] blur-[100px]" />
      </div>

      <Navigation />
      
      <main className="relative z-10">
        <HeroSection />
        <Marquee />
        <AboutSection />
        <GallerySection />
        <MusicSection />
        <LocationSection />
      </main>

      <Footer />
    </div>
  );
}
