import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";

interface ComingSoonProps {
  page: string;
}

const ComingSoon = ({ page }: ComingSoonProps) => {
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
      className="min-h-screen bg-black text-white font-inter overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Navigation 
        activeTab={page} 
        onTabClick={handleTabClick}
      />
      
      <div className="flex items-center justify-center min-h-screen pt-20">
        <motion.div 
          className="text-center space-y-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-light tracking-wider uppercase"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Coming Soon...
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-400 capitalize"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {page} page is under development
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link 
              href="/" 
              className="inline-block mt-8 px-8 py-4 border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wider text-sm hover:scale-105"
            >
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ComingSoon;