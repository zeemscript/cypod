"use client";
import React, { useState } from "react";
import {
  FaArrowRight,
  FaShield,
  FaCheck,
  FaClock,
  FaCertificate,
  FaCalendar,
} from "react-icons/fa6";

const SC200EnrollmentPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    experience: "beginner",
    preferredDate: "",
    paymentMethod: "card",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle enrollment submission
    console.log("Enrollment submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-12 px-4 sm:px-6 lg:px-8 mt-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#2bb3a2]/20 to-[#ff8c2b]/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#29434e]/10 to-[#2bb3a2]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#2bb3a2]/20 rounded-full px-4 py-2 text-sm font-medium text-[#2bb3a2] shadow-sm mb-6">
            <FaShield className="w-4 h-4" />
            SC-200: Microsoft Security Operations Analyst
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-[#29434e] mb-4">
            Enroll in SC-200 Course
          </h1>

          <p className="text-xl text-[#29434e]/70 max-w-2xl mx-auto">
            Complete your enrollment to start your journey toward becoming a
            Microsoft Security Operations Analyst
          </p>
        </div>

        {/* Enrollment Form */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/30">
                    {/* Form Section */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#29434e] mb-8">
                Student Information
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#29434e] mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#29434e]/20 rounded-lg focus:ring-2 focus:ring-[#2bb3a2] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#29434e] mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#29434e]/20 rounded-lg focus:ring-2 focus:ring-[#2bb3a2] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#29434e] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#29434e]/20 rounded-lg focus:ring-2 focus:ring-[#2bb3a2] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#29434e] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#29434e]/20 rounded-lg focus:ring-2 focus:ring-[#2bb3a2] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#29434e] mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[#29434e]/20 rounded-lg focus:ring-2 focus:ring-[#2bb3a2] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#29434e] mb-2">
                    Experience Level
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[#29434e]/20 rounded-lg focus:ring-2 focus:ring-[#2bb3a2] focus:border-transparent transition-all"
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#2bb3a2] to-[#2bb3a2]/90 hover:from-[#ff8c2b] hover:to-[#ff8c2b]/90 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3"
                  >
                    <span>Complete Enrollment</span>
                    <FaArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>

       
          </div>
        </div>
      </div>
  );
};

export default SC200EnrollmentPage;
