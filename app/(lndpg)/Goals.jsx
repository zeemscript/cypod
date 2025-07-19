import React from "react";

const Goals = () => {
  return (
    <section
      className="relative flex items-center justify-center min-h-[500px] py-24"
      style={{
        backgroundImage: "url('/img_6.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for readability */}
      <div className=""></div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
        <h2 className="text-6xl md:text-7xl font-extrabold text-white mb-6 text-center tracking-tight drop-shadow-lg">
          Our Goal
        </h2>
        
        <p className="text-2xl md:text-3xl text-white leading-relaxed text-center font-medium drop-shadow">
          At <span className="font-bold text-white">CYPODadvisory</span>, we
          deliver bespoke cybersecurity training and advisory services to
          empower individuals and teams with the skills and confidence needed to
          defend against modern cyber threats.
        </p>
      </div>
    </section>
  );
};

export default Goals;
