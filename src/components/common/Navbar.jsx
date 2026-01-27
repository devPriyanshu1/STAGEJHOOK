import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white relative z-10">
      <div className="max-w-[1300px] mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* LOGO - on the extreme left */}
        <Link to="/" className="flex items-center relative z-20">
          <img 
            src="/logo.png" 
            alt="Stage J Hook Logo" 
            className="h-32 w-auto relative -mb-8"
          />
        </Link>

        {/* MENU - on the extreme right */}
        <ul className="flex items-center gap-4 text-[15px] font-medium text-black">
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
      </div>
    </nav>
  );
};

export default Navbar;
