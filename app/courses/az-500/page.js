"use client";
import React, { useState, useEffect } from "react";
import {
  FaShield,
  FaCertificate,
  FaRocket,
  FaMicrosoft,
  FaLock,
  FaGlobe
} from "react-icons/fa6";

const AZ500ComingSoon = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown timer - set to 30 days from now
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2bb3a2] to-[#29434e] overflow-hidden mt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#ff8c2b]/20 to-[#2bb3a2]/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#29434e]/20 to-[#ff8c2b]/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#2bb3a2]/10 to-[#ff8c2b]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Floating particles */}
        <div
          className="absolute top-20 left-20 w-2 h-2 bg-[#ff8c2b] rounded-full animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-40 right-32 w-3 h-3 bg-[#2bb3a2] rounded-full animate-bounce"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-32 left-32 w-2 h-2 bg-[#29434e] rounded-full animate-bounce"
          style={{ animationDelay: "2.5s" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-3 h-3 bg-[#ff8c2b] rounded-full animate-bounce"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-[#2bb3a2]/20 rounded-full px-6 py-3 text-sm font-semibold text-[#2bb3a2] shadow-xl mb-8 animate-pulse">
            <FaRocket className="w-4 h-4 animate-bounce" />
            Coming Soon
          </div>

          {/* Main heading */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#ff8c2b] to-[#2bb3a2] rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <FaMicrosoft className="text-white text-3xl" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#29434e] mb-6 leading-tight">
              <span className="text-[#ff8c2b]">
                AZ-500
              </span>
              <br />
              <span className="text-[#29434e]">Azure Security Engineer</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-[#29434e]/70 font-light max-w-4xl mx-auto leading-relaxed">
              Master Azure security engineering with our comprehensive
              certification course
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#29434e] mb-6">
              Launching In
            </h2>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
              {[
                { value: timeLeft.days, label: "Days" },
                { value: timeLeft.hours, label: "Hours" },
                { value: timeLeft.minutes, label: "Minutes" },
                { value: timeLeft.seconds, label: "Seconds" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-[#2bb3a2]/20 shadow-xl"
                >
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#ff8c2b] mb-2">
                    {item.value.toString().padStart(2, "0")}
                  </div>
                  <div className="text-sm sm:text-base text-[#29434e] font-medium">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Course highlights */}
          <div className="mb-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: FaShield,
                  title: "Security Architecture",
                  desc: "Design & implement Azure security",
                },
                {
                  icon: FaLock,
                  title: "Identity Management",
                  desc: "Master Azure AD & access control",
                },
                {
                  icon: FaGlobe,
                  title: "Network Security",
                  desc: "Secure Azure networking & connectivity",
                },
                {
                  icon: FaCertificate,
                  title: "Microsoft Certified",
                  desc: "Prepare for AZ-500 exam",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[#2bb3a2]/20 hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#ff8c2b] to-[#2bb3a2] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="text-white text-xl" />
                  </div>
                  <h3 className="text-lg font-bold text-[#29434e] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#29434e]/70 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AZ500ComingSoon;
