import React from "react";
import DonateButton from "../pages/DonateButton";

function Opportunity() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-10 mb-10 bg-blue-400/50 p-6 rounded-lg shadow-lg">
      {/* Left: Video Section */}
      <div className="flex items-center justify-center mt-15">
        {/* Responsive iframe wrapper */}
        <div className="w-full relative" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/L5OUDnsNjl4?si=ODxQKurY_F9qfSaY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Right: Content Section */}
      <div className="flex flex-col justify-center text-center md:text-left">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 mb-4">
          Once In A Life Time Opportunity
        </h1>
        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
          itaque, voluptate quisquam quibusdam atque sequi distinctio inventore
          necessitatibus quae incidunt officia ipsa, odio aut vel, iusto
          corporis natus nemo. Impedit!
        </p>
        <div className="mt-5">
          <DonateButton />
        </div>
      </div>
    </div>
  );
}

export default Opportunity;
