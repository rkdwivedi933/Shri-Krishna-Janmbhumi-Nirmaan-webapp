import React from "react";
import { Carousel } from "flowbite-react";
import DonateButton from "../pages/DonateButton";
import certificate from '../assets/Certificate.jpg';
import donor_privileges from '../assets/Donor_privileges.webp';
import ngo from '../assets/verifiedNGO.webp';



function Privileges() {
 
  return (
    <div className="mt-10 mb-10">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 bg-white p-6 rounded-lg shadow-lg">
        
        {/* Left: Carousel */}
       {/* <TempleCarousel/> */}
       <div className="rounded-xl shadow-lg overflow-hidden">
         <Carousel slideInterval={3000} leftControl="‹" rightControl="›">
           {[certificate, donor_privileges, ngo].map((temple, index) => (
             <div
               key={index}
               className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[550px]"
             >
               <img
                 src={temple}
                 alt={`Temple ${index + 1}`}
                 className="w-full h-full object-contain"
               />
               {/* <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded">
                 {index === 0
                   ? "Shri Krishna Mandir"
                   : index === 1
                   ? "Mandir Nirmaan Seva"
                   : "Divine Temple"}
               </div> */}
             </div>
           ))}
         </Carousel>
       </div>
       

        {/* Right: Content Section */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 mb-4">
            Donor Privileges
          </h1>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Privileges for Contributors
            </h2>

            <ol className="list-decimal list-inside space-y-3 text-gray-700 text-base md:text-lg">
              <li>
                On Donation of 1 Square Feet or above, you will receive Maha Prasadam
                from Gupt Vrindavan Dham.
              </li>
              <li>Sankalp and Aarti will be performed on your name.</li>
              <li>Receive a special gift of Spiritual Books.</li>
              <li>Get 80G Tax Benefits on your donation.</li>
              <li>Digital Certificate of Your Contribution.</li>
              <li>
                You will receive Narasimha Kavach Sutra for Protection from all dangers.
              </li>
              <li>Special Narasimha Yagna Tilak.</li>
            </ol>
          </div>

          <div className="mt-5">
            <DonateButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privileges;
