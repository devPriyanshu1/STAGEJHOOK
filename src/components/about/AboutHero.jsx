const AboutHero = () => {
  return (
    <section className="relative h-[450px] md:h-[550px] bg-[#8B1520] overflow-hidden">
      
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/images/people-silhouettes.png" 
          alt="Team" 
          className="w-full h-full object-cover object-center"
        />
        {/* Dark gradient overlay for better text readability */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#8B1520]/95 via-[#8B1520]/85 to-[#8B1520]/70"></div> */}
      </div>

      

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>

    </section>
  );
};

export default AboutHero;
