import { FaInstagram, FaLinkedinIn, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-[#E31E24] text-white text-sm">
      <div className="max-w-[1300px] mx-auto px-4 h-10 flex items-center justify-between">
        {/* Left side - Phone number */}
        <div className="flex items-center gap-2">
          <span className="font-medium">Call us</span>
          <span className="font-semibold">+91 123456789</span>
        </div>

        {/* Right side - Social icons with circular borders */}
        <div className="flex items-center gap-3">
          <a 
            href="https://instagram.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#E31E24] transition-all duration-300 cursor-pointer"
            aria-label="Instagram"
          >
            <FaInstagram className="text-[14px]" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#E31E24] transition-all duration-300 cursor-pointer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="text-[14px]" />
          </a>
          <a 
            href="https://wa.me/91123456789" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#E31E24] transition-all duration-300 cursor-pointer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="text-[14px]" />
          </a>
          <a 
            href="mailto:info@stagehook.com" 
            className="w-7 h-7 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#E31E24] transition-all duration-300 cursor-pointer"
            aria-label="Email"
          >
            <FaEnvelope className="text-[14px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
