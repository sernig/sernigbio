
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import VideoSection from '../components/VideoSection';
import InteractiveStrips from '../components/InteractiveStrips';
import EmbraceSimplicityBanner from '../components/EmbraceSimplicityBanner';
import MovieQuotes from '../components/MovieQuotes';
import SocialMediaBanner from '../components/SocialMediaBanner';

const Index = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [videoVisible, setVideoVisible] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const rect = videoRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2;
        setVideoVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (tab: string) => {
    if (tab === 'products') {
      setLocation('/products');
    } else if (tab === 'gallery') {
      setLocation('/gallery');
    } else if (tab === 'about') {
      setLocation('/');
      setActiveTab('about');
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-black text-white font-inter overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Navigation 
        activeTab={activeTab} 
        onTabClick={handleTabClick}
      />
      
      <HeroSection />
      
      <div ref={videoRef}>
        <VideoSection visible={videoVisible} />
      </div>
      
      <InteractiveStrips />
      
      <div className="py-12"></div>
      
      <MovieQuotes />
      
      <SocialMediaBanner />
      
      <div className="pt-16">
        <EmbraceSimplicityBanner />
      </div>
    </motion.div>
  );
};

export default Index;
