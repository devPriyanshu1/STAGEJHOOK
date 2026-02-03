import React from 'react';

const ContactHero = () => {
  return (
    <section className="relative h-[40vh] bg-[#ee1d23] flex items-center overflow-hidden">
      {/* Background Image with Red Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/contact-hero.jpg')",
          backgroundPosition: "center",
        }}
      >
        {/* Red overlay */}
        <div className="absolute inset-0 bg-[#ee1d23]/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
          Contact Us
        </h1>
        <div className="w-32 h-1 bg-white mt-4"></div>
      </div>
    </section>
  );
};

export default ContactHero;
