const WhoAreWe = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-20 bg-[#F5F5F5]">
      
      {/* Heading */}
      <h2 className="text-5xl font-bold text-center mb-4 text-gray-800 tracking-wide">
        WHO ARE WE
      </h2>

      <p className="text-center font-semibold text-lg mb-16 text-gray-900">
        Welcome to STAGE HOOK – Where Brands Come Alive.
      </p>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
        
        {/* LEFT TEXT */}
        <div className="text-gray-700 leading-relaxed space-y-5 text-[15px] text-justify">
          <p>
            In today's fast-paced, highly competitive world, brands don't just need to exist – they 
            need to stand out, connect, and inspire. That's where we come in.
          </p>

          <p>
            Whether you're launching a product, organizing a corporate event, showcasing at an expo, 
            or building a digital presence, we bring your ideas to life with creativity, precision, 
            and strategic thinking. Our team combines artistic flair with technical expertise to deliver 
            seamless experiences that captivate audiences and drive real results.
          </p>

          <p>
            <span className="font-bold text-gray-900">STAGE HOOK</span> is a full-service creative 
            and technology agency that brings together the best of the physical and digital worlds. 
            We specialize in <span className="font-semibold">Exhibition Stall Design, Graphic Designing, 
            Event Management, Digital Marketing, ATL and BTL, and Web Development</span>, offering a 
            comprehensive suite of services designed to elevate your brand at every level.
          </p>

          <p>
            At <span className="font-bold text-gray-900">STAGE HOOK</span>, we don't just create 
            designs or build booth — we craft stories, shape experiences, and help brands shine at 
            every touchpoint.
          </p>
        </div>

        {/* RIGHT VIDEO PLACEHOLDER */}
        <div className="bg-[#2B2B2B] h-[340px] flex items-center justify-center text-white font-semibold text-xl rounded-sm shadow-lg">
          LOGO VIDEO
        </div>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border-2 border-gray-800 bg-white py-8 text-center font-semibold text-lg hover:bg-gray-800 hover:text-white transition-all duration-300 cursor-pointer">
          Custom Exhibition Design
        </div>
        <div className="border-2 border-gray-800 bg-white py-8 text-center font-semibold text-lg hover:bg-gray-800 hover:text-white transition-all duration-300 cursor-pointer">
          Custom Built Stands
        </div>
        <div className="border-2 border-gray-800 bg-white py-8 text-center font-semibold text-lg hover:bg-gray-800 hover:text-white transition-all duration-300 cursor-pointer">
          Event Services
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
