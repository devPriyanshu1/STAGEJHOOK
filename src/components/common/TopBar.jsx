import { FaInstagram, FaLinkedinIn, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-[#E31E24] text-white text-sm">
      <div className="max-w-[1300px] mx-auto px-4 h-10 flex items-center justify-end">
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Phone number */}
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="hidden sm:inline font-medium">Call us</span>
            <span className="font-semibold text-xs sm:text-sm">+91 999 998 2358</span>
          </div>

          {/* Divider */}
          <div className="h-6 w-[1px] bg-white/40"></div>

          {/* Social icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a 
              href="https://www.instagram.com/stagehook.co.in/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#E31E24] transition-all duration-300 cursor-pointer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-[14px]" />
            </a>
            <a 
              href="https://in.linkedin.com/company/stagehook-media-pvt-ltd?trk=public_post_follow-view-profile" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#E31E24] transition-all duration-300 cursor-pointer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-[14px]" />
            </a>
            <a 
              href="https://wa.me/919999982358" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#E31E24] transition-all duration-300 cursor-pointer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-[14px]" />
            </a>
            <a 
              href="mailto:stagehook.india@gmail.com" 
              className="w-7 h-7 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#E31E24] transition-all duration-300 cursor-pointer"
              aria-label="Email"
            >
              <FaEnvelope className="text-[14px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
