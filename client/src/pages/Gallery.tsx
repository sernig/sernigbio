import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import Navigation from '../components/Navigation';
import { motion } from 'framer-motion';

interface GalleryItem {
  id: number;
  name: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  background?: string;
}

const Gallery = () => {
  const [activeTab] = useState('gallery');
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [, setLocation] = useLocation();

  // Portfolio items showcasing SERNIG's creative work with distinct backgrounds
  const portfolioItems: GalleryItem[] = [
    {
      id: 1,
      name: "web design",
      description: "",
      image: "",
      tags: [],
      category: "Services",
      background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1f1f1f 100%)"
    },
    {
      id: 2,
      name: "web developing",
      description: "",
      image: "",
      tags: [],
      category: "Services",
      background: "linear-gradient(135deg, #0f0f0f 0%, #1e1e1e 50%, #121212 100%)"
    },
    {
      id: 3,
      name: "copywriting",
      description: "",
      image: "",
      tags: [],
      category: "Services",
      background: "linear-gradient(135deg, #262626 0%, #1a1a1a 50%, #2a2a2a 100%)"
    },
    {
      id: 4,
      name: "digital marketing",
      description: "",
      image: "",
      tags: [],
      category: "Services",
      background: "linear-gradient(135deg, #171717 0%, #2b2b2b 50%, #1b1b1b 100%)"
    },
    {
      id: 5,
      name: "ceo manager",
      description: "",
      image: "",
      tags: [],
      category: "Services",
      background: "linear-gradient(135deg, #202020 0%, #141414 50%, #242424 100%)"
    },
    {
      id: 6,
      name: "athlete",
      description: "",
      image: "",
      tags: [],
      category: "Services",
      background: "linear-gradient(135deg, #131313 0%, #272727 50%, #161616 100%)"
    }
  ];

  // Handle scroll-based animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = parseInt(entry.target.getAttribute('data-item-id') || '0');
            setVisibleItems(prev => 
              prev.includes(itemId) ? prev : [...prev, itemId]
            );
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const handleTabClick = (tab: string) => {
    if (tab === 'about') {
      setLocation('/');
    } else if (tab === 'products') {
      setLocation('/products');
    } else if (tab === 'contact') {
      // Handle contact tab if needed
      console.log('Contact tab clicked');
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
      
      {/* Gallery Header */}
      <section className="pt-32 pb-16 px-6 relative z-20">
        <div className="container mx-auto text-center">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold uppercase tracking-wider mb-8 relative z-30 text-white"
            style={{ 
              textShadow: '0 0 10px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6), 0 0 30px rgba(0,0,0,0.4), 2px 2px 4px rgba(0,0,0,0.9)' 
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Gallery
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed mb-12 relative z-30 font-medium"
            style={{ 
              textShadow: '0 0 8px rgba(0,0,0,0.9), 0 0 16px rgba(0,0,0,0.7), 2px 2px 4px rgba(0,0,0,0.8)' 
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore a curated collection of creative works and projects by SERNIG
          </motion.p>
          
          {/* Interactive 3D Spline Element - Full Screen with Smooth Appearance */}
          <motion.div 
            className="w-screen h-screen fixed inset-0 z-0 overflow-hidden"
            initial={{ 
              opacity: 0, 
              scale: 0.8,
              rotateY: -15,
              filter: "blur(10px)"
            }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              rotateY: 0,
              filter: "blur(0px)"
            }}
            transition={{ 
              duration: 2.5, 
              delay: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <motion.iframe 
              src="https://my.spline.design/retrofuturismbganimation-Xf3soFeDyzDxoOj5rSUKpS1F/"
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
                y: [0, -10, 0],
                scale: [1.05, 1.06, 1.05],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3
              }}
            />
            
            {/* Overlay to hide bottom branding area and "Built with Spline" text */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10"></div>
            <div className="absolute bottom-0 right-0 w-32 h-12 bg-black pointer-events-none z-20"></div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 pb-20 relative z-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                data-item-id={item.id}
                className="gallery-item group cursor-pointer relative z-30"
                initial={{ opacity: 0, y: 50 }}
                animate={visibleItems.includes(item.id) ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <div className="backdrop-blur-sm border border-gray-800/30 rounded-lg overflow-hidden transition-all duration-500 hover:border-white/20 hover:scale-105 shadow-2xl">
                  {/* Minimalist Background with Service Label */}
                  <div 
                    className="aspect-video relative overflow-hidden flex items-center justify-center"
                    style={{
                      background: item.background || "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1f1f1f 100%)"
                    }}
                  >
                    {/* Subtle texture overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-black/[0.05]"></div>
                    
                    {/* Content */}
                    <div className="text-center relative z-10">
                      <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wider drop-shadow-lg">
                        {item.name}
                      </h3>
                      <p className="text-gray-300 text-sm font-medium uppercase tracking-wide drop-shadow-md opacity-80">
                        COMING SOON...
                      </p>
                    </div>
                    
                    {/* Minimalist corner accent */}
                    <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/10"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/10"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Gallery;