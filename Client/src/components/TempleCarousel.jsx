import { Carousel } from "flowbite-react";
import temple1 from '../assets/temple1.jpg';
import temple2 from '../assets/temple2.jpg';
import temple3 from '../assets/temple3.jpg';

function TempleCarousel() {  
  return (
   <div className="rounded-xl shadow-lg overflow-hidden">
  <Carousel slideInterval={3000} leftControl="‹" rightControl="›">
    {[temple1, temple2, temple3].map((temple, index) => (
      <div
        key={index}
        className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[550px]"
      >
        <img
          src={temple}
          alt={`Temple ${index + 1}`}
          className="w-full h-full object-contain"
        />
        <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded">
          {index === 0
            ? "Shri Krishna Mandir"
            : index === 1
            ? "Mandir Nirmaan Seva"
            : "Divine Temple"}
        </div>
      </div>
    ))}
  </Carousel>
</div>

  );
}

export default TempleCarousel;
