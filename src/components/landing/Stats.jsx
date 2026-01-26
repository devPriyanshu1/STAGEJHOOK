import {
  FaMapMarkedAlt,
  FaUsers,
  FaStore,
  FaBuilding,
} from "react-icons/fa";

const Stats = () => {
  return (
    <section className="relative w-full">
      {/* RED OVERLAY SECTION */}
      <div className="bg-[#A61C23] w-full">
        <div className="max-w-[1300px] mx-auto px-4 py-12 md:py-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-white text-center">
          
          {/* ITEM 1 - Covered Area */}
          <div className="flex flex-col items-center justify-center">
            <FaMapMarkedAlt className="text-4xl md:text-5xl mb-3" />
            <h3 className="text-xl md:text-2xl font-bold mb-1">46000+ sqm</h3>
            <p className="text-sm md:text-base">Covered Area</p>
          </div>

          {/* ITEM 2 - Clients */}
          <div className="flex flex-col items-center justify-center">
            <FaUsers className="text-4xl md:text-5xl mb-3" />
            <h3 className="text-xl md:text-2xl font-bold mb-1">650+</h3>
            <p className="text-sm md:text-base">Clients</p>
          </div>

          {/* ITEM 3 - Exhibition Stands */}
          <div className="flex flex-col items-center justify-center">
            <FaStore className="text-4xl md:text-5xl mb-3" />
            <h3 className="text-xl md:text-2xl font-bold mb-1">2700+</h3>
            <p className="text-sm md:text-base">Exhibition Stands</p>
          </div>

          {/* ITEM 4 - Avenues */}
          <div className="flex flex-col items-center justify-center">
            <FaBuilding className="text-4xl md:text-5xl mb-3" />
            <h3 className="text-xl md:text-2xl font-bold mb-1">95+</h3>
            <p className="text-sm md:text-base">Avenues</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
