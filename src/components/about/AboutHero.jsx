const AboutHero = () => {
  return (
    <section className="relative h-[400px] bg-gradient-to-b from-[#8B1520] to-[#C41E3A] overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/images/about-hero-bg.jpg" 
          alt="Team Silhouettes" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#8B1520]/60 to-[#C41E3A]/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 h-full flex items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            About Us
          </h1>
        </div>
      </div>

      {/* Silhouettes Image Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-48">
        <img 
          src="/images/people-silhouettes.png" 
          alt="People Silhouettes" 
          className="w-full h-full object-cover opacity-70"
        />
      </div>

    </section>
  );
};

export default AboutHero;
