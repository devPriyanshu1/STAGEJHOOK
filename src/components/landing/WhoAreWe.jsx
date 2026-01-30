const WhoAreWe = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-20 bg-white">
      
      {/* Heading */}
      <h2 className="text-5xl font-bold text-center mb-4 text-gray-800 tracking-wide">
        WHO ARE WE
      </h2>

      <p className="text-center font-semibold text-lg mb-16 text-gray-900">
        Welcome to STAGE HOOK – Where Brands Come Alive.
      </p>

     
      
      {/* INTRODUCTION Section - Below the grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 items-center">
        
        {/* LEFT - INTRODUCTION Content */}
        <div className="bg-white p-10 rounded-lg">
          <h3 className="text-4xl font-bold text-[#E74C3C] mb-6 tracking-wide">
            INTRODUCTION
          </h3>

          <p className="font-bold text-xl mb-8 text-gray-900 leading-relaxed">
            Welcome to STAGE HOOK – Where Brands Come Alive.
          </p>

          <div className="text-gray-700 leading-relaxed space-y-5 text-[15px] text-justify">
            <p>
              In today's fast-paced, highly competitive world, brands don't just need to exist — they 
              need to stand out, connect, and inspire. That's where we come in.
            </p>

            <p>
              Whether you're launching a product, organizing a corporate event, showcasing at an 
              expo, or building a digital presence, we bring your ideas to life with creativity, 
              precision, and strategic thinking. Our team combines artistic flair with technical 
              expertise to deliver seamless experiences that captivate audiences and drive real 
              results.
            </p>

            <p>
              Since 2015, <span className="font-bold text-gray-900">STAGE HOOK</span> has been a full-service creative and technology agency that 
              brings together the best of the physical and digital worlds. We specialize in <span className="font-semibold">Exhibition 
              Stall Design, Graphic Designing, Event Management, Digital Marketing, ATL and BTL, 
              and Web Development</span>, offering a comprehensive suite of services designed to 
              elevate your brand at every level.
            </p>

            <p>
              At <span className="font-bold text-gray-900">STAGE HOOK</span>, we don't just create designs or build booth — we craft stories, shape 
              experiences, and help brands shine at every touchpoint.
            </p>
          </div>
        </div>

        {/* RIGHT - Illustration Image */}
        <div className="flex items-center justify-center lg:justify-end">
          <img 
            src="/brand-illustration.png" 
            alt="Brand illustration" 
            className="w-full max-w-[450px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
