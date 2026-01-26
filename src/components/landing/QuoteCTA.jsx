const QuoteCTA = () => {
  return (
    <div className="bg-[#D9D9D9] py-12 font-poppins">
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
  );
};

export default QuoteCTA;
