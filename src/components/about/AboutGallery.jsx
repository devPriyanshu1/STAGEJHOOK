import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const AboutGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/images/gallery/sketch-booth.jpg",
    "/images/gallery/exhibition-hall.jpg",
    "/images/gallery/booth-design-1.jpg",
    "/images/gallery/booth-design-2.jpg",
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Text Content */}
        <div className="mb-12">
          <p className="text-gray-700 leading-relaxed mb-4">
            We've been delivering standout experiences in exhibition stall design, custom booth fabrication and event management since 2016. Whether you're launching a new product, hosting a corporate event, or showcasing at a global expo, we bring precision and passion to every project.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Our expertise spans across <span className="font-semibold">Exhibition Stall Design & Fabrication, Graphic Design, Event Management, Digital Marketing, and Web Development</span>. We don't just deliver services—we craft brand stories. From the initial design to fabrication, logistics, on-site setup, and post-event support, we manage every detail so you can focus on connecting with your audience. Our team works closely with you, ensuring a seamless experience with clear communication and reliable execution at every stage.
          </p>
        </div>

        {/* Image Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-lg shadow-xl">
            <img 
              src={images[currentIndex]} 
              alt={`Gallery ${currentIndex + 1}`}
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
            aria-label="Previous Image"
          >
            <FaChevronLeft className="text-[#C41E3A] text-xl" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
            aria-label="Next Image"
          >
            <FaChevronRight className="text-[#C41E3A] text-xl" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? "bg-[#C41E3A] w-8" 
                    : "bg-gray-400 hover:bg-gray-500"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutGallery;
