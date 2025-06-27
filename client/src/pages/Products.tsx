import { useState } from 'react';
import { useLocation } from 'wouter';
import Navigation from '../components/Navigation';
import { motion } from 'framer-motion';

const Products = () => {
  const [activeTab] = useState('products');
  const [, setLocation] = useLocation();

  const handleTabClick = (tab: string) => {
    if (tab === 'about') {
      setLocation('/');
    } else if (tab === 'gallery') {
      setLocation('/gallery');
    } else if (tab === 'contact') {
      // Handle contact tab if needed
      console.log('Contact tab clicked');
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-black text-white font-inter overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Navigation 
        activeTab={activeTab} 
        onTabClick={handleTabClick}
      />
      
      {/* Full Screen 3D Model with Enhanced Smooth Appearance */}
      <motion.div 
        className="w-screen h-screen fixed inset-0 z-0 overflow-hidden"
        initial={{ 
          opacity: 0, 
          scale: 0.7,
          rotateX: 10,
          rotateY: -20,
          filter: "blur(15px)"
        }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          rotateX: 0,
          rotateY: 0,
          filter: "blur(0px)"
        }}
        transition={{ 
          duration: 3, 
          delay: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        <motion.iframe 
          src="https://my.spline.design/hellodistortingintro-IkXnfdkkhLJ21iqeaKODoHVX/"
          frameBorder="0"
          width="100%"
          height="110%"
          className="bg-transparent -mb-10"
          style={{ 
            background: 'transparent',
            minHeight: '100vh',
            border: 'none',
            outline: 'none',
            transform: 'scale(1.05)',
            transformOrigin: 'center top'
          }}
          allowFullScreen
          loading="lazy"
          animate={{
            y: [0, -8, 0],
            scale: [1.05, 1.07, 1.05],
            rotateZ: [0, 0.5, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3.5
          }}
        />
        
        {/* Enhanced overlay to hide bottom branding area and "Built with Spline" text */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10"></div>
        <div className="absolute bottom-0 right-0 w-32 h-12 bg-black pointer-events-none z-20"></div>
      </motion.div>
    </motion.div>
  );
};

export default Products;