import React from "react";
import { FaCheck } from "react-icons/fa6";

const EnrollDiscount = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col md:flex-row bg-gradient-to-br from-[#e0f7fa] via-[#f8fafc] to-[#e0f2f1] overflow-hidden">
      {/* Left: Image as background */}
      <div className="relative flex-1 min-h-[400px] md:min-h-0 md:h-auto flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/img_2.jpg"
            alt="image"
            fill
            className="object-cover w-full h-full"
            style={{ zIndex: 0 }}
            priority
          />
        </div>

      </div>
      {/* Right: Content Card floating over image */}
      <div className="flex-1 flex items-center justify-center relative z-20 py-16 px-4">
        <div className="w-full max-w-2xl mx-auto  relative space-y-4">
  
          <h2 className="text-5xl font-extrabold text-[#29434e] mb-8 leading-tight">
            Enrollment & Discounts
          </h2>
          <p className="text-2xl text-gray-700 mb-6 font-medium">
            Join any course today and enjoy a{" "}
            <span className="text-[#2bb3a2] font-bold">30% discount</span> when
            you complete payment at least 10 days before your start date.
          </p>
          {/* How it works section */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#e0f7fa] rounded-full p-5 mb-3 shadow">
                <svg className="w-10 h-10 text-[#ff8c2b]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
              </div>
              <span className="font-bold text-[#29434e] text-lg">Easy Enrollment</span>
              <span className="text-gray-500 text-base">Sign up in minutes</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#e0f7fa] rounded-full p-5 mb-3 shadow">
                <svg className="w-10 h-10 text-[#ff8c2b]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" /></svg>
              </div>
              <span className="font-bold text-[#29434e] text-lg">Secure Payment</span>
              <span className="text-gray-500 text-base">Deposit & balance options</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#e0f7fa] rounded-full p-5 mb-3 shadow">
                <svg className="w-10 h-10 text-[#ff8c2b]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="font-bold text-[#29434e] text-lg">Guaranteed Spot</span>
              <span className="text-gray-500 text-base">Reserve early & save</span>
            </div>
          </div>
          <button
            type="button"
            className="bg-[#2bb3a2] hover:bg-[#29434e] text-white font-extrabold py-4 px-10 w-full rounded-xl shadow text-2xl transition-all flex items-center justify-center gap-3 mt-2"
            onClick={() => {
              const el = document.getElementById("courses");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <span>Reserve Your Seat</span>
            <svg className="w-7 h-7 text-white group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EnrollDiscount;
