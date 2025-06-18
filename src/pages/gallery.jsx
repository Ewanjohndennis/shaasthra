import React, { useState } from "react";

import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';

const images = [img1, img2, img3];
const Gallery = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-8 py-20 bg-[#4d208d] text-center">
      <h2 className="text-center text-[#dfaa05] text-3xl font-bold mb-6" style={{ fontSize:'30xz' }}>Gallery</h2>
      <div className="relative overflow-hidden rounded-2xl shadow-lg">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-80 object-cover transition-all duration-700"
        />
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white/90 text-black px-3 py-1 rounded-full shadow-md"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white/90 text-black px-3 py-1 rounded-full shadow-md"
        >
          ❯
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full ${
              index === current ? "bg-blue-600" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
