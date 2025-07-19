import React from "react";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";
const EnrollDiscount = () => {
  return (
    <section className="py-16 px-4 bg-white my-10 sm:my-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Content */}
        <div className="max-w-4xl mx-auto text-start flex flex-col justify-center">
          <h2 className="text-5xl font-extrabold text-[#29434e] mb-8 leading-tight">
            Enrollment & Discounts
          </h2>
          <div className="flex items-center mb-6">
            <FaCheck className="text-[#2bb3a2] text-5xl mr-4" />
            <span className="text-3xl font-extrabold text-[#29434e]">
              30% Discount Available
            </span>
          </div>
          <p className="text-2xl text-gray-700 mb-6 font-medium">
            Join any course today and enjoy a{" "}
            <span className="text-[#2bb3a2] font-bold">30% discount</span> when
            you complete payment at least 10 days before your start date.
          </p>
          <p className="text-xl text-gray-700 mb-8">
            Lock in your spot with a small deposit—pay the balance after the
            first class.
          </p>
          <button className="bg-[#2bb3a2] hover:bg-[#29434e] text-white font-extrabold py-4 px-10 w-full rounded-xl shadow-lg text-2xl transition-all">
            Reserve Your Seat
          </button>
        </div>
        {/* Image with overlay */}
        <div className="relative w-full h-80 md:h-[400px] flex items-center justify-center">
          <Image
            src="/img_2.jpg"
            alt="image"
            fill
            className="object-cover w-full h-full rounded-3xl"
            style={{ zIndex: 0 }}
            priority
          />
          <div
            className="absolute inset-0 bg-black/10 rounded-3xl"
            style={{ zIndex: 1 }}
          />
        </div>
      </div>
    </section>
  );
};

export default EnrollDiscount;
