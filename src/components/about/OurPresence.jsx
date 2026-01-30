const OurPresence = () => {
  return (
    <section className="bg-[#f5f5f5] py-20">
      <div className="max-w-[1400px] mx-auto px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-20 items-center">
          
          {/* LEFT: India Map with Locations */}
          <div className="flex justify-start">
            <img 
              src="/india-map-presence.png" 
              alt="Our Presence Map - India" 
              className="w-full max-w-[550px] h-auto"
            />
          </div>

          {/* RIGHT: Presence Text */}
          <div className="pt-0">
            <h2 className="text-[2.75rem] font-bold text-[#E63946] mb-10 tracking-normal leading-tight">
              OUR PRESENCE
            </h2>
            
            <p className="text-gray-800 leading-[1.85] text-[1.05rem] mb-6">
              We specialize in Exhibition Stall Design, Graphic Designing, Event Management, Digital Marketing, ATL and BTL, and Web Development, delivering creative and impactful solutions across India and internationally.
            </p>

            <p className="text-gray-800 leading-[1.85] text-[1.05rem] mb-6">
              With strategically located offices and operations in <span className="font-bold">Delhi, Mumbai, Bangalore, Pune, Goa, Kolkata, Gujarat, and Chandigarh</span>, we are well-positioned to serve a wide range of industries with speed, flexibility, and local expertise.
            </p>

            <p className="text-gray-800 leading-[1.85] text-[1.05rem]">
              <span className="font-bold">Internationally</span>, we extend our expertise to global markets, delivering world-class exhibition stalls.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default OurPresence;
