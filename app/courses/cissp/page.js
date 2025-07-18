"use client";
import React from "react";
import {
  FaCertificate,
  FaArrowRight,
  FaClock,
  FaUsers,
  FaStar,
  FaCheck,
  FaShield,
  FaLaptop,
  FaUser,
  FaEnvelope,
} from "react-icons/fa6";
import Link from "next/link";

const CISSPPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#29434e] to-[#2bb3a2] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCertificate className="text-white text-3xl" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              CISSP: Info Security Professional
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Build deep expertise in security architecture, governance, risk
              and compliance.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <FaClock />
                <span>6 Days</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUsers />
                <span>Expert Level</span>
              </div>
              <div className="flex items-center gap-2">
                <FaStar />
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-[#29434e] mb-6">
                  Course Overview
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  The CISSP (Certified Information Systems Security
                  Professional) course is the gold standard for information
                  security professionals. This comprehensive program covers all
                  eight domains of the CISSP Common Body of Knowledge (CBK),
                  preparing you for one of the most prestigious certifications
                  in cybersecurity.
                </p>

                <h3 className="text-2xl font-bold text-[#29434e] mb-4">
                  What You&apos;ll Learn
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start gap-3">
                    <FaCheck className="text-[#29434e] mt-1 flex-shrink-0" />
                    <span className="text-gray-600">
                      Security architecture design principles
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheck className="text-[#29434e] mt-1 flex-shrink-0" />
                    <span className="text-gray-600">
                      Risk management frameworks
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheck className="text-[#29434e] mt-1 flex-shrink-0" />
                    <span className="text-gray-600">
                      Security governance and compliance
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheck className="text-[#29434e] mt-1 flex-shrink-0" />
                    <span className="text-gray-600">
                      Business continuity planning
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheck className="text-[#29434e] mt-1 flex-shrink-0" />
                    <span className="text-gray-600">
                      Professional certification preparation
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheck className="text-[#29434e] mt-1 flex-shrink-0" />
                    <span className="text-gray-600">
                      Real-world case studies
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-[#29434e] mb-4">
                  Course Outline
                </h3>
                <div className="space-y-4 mb-8">
                  {[
                    "Module 1: Security and Risk Management",
                    "Module 2: Asset Security",
                    "Module 3: Security Architecture",
                    "Module 4: Communication Security",
                    "Module 5: Identity Management",
                    "Module 6: Security Assessment",
                    "Module 7: Security Operations",
                    "Module 8: Software Development Security",
                  ].map((module, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#29434e]"
                    >
                      <h4 className="font-semibold text-[#29434e]">{module}</h4>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-[#29434e] mb-4">
                  Prerequisites
                </h3>
                <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
                  <li>
                    Minimum 5 years of cumulative, paid work experience in two
                    or more of the eight CISSP domains
                  </li>
                  <li>Strong understanding of information security concepts</li>
                  <li>
                    Experience in security architecture or security management
                  </li>
                  <li>
                    Familiarity with risk management and compliance frameworks
                  </li>
                </ul>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sticky top-24">
                  <h3 className="text-2xl font-bold text-[#29434e] mb-6">
                    Course Details
                  </h3>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold">6 Days</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Level:</span>
                      <span className="font-semibold">Expert</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Format:</span>
                      <span className="font-semibold">Live Online</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Exam Prep:</span>
                      <span className="font-semibold">Included</span>
                    </div>
                  </div>

                  <div className="text-center mb-8">
                    <div className="text-4xl font-bold text-[#29434e] mb-2">
                      £3,200
                    </div>
                    <div className="text-sm text-gray-500">
                      30% discount available for early payment
                    </div>
                  </div>

                  <button className="w-full bg-[#29434e] hover:bg-[#2bb3a2] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 mb-4">
                    <FaEnvelope />
                    Enroll Now
                  </button>

                  <button className="w-full bg-white border-2 border-[#29434e] text-[#29434e] font-bold py-4 px-6 rounded-xl hover:bg-[#29434e] hover:text-white transition-all duration-300">
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You&apos;ll Get */}
      <section className="py-16 bg-gradient-to-r from-[#2bb3a2] to-[#29434e]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-12">
              What You&apos;ll Get
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUser className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Expert Knowledge
                </h3>
                <p className="text-white/90">
                  Comprehensive coverage of all CISSP domains
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCertificate className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Exam Preparation
                </h3>
                <p className="text-white/90">
                  Practice tests and exam strategies included
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaShield className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Professional Recognition
                </h3>
                <p className="text-white/90">
                  Industry-recognized certification preparation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#29434e] mb-6">
              Ready to Achieve CISSP Certification?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join our CISSP course and become a certified information security
              professional. Limited seats available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#29434e] hover:bg-[#2bb3a2] text-white font-bold py-4 px-8 rounded-xl transition-all">
                Reserve Your Seat
              </button>
              <Link
                href="/courses"
                className="bg-white border-2 border-[#29434e] text-[#29434e] font-bold py-4 px-8 rounded-xl hover:bg-[#29434e] hover:text-white transition-all"
              >
                View All Courses
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CISSPPage;
