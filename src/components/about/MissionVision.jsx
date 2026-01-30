const MissionVision = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1400px] mx-auto px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-20 items-start">
          
          {/* LEFT: Mission Text */}
          <div className="pt-8">
            <h2 className="text-[2.75rem] font-bold text-[#E63946] mb-10 tracking-normal leading-tight">
              MISSION AND GOALS
            </h2>
            <p className="text-gray-700 leading-[1.85] text-[1.05rem]">
              Our mission is to empower brands by delivering innovative and impactful design, digital, and experiential solutions. We strive to be a one-stop creative hub that transforms ideas into memorable experiences—through stunning exhibition stalls, compelling graphic design, seamless event execution, cutting-edge digital marketing, and high-performance web development. Our goal is to exceed client expectations, build long-term partnerships, and drive measurable success for every brand we work with.
            </p>
          </div>

          {/* RIGHT: Goals Tree Diagram */}
          <div className="flex justify-end">
            <img 
              src="/mission-goals-diagram.png" 
              alt="Mission and Goals Diagram" 
              className="w-full max-w-[580px] h-auto"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default MissionVision;
