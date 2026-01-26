import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="max-w-[1300px] mx-auto px-4 py-5 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-end gap-1">
          <span className="text-2xl font-bold">STAGE</span>
          <span className="text-4xl font-bold text-primary leading-none">J</span>
          <span className="text-2xl font-bold">HOOK</span>
        </div>

        {/* MENU */}
        <ul className="flex gap-8 text-[14px] font-normal">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
          <li className="hover:text-primary cursor-pointer">Services</li>
          <li className="hover:text-primary cursor-pointer">Portfolio</li>
          <li className="hover:text-primary cursor-pointer">Exhibition Calendar</li>
          <li className="hover:text-primary cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
