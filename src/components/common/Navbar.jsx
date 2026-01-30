import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white relative z-10">
      <div className="max-w-[1300px] mx-auto px-4 py-2 sm:py-3 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center relative z-20">
          <img 
            src="/logo.png" 
            alt="Stage J Hook Logo" 
            className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto relative -mb-6 sm:-mb-8"
          />
        </Link>

        {/* HAMBURGER ICON - Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-xl sm:text-2xl text-gray-800 z-20"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* MENU - Desktop */}
        <ul className="hidden lg:flex items-center gap-3 xl:gap-4 text-[14px] xl:text-[15px] font-medium text-black">
          <li><Link to="/" className="hover:text-[#E31E24] transition-colors">Home</Link></li>
          <li className="border-l border-gray-400 h-4"></li>
          <li><Link to="/about" className="hover:text-[#E31E24] transition-colors">About Us</Link></li>
          <li className="border-l border-gray-400 h-4"></li>
          <li><Link to="/services" className="hover:text-[#E31E24] transition-colors cursor-pointer">Services</Link></li>
          <li className="border-l border-gray-400 h-4"></li>
          <li><Link to="/portfolio" className="hover:text-[#E31E24] transition-colors cursor-pointer">Portfolio</Link></li>
          <li className="border-l border-gray-400 h-4"></li>
          <li><Link to="/exhibition" className="hover:text-[#E31E24] transition-colors cursor-pointer">Exhibition Calendar</Link></li>
          <li className="border-l border-gray-400 h-4"></li>
          <li><Link to="/contact" className="hover:text-[#E31E24] transition-colors cursor-pointer">Contact</Link></li>
        </ul>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="fixed inset-0 bg-white z-10 lg:hidden pt-20 sm:pt-24">
            <ul className="flex flex-col items-center gap-5 sm:gap-6 text-base sm:text-lg font-medium text-black py-8">
              <li><Link to="/" onClick={() => setIsOpen(false)} className="hover:text-[#E31E24] transition-colors">Home</Link></li>
              <li><Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-[#E31E24] transition-colors">About Us</Link></li>
              <li><Link to="/services" onClick={() => setIsOpen(false)} className="hover:text-[#E31E24] transition-colors">Services</Link></li>
              <li><Link to="/portfolio" onClick={() => setIsOpen(false)} className="hover:text-[#E31E24] transition-colors">Portfolio</Link></li>
              <li><Link to="/exhibition" onClick={() => setIsOpen(false)} className="hover:text-[#E31E24] transition-colors">Exhibition Calendar</Link></li>
              <li><Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-[#E31E24] transition-colors">Contact</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
