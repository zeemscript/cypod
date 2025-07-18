import React from 'react'
import { FaCheck } from 'react-icons/fa6';
const EnrollDiscount = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#29434e] mb-8">
            Enrollment & Discounts
          </h2>
          <div className="bg-gradient-to-r from-[#2bb3a2]/10 to-[#ff8c2b]/10 rounded-2xl p-8 border border-[#2bb3a2]/20">
            <div className="flex items-center justify-center mb-6">
              <FaCheck className="text-[#2bb3a2] text-4xl mr-4" />
              <span className="text-2xl font-bold text-[#29434e]">
                30% Discount Available
              </span>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              Join any course today and enjoy a 30% discount when you complete
              payment at least 10 days before your start date.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Lock in your spot with a small deposit—pay the balance after the
              first class.
            </p>
            <button className="bg-[#2bb3a2] hover:bg-[#29434e] text-white font-bold py-4 px-8 rounded-xl shadow-lg text-lg transition-all">
              Reserve Your Seat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EnrollDiscount
