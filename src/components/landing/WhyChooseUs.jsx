const WhyChooseUs = () => {
  return (
    <section className="bg-white">
      
      {/* Main Content Section */}
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT - Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Why Choose Us
            </h2>
            
            <div className="text-gray-700 leading-relaxed space-y-4 text-[15px] text-justify">
              <p>
                We are more than just a service provider — we are your creative and strategic partner. From 
                corporate events to international expos, we bring your vision to life with precision and 
                professionalism. Our event and project managers ensure that every detail is taken care of, so you 
                can focus on what matters. With a diverse portfolio that spans <span className="font-semibold">Exhibition Stall Design, 
                Graphic Designing, Event Management, Digital Marketing, ATL & BTL Campaigns, and Web Development</span>, we 
                offer end-to-end solutions that help your brand stand out, engage, and grow. No need to juggle 
                multiple vendors. From conceptualizing a stunning exhibition stall to executing powerful digital 
                campaigns, we bring all your marketing needs under one roof with seamless integration and 
                consistency. We believe in originality. Our design team crafts unique visual experiences tailored to 
                your brand, whether it's a custom-built stall, a dynamic graphic campaign, or an engaging website.
              </p>
              
              <p>
                Whether it's ATL, BTL, or digital marketing, we don't just execute — we plan with purpose. Our team 
                blends creativity with strategy to deliver measurable results that align with your business goals. We 
                understand the digital landscape. Our experts use data-driven strategies across SEO, PPC, social 
                media, and content marketing to drive visibility, engagement, and conversions. Our 
                multi-disciplinary team brings years of experience and <span className="font-semibold">fresh thinking</span> to every project. We are 
                passionate about innovation, quality, and delivering value to our clients. Your satisfaction is our 
                success. We prioritize communication, transparency, and collaboration throughout every stage of 
                the project, ensuring that you're always in the loop.
              </p>
            </div>
          </div>

          {/* RIGHT - 3D Question Mark Image */}
          <div className="flex items-center justify-center">
            <img 
              src="/question-mark-3d.png" 
              alt="Why Choose Us" 
              className="w-full max-w-[500px] h-auto"
            />
          </div>
        </div>
      </div>

      {/* Stats Section - Red Background with Pattern */}
      <div 
        className="relative bg-[#E31E24] py-16 overflow-hidden"
        style={{
          backgroundImage: 'url(/red-pattern-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Stats Content */}
        <div className="relative max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            
            {/* Stat 1 - Covered Area */}
            <div className="text-center text-white">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l8 3.6v7.22c0 4.35-2.93 8.43-7 9.77V4.18z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <div className="text-3xl font-bold mb-1">46000+ sqm</div>
              <div className="text-sm font-medium">Covered Area</div>
            </div>

            {/* Stat 2 - Clients */}
            <div className="text-center text-white">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <div className="text-3xl font-bold mb-1">650+</div>
              <div className="text-sm font-medium">Clients</div>
            </div>

            {/* Stat 3 - Exhibition Stands */}
            <div className="text-center text-white">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM9 10v8l7-4z"/>
                </svg>
              </div>
              <div className="text-3xl font-bold mb-1">2700+</div>
              <div className="text-sm font-medium">Exhibition Stands</div>
            </div>

            {/* Stat 4 - Avenues */}
            <div className="text-center text-white">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div className="text-3xl font-bold mb-1">95+</div>
              <div className="text-sm font-medium">Avenues</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
