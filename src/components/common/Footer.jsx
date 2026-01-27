import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const services = [
    "Services 1",
    "Services 2",
    "Services 3",
    "Services 4",
    "Services 5",
    "Services 6",
  ];

  const locations = [
    "G15, Second Floor, Sector 3, Noida",
  ];

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Exhibition Calendar", href: "#calendar" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#C41E3A]">
      
      {/* MAIN FOOTER SECTION */}
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
          
          {/* COLUMN 1: SUBMIT A QUERY */}
          <div>
            <h3 className="text-xl font-bold mb-6">Submit A Query</h3>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2.5 rounded border-2 border-white bg-transparent text-white placeholder-white/80 focus:outline-none focus:border-white/90"
              />
              <input
                type="text"
                placeholder="Company"
                className="w-full px-4 py-2.5 rounded border-2 border-white bg-transparent text-white placeholder-white/80 focus:outline-none focus:border-white/90"
              />
              <input
                type="tel"
                placeholder="Mobile"
                className="w-full px-4 py-2.5 rounded border-2 border-white bg-transparent text-white placeholder-white/80 focus:outline-none focus:border-white/90"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2.5 rounded border-2 border-white bg-transparent text-white placeholder-white/80 focus:outline-none focus:border-white/90"
              />
              <input
                type="text"
                placeholder="Query"
                className="w-full px-4 py-2.5 rounded border-2 border-white bg-transparent text-white placeholder-white/80 focus:outline-none focus:border-white/90"
              />
            </form>
          </div>

          {/* COLUMN 2: OUR SERVICES */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-2.5">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: OUR LOCATION */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Location</h3>
            <ul className="space-y-2.5">
              {locations.map((location, index) => (
                <li key={index} className="text-sm leading-relaxed">
                  {location}
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: CONTACT */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <div className="space-y-2.5 text-sm">
              <p>
                <span className="font-semibold">+91 999 998 2358</span>
              </p>
              <p>
                <a href="mailto:stagehook.india@gmail.com" className="hover:underline">
                  stagehook.india@gmail.com
                </a>
              </p>
            </div>

            {/* SOCIAL CONNECT */}
            <div className="mt-8">
              <h4 className="text-lg font-bold mb-4">Social Connect</h4>
              <div className="flex gap-3">
                <a
                  href="https://wa.me/919999982358"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#C41E3A] hover:bg-gray-100 transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={20} />
                </a>
                <a
                  href="https://www.instagram.com/stagehook.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#C41E3A] hover:bg-gray-100 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://www.facebook.com/stagehook.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#C41E3A] hover:bg-gray-100 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={20} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="bg-[#8B1520] py-3.5">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="text-center text-white text-xs">
            ©Copyright 2025, Stage Hook Pvt. Ltd. All Rights Reserved.
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
