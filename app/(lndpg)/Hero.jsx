import React from "react";
import { FaArrowRight, FaPlay } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center bg-gradient-to-tr from-[#e6f2ef] via-[#2bb3a2]/20 to-[#29434e]/80 overflow-hidden">
      {/* Illustration (right) */}
      <div className=" md:block absolute right-0 top-0 h-full w-1/2 flex items-center justify-center z-10 pointer-events-none">
        {/* Abstract shield/lock SVG */}
        <svg
          width="380"
          height="380"
          viewBox="0 0 380 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-2xl"
        >
          <ellipse
            cx="190"
            cy="190"
            rx="180"
            ry="180"
            fill="#2bb3a2"
            fillOpacity="0.12"
          />
          <ellipse
            cx="190"
            cy="190"
            rx="120"
            ry="120"
            fill="#ff8c2b"
            fillOpacity="0.10"
          />
          <path
            d="M190 90C230 90 270 120 270 170C270 220 230 250 190 250C150 250 110 220 110 170C110 120 150 90 190 90Z"
            fill="#29434e"
            fillOpacity="0.18"
          />
          <rect
            x="150"
            y="150"
            width="80"
            height="80"
            rx="40"
            fill="#fff"
            fillOpacity="0.12"
          />
          <rect
            x="170"
            y="170"
            width="40"
            height="40"
            rx="20"
            fill="#2bb3a2"
            fillOpacity="0.18"
          />
        </svg>
      </div>
      {/* Content (left) */}
      <div className="relative z-20 flex flex-col justify-center h-full w-full max-w-5xl mx-auto px-6">
        <div className="max-w-xl pt-24 pb-16 md:pt-0 md:pb-0">
      
          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#29434e] mb-6 leading-tight">
            <span className="block">Expert</span>
            <span className="text-[#ff8c2b]">Cybersecurity Training</span>
            <span className="block text-[#2bb3a2] font-bold">
              & Advisory Service
            </span>
          </h1>
          {/* Subheading */}
          <p className="text-lg sm:text-2xl text-[#29434e]/80 mb-8 font-light max-w-lg">
            Hands-on, career-accelerating courses for individuals and teams.
            <br />
            <span className="font-semibold text-[#ff8c2b]">
              Master Microsoft’s SIEM, XDR & SOAR tools in just 8 weeks.
            </span>
          </p>
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#2bb3a2] hover:bg-[#ff8c2b] text-white font-bold py-3 px-8 rounded-xl shadow-lg text-lg flex items-center gap-2 transition-all w-fit">
              <FaArrowRight /> See Training Options
            </button>
            <button className="bg-white border border-[#2bb3a2] text-[#2bb3a2] font-semibold py-3 px-8 rounded-xl text-lg flex items-center gap-2 hover:bg-[#2bb3a2] hover:text-white transition-all w-fit">
              <FaPlay /> Watch Intro Video
            </button>
          </div>
        </div>
      </div>
      {/* On mobile, show illustration below */}
      <div className="md:hidden flex justify-center mt-8 z-10">
        <svg
          width="220"
          height="220"
          viewBox="0 0 380 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-2xl"
        >
          <ellipse
            cx="190"
            cy="190"
            rx="180"
            ry="180"
            fill="#2bb3a2"
            fillOpacity="0.12"
          />
          <ellipse
            cx="190"
            cy="190"
            rx="120"
            ry="120"
            fill="#ff8c2b"
            fillOpacity="0.10"
          />
          <path
            d="M190 90C230 90 270 120 270 170C270 220 230 250 190 250C150 250 110 220 110 170C110 120 150 90 190 90Z"
            fill="#29434e"
            fillOpacity="0.18"
          />
          <rect
            x="150"
            y="150"
            width="80"
            height="80"
            rx="40"
            fill="#fff"
            fillOpacity="0.12"
          />
          <rect
            x="170"
            y="170"
            width="40"
            height="40"
            rx="20"
            fill="#2bb3a2"
            fillOpacity="0.18"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
