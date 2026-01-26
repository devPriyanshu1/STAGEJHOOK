import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      image: "/portfolio1.jpg",
      title: "60sqm",
      subtitle: "AAHAR 2025 (Delhi)",
    },
    {
      id: 2,
      image: "/portfolio2.jpg",
      title: "60sqm",
      subtitle: "AAHAR 2025 (Delhi)",
    },
    {
      id: 3,
      image: "/portfolio3.jpg",
      title: "60sqm",
      subtitle: "AAHAR 2025 (Delhi)",
    },
    {
      id: 4,
      image: "/portfolio4.jpg",
      title: "60sqm",
      subtitle: "AAHAR 2025 (Delhi)",
    },
    {
      id: 5,
      image: "/portfolio5.jpg",
      title: "60sqm",
      subtitle: "AAHAR 2025 (Delhi)",
    },
  ];

const clients = [
  { id: 1, logo: "/clients/tvs.png", name: "TVS" },
  { id: 2, logo: "/clients/sintex.png", name: "Sintex" },
  { id: 3, logo: "/clients/jayna.png", name: "Jayna" },
  { id: 4, logo: "/clients/glassco.png", name: "Glassco" },
  { id: 5, logo: "/clients/parag.png", name: "Parag Milk Foods" },
  { id: 6, logo: "/clients/mm-spires.png", name: "MM Spires" },
  { id: 7, logo: "/clients/multitubo.png", name: "Multitubo" },
  { id: 8, logo: "/clients/kent.png", name: "Kent RO" },
  { id: 9, logo: "/clients/sbi.png", name: "SBI" },
  { id: 10, logo: "/clients/khadi.png", name: "Khadi India" },
];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-[1300px] mx-auto px-4">
        
        {/* PORTFOLIO HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Portfolio
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            <span className="font-semibold">STAGEHOOK</span> has worked with numerous clients who have placed their trust in us, contributing towards our notable contribution. Our work reflects excellence, unique performance and remarkable exhibition design solutions. Take a look at our portfolio to know quality of our work and our role in their successful journey.
          </p>
        </div>

        {/* PORTFOLIO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* RED OVERLAY WITH TEXT */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#A61C23] text-white text-center py-3">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-sm">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* OUR CLIENTELE SECTION */}
        <div className="bg-white py-12 px-6 rounded-lg shadow-md">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
            Our Clientele
          </h2>

          {/* CLIENT LOGOS GRID */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-6 items-center justify-items-center mb-8">
            {clients.map((client) => (
              <div
                key={client.id}
                className="flex items-center justify-center w-20 h-16 hover:scale-110 transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* VIEW ALL BRANDS BUTTON */}
          <div className="text-center">
            <button className="inline-flex items-center gap-2 text-gray-800 font-semibold hover:text-[#A61C23] transition-colors duration-300">
              View All Brands
              <FaArrowRight className="text-sm" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
