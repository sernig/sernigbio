
import { useState } from 'react';
import { Instagram, Youtube, Twitch, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  activeTab: string;
  onTabClick: (tab: string) => void;
}

// Custom minimalistic muted icons
const TelegramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M2 12L22 2L18 22L12 18L8 14L2 12Z" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="none"
    />
    <path 
      d="M22 2L12 18" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
  </svg>
);

const BoostyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle 
      cx="12" 
      cy="12" 
      r="9" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      fill="none"
    />
    <path 
      d="M8 12L12 8L16 12L12 16L8 12Z" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect 
      x="2" 
      y="2" 
      width="20" 
      height="20" 
      rx="5" 
      ry="5" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      fill="none"
    />
    <circle 
      cx="12" 
      cy="12" 
      r="4" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      fill="none"
    />
    <circle 
      cx="18" 
      cy="6" 
      r="1" 
      fill="currentColor"
    />
  </svg>
);

const Navigation = ({ activeTab, onTabClick }: NavigationProps) => {
  const [showContactIcons, setShowContactIcons] = useState(false);
  const tabs = ['about', 'products', 'contact', 'gallery'];

  const socialLinks = [
    {
      name: 'Telegram',
      icon: <TelegramIcon />,
      url: 'https://t.me/budnisernig',
    },
    {
      name: 'Instagram',
      icon: <InstagramIcon />,
      url: 'https://www.instagram.com/ser_nig/',
    },
    {
      name: 'Boosty',
      icon: <BoostyIcon />,
      url: 'https://boosty.to/men_legacy',
    },
    {
      name: 'YouTube',
      icon: <Youtube className="w-5 h-5" />,
      url: 'https://www.youtube.com/@sernigplug',
    },
    {
      name: 'Twitch',
      icon: <Twitch className="w-5 h-5" />,
      url: 'https://www.twitch.tv/tsunamifn96',
    }
  ];

  const handleTabClick = (tab: string) => {
    if (tab === 'contact') {
      setShowContactIcons(!showContactIcons);
    } else if (tab === 'products' || tab === 'gallery') {
      // Redirect to coming soon page for these tabs
      onTabClick(tab);
    } else {
      setShowContactIcons(false);
      onTabClick(tab);
    }
  };

  return (
    <>
      {/* Smooth darkening overlay */}
      <AnimatePresence>
        {showContactIcons && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onClick={() => setShowContactIcons(false)}
          />
        )}
      </AnimatePresence>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-gray-800/30">
        {/* Logo moved to top-left */}
        <div className="absolute top-4 left-6">
          <img 
            src="/lovable-uploads/44ded00f-f6f2-4046-bbad-b42a251c4242.png" 
            alt="Logo"
            className="w-12 h-12 rounded-full"
          />
        </div>

        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-center space-x-8 relative">
            {tabs.map((tab) => (
              <div key={tab} className="relative">
                <button
                  onClick={() => handleTabClick(tab)}
                  className={`flex items-center space-x-2 text-sm font-light uppercase tracking-wider transition-all duration-300 hover:text-white relative z-50 ${
                    activeTab === tab 
                      ? 'text-white border-b border-white pb-1' 
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <span>{tab}</span>
                </button>
                
                {/* Contact Icons Dropdown - Below the tab and to the left */}
                <AnimatePresence>
                  {tab === 'contact' && showContactIcons && (
                    <motion.div 
                      className="absolute top-full left-0 mt-4 z-60"
                      initial={{ opacity: 0, y: -20, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.8 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <div className="flex space-x-4 items-center ml-[-119px] mr-[-119px] pl-[0px] pr-[0px]">
                        {socialLinks.map((link, index) => (
                          <motion.a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-110 hover:bg-white/30 border border-white/40 shadow-lg"
                            initial={{ opacity: 0, scale: 0, rotate: -180 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ 
                              duration: 0.4, 
                              delay: index * 0.1,
                              ease: "easeOut" 
                            }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <div className="text-white/90 hover:text-white transition-colors duration-300">{link.icon}</div>
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
