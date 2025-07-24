import React from "react";
import {
  FaArrowRight,
  FaShield,
  FaGraduationCap,
  FaUsers,
} from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 overflow-hidden">
      {/* Main content container */}
      <div className="relative z-10 w-full max-w-8xl mx-auto px-2 sm:px-6 lg:px-8 py-8 md:py-16 flex items-center justify-center mt-16 sm:mt-0">
        <div className="grid  gap-12 lg:gap-16 items-center w-full">
          {/* Left content */}
          <div className="text-center  space-y-8 flex flex-col items-center justify-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#2bb3a2]/20 rounded-full px-4 py-2 text-sm font-medium text-[#2bb3a2] shadow-sm">
              <FaShield className="w-4 h-4" />
              Trusted by 1000+ Professionals
            </div>
            {/* Main headline */}
            <div className="flex flex-col items-center space-y-6">
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-tight">
                <span className="text-[#29434e]">Expert Cybersecurity</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2bb3a2] to-[#ff8c2b]">
                  Training & Advisory
                </span>
              </h1>
              <p className="text-lg sm:text-2xl lg:text-2xl text-[#29434e]/70 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Accelerate your cybersecurity career with hands-on training
                designed for individuals and teams.
              </p>
            </div>
            {/* Features */}
            {/* <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-3 text-[#29434e]/80">
                <div className="w-8 h-8 bg-[#2bb3a2]/10 rounded-lg flex items-center justify-center">
                  <FaGraduationCap className="w-4 h-4 text-[#2bb3a2]" />
                </div>
                <span className="text-sm font-medium">Certified Training</span>
              </div>
              <div className="flex items-center gap-3 text-[#29434e]/80">
                <div className="w-8 h-8 bg-[#ff8c2b]/10 rounded-lg flex items-center justify-center">
                  <FaUsers className="w-4 h-4 text-[#ff8c2b]" />
                </div>
                <span className="text-sm font-medium">Team Solutions</span>
              </div>
            </div> */}
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center  w-full">
              <button className="group bg-gradient-to-r from-[#2bb3a2] to-[#2bb3a2]/90 hover:from-[#ff8c2b] hover:to-[#ff8c2b]/90 text-white font-semibold py-4 px-8 rounded-xl shadow-lg shadow-[#2bb3a2]/25 hover:shadow-xl hover:shadow-[#ff8c2b]/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3 justify-center w-full sm:w-auto">
                <span>Explore Training Options</span>
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="grouptext-[#29434e] font-semibold py-4 px-8 rounded-xl border border-[#ff8c2b] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto">
                View Course Catalog
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
