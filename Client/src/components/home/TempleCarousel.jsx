import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TempleCarousel() {
  const [current, setCurrent] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1524443169398-9aa1ceab67d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVtcGxlfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1697729536647-4e23a32dd324?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVtcGxlfGVufDB8fDB8fHww",
    "https://media.istockphoto.com/id/1029765384/photo/the-shree-jagannath-temple-at-puri-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=nHQsfm6R1_DZf5NIN_5xIPdpIy2v0KL4jbndamsayhE=",
  ];

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
 <div className="relative w-full h-screen  overflow-hidden group pt-[80px] md:pt-[96px]">



      {/* Slides */}
      {images.map((img, index) => (
       <img
  key={index}
  src={img}
  alt="Temple"
  className={`absolute inset-0 h-full w-[115%] left-1/2 -translate-x-1/2 object-cover object-center transition-all duration-700 ${
    index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
  }`}
/>

      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        <ChevronLeft size={30} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        <ChevronRight size={30} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`rounded-full transition-all ${
              current === index
                ? "w-10 h-2 bg-white"
                : "w-3 h-3 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
