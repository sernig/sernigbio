
const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Hero Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-fade-in"
        style={{
          backgroundImage: `url('https://raw.githubusercontent.com/sernig/sernigbiorename/refs/heads/main/img/photo_2025-06-27_02-23-29.jpg')`,
          animationDuration: '1.5s',
          animationDelay: '0.2s',
          animationFillMode: 'both'
        }}
      >
        <div className="absolute inset-0 bg-black/40 animate-fade-in" style={{
          animationDuration: '1s',
          animationDelay: '0.8s',
          animationFillMode: 'both'
        }}></div>
      </div>
      
      {/* Large SERNIG Caption */}
      <div className="relative z-10 text-center">
        <h1 
          className="text-8xl md:text-9xl lg:text-[12rem] font-black text-white tracking-tight leading-none transition-all duration-500 hover:scale-110 cursor-pointer animate-fade-in-up"
          style={{
            animationDuration: '1.2s',
            animationDelay: '1.2s',
            animationFillMode: 'both'
          }}
        >
          SERNIG
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
