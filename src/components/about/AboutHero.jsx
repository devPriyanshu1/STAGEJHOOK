const AboutHero = () => {
  return (
    <section className="relative h-[350px] sm:h-[450px] md:h-[550px] bg-[#8B1520] overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/people-silhouettes.png" 
          alt="Team" 
          className="w-full h-full object-cover object-[center_80%]"
        />
      </div>

      {/* Dark gradient overlay at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>

      {/* About Us Text - Top Left */}
      <div className="absolute top-5 left-4 sm:left-8 md:left-16 lg:left-24">
        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          About Us
          <div className="h-1 bg-white w-full mt-2"></div>
        </h1>
      </div>

    </section>
  );
};

export default AboutHero;
