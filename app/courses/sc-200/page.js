"use client";
import React from "react";
import {
  FaMicrosoft,
  FaArrowRight,
  FaClock,
  FaUsers,
  FaStar,
  FaCheck,
  FaShield,
  FaLaptop,
  FaCertificate,
  FaEnvelope,
  FaDownload,
  FaLinkedin,
  FaGlobe,
  FaCalendar,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaRocket,
  FaHandshake,
  FaQuestion,
  FaChevronDown,
} from "react-icons/fa6";
import Link from "next/link";

const SC200Page = () => {
  return (
    <div className="min-h-screen pt-18">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2bb3a2] via-[#29434e] to-[#ff8c2] relative overflow-hidden py-14">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className=" sm:mx-auto text-center">
            <div className="w-24 h-24 bg-[#ff8c2b] rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
              <FaMicrosoft className="text-white text-4xl" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Microsoft Certified
              <br />
              <span className="text-white">Security Operations Analyst</span>
              <br />
              <span className="text-3xl md:text-4xl">(SC-200)</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-8 font-light">
              Accelerate your cyber-security career with live, hands-on
              training.
            </p>
            <p className="text-xl text-white/80 mb-12 max-w-4xl mx-auto">
              Master Microsoft&apos;s industry-leading SIEM, XDR & SOAR tools in
              just 8 weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/enroll/sc-200"
                className="bg-[#ff8c2] hover:bg-[#29434e] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-2 text-lg"
              >
                <FaRocket /> Enroll Now
              </Link>
              <button className="bg-white/20 border border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white/30 transition-all duration-300 flex items-center gap-2 text-lg">
                <FaDownload /> Download Course Outline & Timetable
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why SC-200 Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[#29434e] mb-16">
              Why SC-200?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#2bb3a2]/10 to-[#29434e]/10 border border-[#ff8c2b] hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-[#2bb3a2] rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaShield className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#29434e] mb-4">
                  Enterprise Adoption
                </h3>
                <p className="text-gray-600">
                  Global enterprises trust Microsoft security.
                </p>
              </div>
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#2bb3a2]/10 to-[#29434e]/10 border border-[#ff8c2b] hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-[#2bb3a2] rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaLaptop className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#29434e] mb-4">
                  Full-Stack Expertise
                </h3>
                <p className="text-gray-600">
                  Master DLP, CASB, SASE, XDR, EDR, SIEM, SOAR & UEBA.
                </p>
              </div>
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#2bb3a2]/10 to-[#29434e]/10 border border-[#ff8c2b] hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-[#2bb3a2] rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaCertificate className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#29434e] mb-4">
                  Microsoft-Certified
                </h3>
                <p className="text-gray-600">
                  Earn Microsoft-backed certification by passing the Microsoft
                  SC-200 exam & unlock SecOps roles.
                </p>
              </div>
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#2bb3a2]/10 to-[#ff8c2]/10 border border-[#ff8c2b] hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-[#2bb3a2] rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaUsers className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#29434e] mb-4">
                  Real-World Labs
                </h3>
                <p className="text-gray-600">
                  Hands-on exercises with Purview, Defender suite & Sentinel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-[#29434e] to-[#2bb3a2]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
              Key Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <FaShield className="text-[#ff8c2b] text-4xl mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  Detect, investigate & remediate cloud & on-prem threats
                </h3>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <FaHandshake className="text-[#ff8c2b] text-4xl mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  Advise on enterprise threat-protection best practices
                </h3>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <FaRocket className="text-[#ff8c2b] text-4xl mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  Fine-tune SIEM/XDR rules and automate response playbooks
                </h3>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <FaLaptop className="text-[#ff8c2b] text-4xl mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  Hands-on architecture: build, secure & analyze environments
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum & Modules Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[#ff8c2b] mb-16">
              Curriculum & Modules
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Data Loss Prevention with Microsoft Purview",
                "Endpoint Protection & EDR in Defender for Endpoint",
                "Cloud Security Posture Management in Defender for Cloud",
                "CASB &SASE with Defender for Cloud Apps",
                "Identity Protection & UEBA with Defender Identity",
                "SIEM, XDR & SOAR workflows in Microsoft Sentinel",
                "Advanced Hunting Queries & Threat Intelligence",
                "Incident Investigation, Triage & Playbook Automation",
              ].map((module, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-[#2bb3a2]/10 to-[#29434e]/10 p-6 rounded-xl border border-[#ff8c2b]/20"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-[#2bb3a2] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-[#29434e]">
                      {module}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Approach Section */}
      <section className="py-20 bg-gradient-to-r from-[#2bb3a2] to-[#29434e]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
              Our Teaching Approach
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <FaUsers className="text-[#ff8c2b] text-4xl mx-auto mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">
                  Real-life use cases & live-build labs from scratch
                </h3>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <FaGraduationCap className="text-[#ff8c2b] text-4xl mx-auto mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">
                  Tweaked Microsoft Instructor Guide for maximal practice
                </h3>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <FaRocket className="text-[#ff8c2b] text-4xl mx-auto mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">
                  Step-by-step engineering, analysis & response sessions
                </h3>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <FaHandshake className="text-[#ff8c2b] text-4xl mx-auto mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">
                  Ted Q&A, interview prep & post-class support
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule & Requirements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[#29434e] mb-16">
              Schedule & Requirements
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-[#2bb3a2]/10 to-[#29434e]/10 rounded-2xl border border-[#2bb3a2]/20 p-5">
                <h3 className="text-2xl font-bold text-[#29434e] mb-6">
                  Course Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FaClock className="text-[#2bb3a2] text-xl" />
                    <span className="text-gray-700">
                      <strong>Duration:</strong> 8 weeks
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCalendar className="text-[#2bb3a2] text-xl" />
                    <span className="text-gray-700">
                      <strong>When:</strong> Saturdays, 4M–8PM
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaLaptop className="text-[#2bb3a2] text-xl" />
                    <span className="text-gray-700">
                      <strong>Format:</strong> Live online classes + on-demand
                      lab access
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#ff8c2]/10 to-[#2bb3a2]/10 rounded-2xl border border-[#ff8c2]/20 p-5">
                <h3 className="text-2xl font-bold text-[#29434e] mb-6">
                  You&apos;ll need:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <FaCheck className="text-[#ff8c2]" />A laptop & stable
                    internet
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCheck className="text-[#ff8c2]" />
                    An Azure account (free tier or pay-as-you-go; cost
                    optimized)
                  </li>
                </ul>
                <button className="mt-6  hover:bg-[#29434e] text-[#29434e] hover:text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center gap-2">
                  <FaDownload /> Download Detailed Timetable
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Attend Section */}
      <section className="py-20 bg-gradient-to-r from-[#29434e] to-[#2bb3a2]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
              Who Should Attend
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-[#ff8c2b]">
                <FaShield className="text-[#ff8c2b] text-4xl mx-auto mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">
                  Security Operations Analysts & Incident Responders
                </h3>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-[#ff8c2b]">
                <FaUsers className="text-[#ff8c2b] text-4xl mx-auto mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">
                  Security engineers scaling into Microsoft tooling
                </h3>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-[#ff8c2b]">
                <FaGraduationCap className="text-[#ff8c2b] text-4xl mx-auto mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">
                  Pros with basic security knowledge & drive to upskill
                </h3>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-[#ff8c2b]">
                <FaRocket className="text-[#ff8c2b] text-4xl mx-auto mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">
                  Fast-learning beginners ready for an intensive program
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Your Instructor Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[#29434e] mb-16">
              Meet Your Instructor
            </h2>
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-[#2bb3a2] to-[#29434e] p-8 rounded-2xl text-white text-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaGraduationCap className="text-white text-5xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Jamiu Akande</h3>
                  <p className="text-white/90 mb-4">
                    CISSP, MSc, AZ-500, SC-200
                  </p>
                  <div className="flex justify-center gap-4">
                    <a
                      href="#"
                      className="text-white hover:text-[#ff8c2] transition-colors"
                    >
                      <FaLinkedin className="text-2xl" />
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-[#ff8c2] transition-colors"
                    >
                      <FaGlobe className="text-2xl" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    Jamiu Olamilekan Akande is an award-winning global
                    cybersecurity expert and social-impact leader with more than
                    10 years of experience. He has led a team of Security
                    Operation Analysts for a global Managed Security Service
                    Provider (MSSP) and currently works as a Consultant Security
                    Engineer with some of the largest British companies. He is
                    also a PhD candidate at NSU Center for Cyberspace Studies.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Jamiu is the Founder of OpenSource In Cybersecurity, where
                    he helped early-stage startup Founders with free
                    cybersecurity support. Jamiu loves to teach and has been
                    teaching cybersecurity for the past 5ears, with lots of his
                    students getting jobs and getting promoted to high paying
                    cybersecurity jobs.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="text-[#29434e] font-semibold flex items-center gap-2"
                    >
                      <FaLinkedin /> LinkedIn
                    </a>
                    <a
                      href="#"
                      className="wtext-[#29434e] font-semibold flex items-center gap-2"
                    >
                      <FaGlobe /> World Economic Forum Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Payment Plan Section */}
      <section className="py-20 bg-gradient-to-r from-[#29434e] to-[#2bb3a2]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
              Pricing & Payment Plan
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <div className="text-6xl font-black text-white mb-4">
                    £800
                  </div>
                  <div className="text-2xl font-bold text-[#ff8c2b] mb-6">
                    Early-bird Discount → £560
                  </div>
                  <p className="text-white/90 mb-8">
                    if you pay 10 days before the class start date.
                  </p>
                  <div className="bg-[#ff8c2]/20 rounded-xl p-6 border border-[#ff8c2b]">
                    <p className="text-white font-semibold mb-4">
                      Secure your spot with a £300 deposit by 10s before the
                      start of class.
                    </p>
                    <ul className="text-white/90 space-y-2 text-left">
                      <li>• Balance (£260) due by week-4 of the course</li>
                      <li>• Next class starts on Saturday,16th August</li>
                      <li>
                        • Pay the £300 deposit by August 6 to gain from £560
                        discounted price.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <Link href="/enroll/sc-200" className="w-full bg-[#ff8c2] border border-white hover:bg-[#29434e] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-xl mb-4 flex items-center justify-center gap-3">
                    <FaRocket /> Secure Your Spot
                  </Link>
                  <button className="w-full bg-white/20 border border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-3">
                    <FaDownload /> Download Course Outline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[#29434e] mb-16">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "What prerequisites do I need?",
                  a: "Basic cybersecurity knowledge (networking, OS, cloud fundamentals).",
                },
                {
                  q: "How much will Azure labs cost?",
                  a: "We optimize spend; expect under £20 for the entire course, or if you get a free tiered account to use.",
                },
                {
                  q: "Can I get a refund?",
                  a: "Full refund if requested at least7s before the start date. (candidate incur any payment gateway service charge if there is any)",
                },
                {
                  q: "Do I receive a certificate?",
                  a: "Yes—upon completion, you get a CypodAdvisory certificate.",
                },
                {
                  q: "Can I take the Microsoft Security Operation Analyst certification afterward?",
                  a: "Yes, you can register to take the exam with Microsoft afterward, check the official Microsoft SC-200 page for the official certification price.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-[#2bb3a2]/10 to-[#29434e]/10 rounded-xl p-6 border border-[#2bb3a2]/20"
                >
                  <h3 className="text-xl font-bold text-[#29434e] mb-3 flex items-center gap-3">
                    <FaQuestion className="text-[#2bb3a2]" />
                    {faq.q}
                  </h3>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#29434e] to-[#2bb3a2]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
              Don&apos;t miss this opportunity to become a Microsoft-certified
              Security Operations Analyst.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-[#ff8c2] hover:bg-[#29434e] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-2 text-lg">
                <FaDownload /> Download Course Outline & Timetable
              </button>
              <button className="bg-white/20 border border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white/30 transition-all duration-300 flex items-center gap-2 text-lg">
                <FaRocket /> Enroll Now to Get Discount
              </button>
            </div>
            <p className="text-white/90 text-lg">
              Questions? Contact us or book a free15nsult.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SC200Page;
