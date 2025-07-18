"use client";
import React from "react";
import {
  FaMicrosoft,
  FaCloud,
  FaCertificate,
  FaArrowRight,
  FaClock,
  FaUsers,
  FaStar,
  FaCheck,
} from "react-icons/fa6";
import Link from "next/link";

const courses = [
  {
    id: "sc-200",
    title: "SC-200: Security Operations Analyst",
    description:
      "Master threat detection, investigation, and response using Microsoft Sentinel and Defender.",
    icon: FaMicrosoft,
    color: "#2bb3a2",
    duration: "5 Days",
    level: "Intermediate",
    price: "£2,500",
    features: [
      "Microsoft Sentinel implementation",
      "Threat detection and response",
      "Security monitoring and alerting",
      "Incident investigation techniques",
      "Security automation workflows",
      "Real-world lab environments",
    ],
    outline: [
      "Module 1: Introduction to Microsoft Security",
      "Module 2: Azure Sentinel Fundamentals",
      "Module 3: Threat Detection Rules",
      "Module 4: Incident Response Procedures",
      "Module 5: Security Automation",
      "Module 6: Advanced Threat Hunting",
    ],
  },
  {
    id: "az-500",
    title: "AZ-500: Azure Security Engineer",
    description:
      "Architect, implement and harden cloud security controls across Azure workloads.",
    icon: FaCloud,
    color: "#ff8c2b",
    duration: "4 Days",
    level: "Advanced",
    price: "£2,800",
    features: [
      "Azure security architecture",
      "Identity and access management",
      "Network security implementation",
      "Data protection strategies",
      "Security monitoring and compliance",
      "Hands-on Azure labs",
    ],
    outline: [
      "Module 1: Azure Security Fundamentals",
      "Module 2: Identity and Access Management",
      "Module 3: Network Security",
      "Module 4: Data Protection",
      "Module 5: Security Monitoring",
      "Module 6: Compliance and Governance",
    ],
  },
  {
    id: "cissp",
    title: "CISSP: Info Security Professional",
    description:
      "Build deep expertise in security architecture, governance, risk and compliance.",
    icon: FaCertificate,
    color: "#29434e",
    duration: "6 Days",
    level: "Expert",
    price: "£3,200",
    features: [
      "Security architecture design",
      "Risk management frameworks",
      "Security governance",
      "Compliance and regulations",
      "Business continuity planning",
      "Professional certification prep",
    ],
    outline: [
      "Module 1: Security and Risk Management",
      "Module 2: Asset Security",
      "Module 3: Security Architecture",
      "Module 4: Communication Security",
      "Module 5: Identity Management",
      "Module 6: Security Assessment",
      "Module 7: Security Operations",
      "Module 8: Software Development Security",
    ],
  },
];

const CoursesPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2bb3a2] to-[#29434e] py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Training Options
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Choose the path that&apos;s right for you. Our cutting-edge
            cybersecurity training programs are designed to accelerate your
            career and equip you with real-world skills.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Course Header */}
                <div className="p-8 border-b border-gray-100">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: course.color }}
                  >
                    <course.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#29434e] mb-4">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{course.description}</p>

                  {/* Course Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <FaClock />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaUsers />
                      <span>{course.level}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaStar className="text-yellow-500" />
                      <span>4.9/5</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-3xl font-bold text-[#29434e] mb-6">
                    {course.price}
                  </div>
                </div>

                {/* Course Features */}
                <div className="p-8">
                  <h4 className="font-bold text-[#29434e] mb-4">
                    What You&apos;ll Learn:
                  </h4>
                  <ul className="space-y-3 mb-8">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <FaCheck className="text-[#2bb3a2] mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Course Outline */}
                  <div className="mb-8">
                    <h4 className="font-bold text-[#29434e] mb-4">
                      Course Outline:
                    </h4>
                    <div className="space-y-2">
                      {course.outline.map((module, index) => (
                        <div
                          key={index}
                          className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg"
                        >
                          {module}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={`/courses/${course.id}`}
                    className=" w-full bg-[#2bb3a2] hover:bg-[#29434e] text-white font-bold py-4 px-6 rounded-xl text-center transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    View Course Details
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="py-16 bg-gradient-to-r from-[#29434e] to-[#2bb3a2]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Cybersecurity Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join any course today and enjoy a 30% discount when you complete
              payment at least 10 days before your start date.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#ff8c2b] hover:bg-[#29434e] text-white font-bold py-4 px-8 rounded-xl transition-all">
                Reserve Your Seat
              </button>
              <button className="bg-white/20 border border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/30 transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
