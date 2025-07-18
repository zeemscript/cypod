import React from "react";
import Link from "next/link";
import {
  FaMicrosoft,
  FaCertificate,
  FaCloud,
  FaArrowRight,
} from "react-icons/fa6";
const TrainingOptions = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#2bb3a2] to-[#29434e]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Training Options
          </h2>
          <p className="text-xl text-white/90">
            Choose the path that&apos;s right for you. Click any course to learn
            more:
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-[#2bb3a2] rounded-full flex items-center justify-center mb-6">
              <FaMicrosoft className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-[#29434e] mb-4">
              SC-200: Security Operations Analyst
            </h3>
            <p className="text-gray-600 mb-6">
              Master threat detection, investigation, and response using
              Microsoft Sentinel and Defender.
            </p>
            <Link
              href="/courses/sc-200"
              className="inline-flex items-center text-[#2bb3a2] font-semibold hover:text-[#29434e] transition-colors"
            >
              SC-200 Course Details <FaArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-[#ff8c2b] rounded-full flex items-center justify-center mb-6">
              <FaCloud className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-[#29434e] mb-4">
              AZ-500: Azure Security Engineer
            </h3>
            <p className="text-gray-600 mb-6">
              Architect, implement and harden cloud security controls across
              Azure workloads.
            </p>
            <Link
              href="/courses/az-500"
              className="inline-flex items-center text-[#ff8c2b] font-semibold hover:text-[#29434e] transition-colors"
            >
              AZ-500 Course Details <FaArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-[#29434e] rounded-full flex items-center justify-center mb-6">
              <FaCertificate className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-[#29434e] mb-4">
              CISSP: Info Security Professional
            </h3>
            <p className="text-gray-600 mb-6">
              Build deep expertise in security architecture, governance, risk
              and compliance.
            </p>
            <Link
              href="/courses/cissp"
              className="inline-flex items-center text-[#29434e] font-semibold hover:text-[#2bb3a2] transition-colors"
            >
              CISSP Course Details <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingOptions;
