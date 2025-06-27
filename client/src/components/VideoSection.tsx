
import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface VideoSectionProps {
  visible: boolean;
}

const VideoSection = ({ visible }: VideoSectionProps) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const toggleMute = () => {
    if (iframeRef.current) {
      // Since we can't directly control YouTube iframe audio, we'll update the src
      const baseUrl = "https://www.youtube.com/embed/MZwj4Am2uvE?autoplay=1&loop=1&controls=0&playlist=MZwj4Am2uvE&start=1";
      const newUrl = isMuted 
        ? baseUrl + "&mute=0" 
        : baseUrl + "&mute=1";
      
      iframeRef.current.src = newUrl;
      setIsMuted(!isMuted);
    }
  };

  // Initialize with muted video
  const youtubeEmbedUrl = "https://www.youtube.com/embed/MZwj4Am2uvE?autoplay=1&loop=1&mute=1&controls=0&playlist=MZwj4Am2uvE&start=1";

  return (
    <section className={`relative h-screen bg-black transition-all duration-1000 ease-in-out transform ${
      visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8'
    }`}>
      <div className="absolute inset-0">
        <iframe
          ref={iframeRef}
          className="w-full h-full object-cover"
          src={youtubeEmbedUrl}
          title="Background Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ pointerEvents: 'none' }}
        />
        
        {/* Minimalist Audio Toggle Button */}
        <div className="absolute bottom-8 left-8">
          <button
            onClick={toggleMute}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative p-3 rounded-full transition-all duration-500 ease-out bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30"
          >
            {/* Subtle background pulse */}
            <div className={`absolute inset-0 rounded-full bg-white/5 transition-all duration-1000 ${
              isHovered ? 'scale-110 opacity-100' : 'scale-100 opacity-0'
            }`}></div>
            
            {/* Icon with smooth transitions */}
            <div className={`relative transition-all duration-500 ease-out ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}>
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-white transition-all duration-500" />
              ) : (
                <Volume2 className="w-5 h-5 text-white transition-all duration-500" />
              )}
            </div>
            
            {/* Minimalist indicator line */}
            <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-white transition-all duration-700 ease-out ${
              isMuted ? 'w-2 opacity-40' : 'w-4 opacity-80'
            }`}></div>
          </button>
          
          {/* Clean tooltip */}
          <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-1.5 text-xs text-white bg-black/60 rounded-md backdrop-blur-sm transition-all duration-300 ease-out ${
            isHovered 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-1 pointer-events-none'
          }`}>
            {isMuted ? 'Unmute' : 'Mute'}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
