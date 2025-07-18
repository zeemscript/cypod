"use client";
import React from "react";
import {
  FaCloud,
  FaArrowRight,
  FaClock,
  FaUsers,
  FaStar,
  FaCheck,
  FaShield,
  FaLaptop,
  FaCertificate,
  FaEnvelope,
} from "react-icons/fa6";
import Link from "next/link";

const AZ500Page = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#ff8c2b] to-[#29434e] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCloud className="text-white text-3xl" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              AZ-500: Azure Security Engineer
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Architect, implement and harden cloud security controls across
              Azure workloads.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <FaClock />
                <span>4 Days</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUsers />
                <span>Advanced Level</span>
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
                  The AZ-500 Azure Security Engineer course is designed for
                  security professionals who want to specialize in Microsoft
                  Azure security. You&apos;ll learn to implement security
                  controls, manage identity and access, and protect data,
                  applications, and networks in cloud and hybrid environments.
                </p>

                <h3 className="text-2xl font-bold text-[#29434e] mb-4">
                  What You&apos;ll Learn
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start gap-3">
                    <FaCheck className="text-[#ff8c2b] mt-1 flex-shrink-0" />
                    <span className="text-gray-600">
                      Azure security architecture design
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheck className="text-[#ff8c2b] mt-1 flex-shrink-0" />
                    <span className="text-gray-600">
                      Identity and access management
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheck className="text-[#ff8c2b] mt-1 flex-shrink-0" />
                    <span className="text-gray-600">
                      Network security implementation
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheck className="text-[#ff8c2b] mt-1 flex-shrink-0" />
                    <span className="text-gray-600">
                      Data protection strategies
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheck className="text-[#ff8c2b] mt-1 flex-shrink-0" />
                    <span className="text-gray-600">
                      Security monitoring and compliance
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheck className="text-[#ff8c2b] mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Hands-on Azure labs</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-[#29434e] mb-4">
                  Course Outline
                </h3>
                <div className="space-y-4 mb-8">
                  {[
                    "Module 1: Azure Security Fundamentals",
                    "Module 2: Identity and Access Management",
                    "Module 3: Network Security",
                    "Module 4: Data Protection",
                    "Module 5: Security Monitoring",
                    "Module 6: Compliance and Governance",
                  ].map((module, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#ff8c2b]"
                    >
                      <h4 className="font-semibold text-[#29434e]">{module}</h4>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-[#29434e] mb-4">
                  Prerequisites
                </h3>
                <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
                  <li>Strong understanding of Azure fundamentals</li>
                  <li>Experience with security concepts and practices</li>
                  <li>Familiarity with networking and virtualization</li>
                  <li>Basic knowledge of PowerShell and Azure CLI</li>
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
                      <span className="font-semibold">4 Days</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Level:</span>
                      <span className="font-semibold">Advanced</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Format:</span>
                      <span className="font-semibold">Live Online</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Labs:</span>
                      <span className="font-semibold">Included</span>
                    </div>
                  </div>

                  <div className="text-center mb-8">
                    <div className="text-4xl font-bold text-[#29434e] mb-2">
                      £2,800
                    </div>
                    <div className="text-sm text-gray-500">
                      30% discount available for early payment
                    </div>
                  </div>

                  <button className="w-full bg-[#ff8c2b] hover:bg-[#29434e] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 mb-4">
                    <FaEnvelope />
                    Enroll Now
                  </button>

                  <button className="w-full bg-white border-2 border-[#ff8c2b] text-[#ff8c2b] font-bold py-4 px-6 rounded-xl hover:bg-[#ff8c2b] hover:text-white transition-all duration-300">
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You&apos;ll Get */}
      <section className="py-16 bg-gradient-to-r from-[#29434e] to-[#ff8c2b]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-12">
              What You&apos;ll Get
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaLaptop className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Azure Labs
                </h3>
                <p className="text-white/90">
                  Real Azure environment access for hands-on practice
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCertificate className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Certification Prep
                </h3>
                <p className="text-white/90">
                  Preparation for Microsoft AZ-500 certification exam
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaShield className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Security Expertise
                </h3>
                <p className="text-white/90">
                  Advanced cloud security skills and best practices
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
              Ready to Become an Azure Security Expert?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join our AZ-500 course and master Azure security engineering.
              Limited seats available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#ff8c2b] hover:bg-[#29434e] text-white font-bold py-4 px-8 rounded-xl transition-all">
                Reserve Your Seat
              </button>
              <Link
                href="/courses"
                className="bg-white border-2 border-[#ff8c2b] text-[#ff8c2b] font-bold py-4 px-8 rounded-xl hover:bg-[#ff8c2b] hover:text-white transition-all"
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

export default AZ500Page;
