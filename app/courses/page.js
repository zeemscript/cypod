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
            Choose the path that&apos;s right for you. Our cybersecurity
            training programs are designed to accelerate your career and equip
            you with real-world skills.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section id="courses" className="py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl shadow border border-[#e0e7ef] flex flex-col h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 p-6 border-b border-[#e0e7ef]">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center shadow"
                    style={{ backgroundColor: course.color }}
                  >
                    <course.icon className="text-white text-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#29434e] mb-1">
                      {course.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-xs text-[#29434e]/60">
                      {course.id === "sc-200" && (
                        <span className="flex items-center gap-1">
                          <FaClock />8 weeks (Sat, 4pm–8pm)
                        </span>
                      )}
                      {course.id === "az-500" && (
                        <span className="flex items-center gap-1">
                          <FaClock />4 Days (Launching soon)
                        </span>
                      )}
                      {course.id === "cissp" && (
                        <span className="flex items-center gap-1">
                          <FaClock />2 months (Sun, 4pm–7pm)
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <FaUsers />
                        {course.level}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaStar className="text-yellow-500" />
                        4.9/5
                      </span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-[#ff8c2b] ml-2">
                    {course.price}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-[#29434e]/80 mb-4 text-sm font-medium">
                    {course.description}
                  </p>
                  <h4 className="font-bold text-[#29434e] mb-2 text-sm">
                    What You&apos;ll Learn:
                  </h4>
                  <ul className="space-y-1 mb-4">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <FaCheck className="text-[#2bb3a2] mt-1 flex-shrink-0" />
                        <span className="text-[#29434e]/80 text-xs">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <h4 className="font-bold text-[#29434e] mb-2 text-sm">
                    Course Outline:
                  </h4>
                  <div className="space-y-1 mb-4">
                    {course.outline.map((module, index) => (
                      <div
                        key={index}
                        className="text-xs text-[#29434e]/70 bg-[#f8fafc] p-2 rounded"
                      >
                        {module}
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/courses/${course.id}`}
                    className="w-full bg-[#2bb3a2] hover:bg-[#29434e] text-white font-bold py-2 px-4 rounded-lg text-center transition-all duration-300 flex items-center justify-center gap-2 shadow mt-auto"
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
              Join any course today and enjoy a{" "}
              <span className="font-bold text-[#ff8c2b]">30% discount</span>{" "}
              when you complete payment at least 10 days before your start date.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#courses"
                className="bg-[#ff8c2b] hover:bg-[#2bb3a2] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-2 text-lg border border-[#ff8c2b]"
              >
                Reserve Your Seat <FaArrowRight />
              </Link>
              <a
                href="mailto:hello@cypodadvisory.com"
                className="bg-white border border-[#2bb3a2] text-[#2bb3a2] font-semibold py-4 px-8 rounded-xl hover:bg-[#2bb3a2] hover:text-white transition-all flex items-center gap-2 text-lg"
              >
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
