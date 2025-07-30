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
    price: "£800",
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
    price: "£800",
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
    price: "£800",
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
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero Section */}
      <section className="py-16 border-b border-[#e0e7ef] bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-[#29434e] mb-6">
            Training Options
          </h1>
          <p className="text-xl text-[#29434e]/80 max-w-3xl mx-auto font-light mb-4">
            Choose the path that&apos;s right for you. Our cybersecurity training programs are designed to accelerate your career and equip you with real-world skills.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section id="courses" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl shadow-md border border-[#e0e7ef] overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative group flex flex-col"
              >
                {/* Badge */}
                <span className="absolute top-6 right-6 bg-[#f8fafc] text-[#2bb3a2] font-bold px-4 py-1 rounded-full text-xs uppercase tracking-wider border border-[#e0e7ef]">
                  {course.level}
                </span>
                {/* Course Header */}
                <div className="p-8 border-b border-[#e0e7ef] flex-1 flex flex-col">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow"
                    style={{ backgroundColor: course.color }}
                  >
                    <course.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#29434e] mb-3">
                    {course.title}
                  </h3>
                  <p className="text-base text-[#29434e]/80 mb-6 font-medium">
                    {course.description}
                  </p>
                  {/* Course Meta */}
                  <div className="flex flex-col gap-2 text-xs text-[#29434e]/60 mb-6">
                    {/* Duration and Schedule */}
                    {course.id === "sc-200" && (
                      <div className="flex items-center gap-2">
                        <FaClock />
                        <span>8 weeks (Saturdays, 4pm–8pm)</span>
                      </div>
                    )}
                    {course.id === "az-500" && (
                      <div className="flex items-center gap-2">
                        <FaClock />
                        <span>4 Days (Launching soon)</span>
                      </div>
                    )}
                    {course.id === "cissp" && (
                      <div className="flex items-center gap-2">
                        <FaClock />
                        <span>2 months (Sundays, 4pm–7pm)</span>
                      </div>
                    )}
                    {/* Level */}
                    <div className="flex items-center gap-2">
                      <FaUsers />
                      <span>{course.level}</span>
                    </div>
                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <FaStar className="text-yellow-500" />
                      <span>4.9/5</span>
                    </div>
                  </div>
                  {/* Price */}
                  <div className="text-3xl font-bold text-[#ff8c2b] mb-2">
                    {course.price}
                  </div>
                </div>
                {/* Course Features */}
                <div className="p-8 flex-1 flex flex-col">
                  <h4 className="font-bold text-[#29434e] mb-4 text-base">
                    What You&apos;ll Learn:
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <FaCheck className="text-[#2bb3a2] mt-1 flex-shrink-0" />
                        <span className="text-[#29434e]/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {/* Course Outline */}
                  <div className="mb-6">
                    <h4 className="font-bold text-[#29434e] mb-2 text-base">
                      Course Outline:
                    </h4>
                    <div className="space-y-1">
                      {course.outline.map((module, index) => (
                        <div
                          key={index}
                          className="text-xs text-[#29434e]/70 bg-[#f8fafc] p-2 rounded"
                        >
                          {module}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* CTA Button */}
                  <Link
                    href={`/courses/${course.id}`}
                    className="w-full bg-[#2bb3a2] hover:bg-[#29434e] text-white font-bold py-3 px-5 rounded-xl text-center transition-all duration-300 flex items-center justify-center gap-2 shadow mt-auto"
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
      <section className="py-16 border-t border-[#e0e7ef] bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#29434e] mb-6">
              Ready to Start Your Cybersecurity Journey?
            </h2>
            <p className="text-xl text-[#29434e]/80 mb-8 font-light">
              Join any course today and enjoy a <span className="font-bold text-[#ff8c2b]">30% discount</span> when you complete payment at least 10 days before your start date.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#courses" className="bg-[#ff8c2b] hover:bg-[#2bb3a2] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-2 text-lg border border-[#ff8c2b]">
                Reserve Your Seat <FaArrowRight />
              </Link>
              <a href="mailto:hello@cypodadvisory.com" className="bg-white border border-[#2bb3a2] text-[#2bb3a2] font-semibold py-4 px-8 rounded-xl hover:bg-[#2bb3a2] hover:text-white transition-all flex items-center gap-2 text-lg">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
