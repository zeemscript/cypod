import React from 'react'
import {
  FaShield,
  FaUsers,
  FaBullseye,
} from "react-icons/fa6";
const TrainingApproach = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#29434e] mb-12">
          Our Training Approach
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#2bb3a2]/10 to-[#29434e]/10 border border-[#2bb3a2]/20">
            <div className="w-16 h-16 bg-[#2bb3a2] rounded-full flex items-center justify-center mx-auto mb-6">
              <FaShield className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-[#29434e] mb-4">
              Highly Practical
            </h3>
            <p className="text-gray-600">
              All programs focus on real-world labs and simulations so you can
              immediately apply techniques in your own environment.
            </p>
          </div>
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#ff8c2b]/10 to-[#2bb3a2]/10 border border-[#ff8c2b]/20">
            <div className="w-16 h-16 bg-[#ff8c2b] rounded-full flex items-center justify-center mx-auto mb-6">
              <FaUsers className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-[#29434e] mb-4">
              Interactive Learning
            </h3>
            <p className="text-gray-600">
              Engage with live case studies, guided exercises, and collaborative
              workshops—no passive slide decks.
            </p>
          </div>
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#29434e]/10 to-[#ff8c2b]/10 border border-[#29434e]/20">
            <div className="w-16 h-16 bg-[#29434e] rounded-full flex items-center justify-center mx-auto mb-6">
              <FaBullseye className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-[#29434e] mb-4">
              Outcome Focused
            </h3>
            <p className="text-gray-600">
              Every module is designed around measurable outcomes: build
              detection rules, remediate vulnerabilities, or deploy secure
              architectures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrainingApproach
