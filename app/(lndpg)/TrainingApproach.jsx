import React from "react";
import { FaShield, FaUsers, FaBullseye } from "react-icons/fa6";
const TrainingApproach = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated Gradient Background */}
      <div
        className="absolute inset-0 z-0 animate-gradient bg-gradient-to-br from-[#2bb3a2]/30 via-[#29434e]/30 to-[#ff8c2b]/30 bg-[length:200%_200%]"
        style={{ filter: "blur(2px)", opacity: 0.7 }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-extrabold text-center text-[#29434e] mb-4 tracking-tight relative inline-block">
          Our Training Approach
          <span className="block h-1 w-24 bg-gradient-to-r from-[#2bb3a2] to-[#ff8c2b] rounded-full mx-auto mt-4" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-12">
          {/* Card 1 */}
          <div className="text-center p-10 rounded-3xl bg-white/30 backdrop-blur-lg shadow-2xl border border-[#2bb3a2]/30 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(43,179,162,0.25)] hover:border-[#2bb3a2]">
            <div className="w-20 h-20 bg-[#2bb3a2] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg ring-4 ring-[#2bb3a2]/30">
              <FaShield className="text-white text-4xl drop-shadow-lg" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#29434e] mb-4">
              Highly Practical
            </h3>
            <p className="text-lg text-gray-700 font-medium">
              All programs focus on real-world labs and simulations so you can
              immediately apply techniques in your own environment.
            </p>
          </div>
          {/* Card 2 */}
          <div className="text-center p-10 rounded-3xl bg-white/30 backdrop-blur-lg shadow-2xl border border-[#ff8c2b]/30 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(255,140,43,0.18)] hover:border-[#ff8c2b]">
            <div className="w-20 h-20 bg-[#ff8c2b] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg ring-4 ring-[#ff8c2b]/30">
              <FaUsers className="text-white text-4xl drop-shadow-lg" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#29434e] mb-4">
              Interactive Learning
            </h3>
            <p className="text-lg text-gray-700 font-medium">
              Engage with live case studies, guided exercises, and collaborative
              workshops—no passive slide decks.
            </p>
          </div>
          {/* Card 3 */}
          <div className="text-center p-10 rounded-3xl bg-white/30 backdrop-blur-lg shadow-2xl border border-[#29434e]/30 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(41,67,78,0.18)] hover:border-[#29434e]">
            <div className="w-20 h-20 bg-[#29434e] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg ring-4 ring-[#29434e]/30">
              <FaBullseye className="text-white text-4xl drop-shadow-lg" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#29434e] mb-4">
              Outcome Focused
            </h3>
            <p className="text-lg text-gray-700 font-medium">
              Every module is designed around measurable outcomes: build
              detection rules, remediate vulnerabilities, or deploy secure
              architectures.
            </p>
          </div>
        </div>
      </div>
      {/* Custom Animations */}
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default TrainingApproach;
