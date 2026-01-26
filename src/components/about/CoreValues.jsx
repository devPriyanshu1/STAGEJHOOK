const CoreValues = () => {
  const values = [
    {
      title: "Creativity & Innovation",
      image: "/images/values/creativity.jpg",
    },
    {
      title: "Collaboration & Transparency",
      image: "/images/values/collaboration.jpg",
    },
    {
      title: "Passion for Impact",
      image: "/images/values/passion.jpg",
    },
    {
      title: "Integrity & Accountability",
      image: "/images/values/integrity.jpg",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg h-64 cursor-pointer"
            >
              {/* Background Image */}
              <img 
                src={value.image} 
                alt={value.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-bold leading-tight">
                  {value.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoreValues;
