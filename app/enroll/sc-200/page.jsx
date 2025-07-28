"use client";
import React, { useState } from "react";
import sendMail from "@/lib/sendmail";
import {
  FaArrowRight,
  FaShield,
} from "react-icons/fa6";




const SC200EnrollmentPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    whatsapp: "",
    email: "",
    country: "",
    course: "SC-200: Security Operations Analyst",
  });
  const [isChecked, setIsChecked] = useState(false);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handler for checkbox change
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    try {
      await sendMail(formData);
      setSuccess("Enrollment submitted successfully! We will get back to you soon.");
      setFormData({ fullName: "", phone: "", whatsapp: "", email: "", country: "", course: "SC-200: Security Operations Analyst" });
    } catch (err) {
      setError("There was an error submitting your enrollment. Please try again or contact us via WhatsApp.");
    } finally {
      setLoading(false);
    }
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
            <FaShield className="w-4 h-4 text-[#ff8c2b]" />
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
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-[#29434e] mb-8">
              Student Information
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {success && (
                <div className="bg-green-100 text-green-800 px-4 py-3 rounded-lg mb-4 text-center font-semibold border border-green-200">
                  {success}
                </div>
              )}
              {error && (
                <div className="bg-red-100 text-red-800 px-4 py-3 rounded-lg mb-4 text-center font-semibold border border-red-200">
                  {error}
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-[#29434e] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-[#29434e]/20 rounded-lg focus:ring-2 focus:ring-[#ff8c2b] focus:border-transparent transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#29434e] mb-2">
                  Phone Number (please add country code) *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="e.g. +123456789"
                  className="w-full px-4 py-3 border border-[#29434e]/20 rounded-lg focus:ring-2 focus:ring-[#ff8c2b] focus:border-transparent transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#29434e] mb-2">
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  placeholder="e.g. +123456789"
                  className="w-full px-4 py-3 border border-[#29434e]/20 rounded-lg focus:ring-2 focus:ring-[#2bb3a2] focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#29434e] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-[#29434e]/20 rounded-lg focus:ring-2 focus:ring-[#ff8c2b] focus:border-transparent transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#29434e] mb-2">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-[#29434e]/20 rounded-lg focus:ring-2 focus:ring-[#ff8c2b] focus:border-transparent transition-all"
                />
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  value="Send email and whatsapp messages to me"
                  className="text-black" />
                <label className="block text-lg font-medium text-[#29434e]">
                  I agree to be contacted via email and WhatsApp.
                </label>
              </div>
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#2bb3a2] to-[#2bb3a2]/90 hover:from-[#ff8c2b] hover:to-[#ff8c2b]/90 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
                  disabled={loading}
                >
                  {loading ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Complete Enrollment</span>
                      <FaArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
            <div className="mt-8 text-center text-[#29434e] text-lg">
              We would get back to you as soon as possible!<br />
              <span className="block mt-2">You can also reach out to us via WhatsApp <a href="https://wa.me/447350028993" target="_blank" rel="noopener noreferrer" className="text-[#2bb3a2] underline font-bold">+447350028993</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SC200EnrollmentPage;
