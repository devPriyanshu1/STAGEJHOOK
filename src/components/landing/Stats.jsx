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
        <div className="max-w-[1400px] mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
          
          {/* ITEM 1 - Covered Area */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <FaMapMarkedAlt className="text-5xl md:text-6xl mb-1 opacity-90" />
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">46000+ sqm</h3>
            <p className="text-sm md:text-base font-light opacity-90">Covered Area</p>
          </div>

          {/* ITEM 2 - Clients */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <FaUsers className="text-5xl md:text-6xl mb-1 opacity-90" />
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">650+</h3>
            <p className="text-sm md:text-base font-light opacity-90">Clients</p>
          </div>

          {/* ITEM 3 - Exhibition Stands */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <FaStore className="text-5xl md:text-6xl mb-1 opacity-90" />
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">2700+</h3>
            <p className="text-sm md:text-base font-light opacity-90">Exhibition Stands</p>
          </div>

          {/* ITEM 4 - Avenues */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <FaBuilding className="text-5xl md:text-6xl mb-1 opacity-90" />
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">95+</h3>
            <p className="text-sm md:text-base font-light opacity-90">Avenues</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
