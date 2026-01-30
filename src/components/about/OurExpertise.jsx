const OurExperties = () => {
  return (
    <section className="bg-[#f5f5f5] py-20">
      <div className="max-w-[1400px] mx-auto px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-20 items-center">
          
          {/* LEFT: Experties Diagram */}
          <div className="flex justify-start">
            <img 
              src="/experties-diagram.png" 
              alt="Our Experties Diagram" 
              className="w-full max-w-[650px] h-auto"
            />
          </div>

          {/* RIGHT: Experties Text */}
          <div className="pt-0">
            <h2 className="text-[2.75rem] font-bold text-[#E63946] mb-10 tracking-normal leading-tight">
              OUR EXPERTIES
            </h2>
            <p className="text-gray-700 leading-[1.85] text-[1.05rem]">
              We specialize in brand-centric stall design, backed by high-quality modular and custom fabrication, with a strong focus on finishing and detailing excellence. Every project is executed with precision to ensure on-time delivery, exactly as proposed — because your brand deserves nothing less than perfection.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default OurExperties;
