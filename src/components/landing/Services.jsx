const services = [
  {
    title: "Custom Exhibition Design",
    img: "/services/custom-exhibition.jpg",
  },
  {
    title: "Custom Built Stands",
    img: "/services/custom-built-stands.jpg",
  },
  {
    title: "Event Services",
    img: "/services/event-services.jpg",
  },
  {
    title: "Custom Booth",
    img: "/services/custom-booth.jpg",
  },
  {
    title: "Expert in Graphic",
    img: "/services/expert-graphic.jpg",
  },
  {
    title: "Digital Marketing",
    img: "/services/digital-marketing.jpg",
  },
];

const Services = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((item, index) => (
            <div 
              key={index} 
              className="border-2 border-gray-300 overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
            >
              
              {/* IMAGE */}
              <div className="h-[280px] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* RED TITLE BAR */}
              <div className="bg-[#E31E24] text-white text-center py-4 font-semibold text-base">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="flex justify-center">
          <button className="flex items-center gap-2 text-gray-800 font-semibold text-base hover:text-[#E31E24] transition-colors duration-300 group">
            View All Services
            <svg 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </button>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#D9D9D9] mt-16 py-12">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Text */}
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
            Get Free Quote For Your Next Exhibition
          </h3>

          {/* Right Button */}
          <button className="bg-[#E31E24] text-white px-8 py-3 font-semibold text-base rounded hover:bg-[#C01A1F] transition-colors duration-300 flex items-center gap-2 whitespace-nowrap">
            <svg 
              className="w-5 h-5" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
