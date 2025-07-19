import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaMicrosoft,
  FaCloud,
  FaCertificate,
  FaArrowRight,
} from "react-icons/fa6";

const TrainingOptions = () => {
  return (
    <div id="courses" className="w-full bg-[#f8fafb] py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {/* SC-200 Card */}
        <div className="relative rounded-3xl shadow-xl overflow-hidden group bg-white flex flex-col h-full">
          <div className="relative h-56 w-full">
            <Image
              src="/sc-200.jpeg"
              alt="SC-200 Course"
              fill
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2bb3a2]/80 to-transparent" />
            <span className="absolute top-4 left-4 bg-white/80 rounded-full p-3 shadow-lg">
              <FaMicrosoft className="text-[#2bb3a2] text-3xl" />
            </span>
          </div>
          <div className="flex-1 flex flex-col justify-between p-8">
            <h2 className="text-2xl font-extrabold text-[#29434e] mb-3 leading-tight">
              SC-200: Security Operations Analyst
            </h2>
            <p className="text-lg text-[#29434e] mb-6 font-medium">
              Master threat detection, investigation, and response using
              Microsoft Sentinel and Defender.
            </p>
            <div className="flex gap-4 flex-wrap mt-auto">
              <Link
                href="/courses/sc-200"
                className="inline-flex items-center text-white font-semibold bg-[#29434e] hover:bg-[#2bb3a2] px-6 py-2 rounded-full transition-colors text-lg"
              >
                Details <FaArrowRight className="ml-2" />
              </Link>
              <Link
                href="/enroll/sc-200"
                className="inline-flex items-center font-bold px-8 py-2 rounded-full text-white shadow-lg text-lg bg-[#2bb3a2] hover:bg-[#29434e]"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
        {/* AZ-500 Card */}
        <div className="relative rounded-3xl shadow-xl overflow-hidden group bg-white flex flex-col h-full">
          <div className="relative h-56 w-full">
            <Image
              src="/az-500.jpeg"
              alt="AZ-500 Course"
              fill
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#ff8c2b]/80 to-transparent" />
            <span className="absolute top-4 left-4 bg-white/80 rounded-full p-3 shadow-lg">
              <FaCloud className="text-[#ff8c2b] text-3xl" />
            </span>
          </div>
          <div className="flex-1 flex flex-col justify-between p-8">
            <h2 className="text-2xl font-extrabold text-[#29434e] mb-3 leading-tight">
              AZ-500: Azure Security Engineer
            </h2>
            <p className="text-lg text-[#29434e] mb-6 font-medium">
              Architect, implement and harden cloud security controls across
              Azure workloads.
            </p>
            <div className="flex gap-4 flex-wrap mt-auto">
              <Link
                href="/courses/az-500"
                className="inline-flex items-center text-white font-semibold bg-[#29434e] hover:bg-[#ff8c2b] px-6 py-2 rounded-full transition-colors text-lg"
              >
                Details <FaArrowRight className="ml-2" />
              </Link>
              <Link
                href="/enroll/sc-200"
                className="inline-flex items-center font-bold px-8 py-2 rounded-full text-white shadow-lg text-lg bg-[#ff8c2b] hover:bg-[#29434e]"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
        {/* CISSP Card */}
        <div className="relative rounded-3xl shadow-xl overflow-hidden group bg-white flex flex-col h-full">
          <div className="relative h-56 w-full">
            <Image
              src="/cissp.jpeg"
              alt="CISSP Course"
              fill
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#29434e]/80 to-transparent" />
            <span className="absolute top-4 left-4 bg-white/80 rounded-full p-3 shadow-lg">
              <FaCertificate className="text-[#29434e] text-3xl" />
            </span>
          </div>
          <div className="flex-1 flex flex-col justify-between p-8">
            <h2 className="text-2xl font-extrabold text-[#29434e] mb-3 leading-tight">
              CISSP: Info Security Professional
            </h2>
            <p className="text-lg text-[#29434e] mb-6 font-medium">
              Build deep expertise in security architecture, governance, risk
              and compliance.
            </p>
            <div className="flex gap-4 flex-wrap mt-auto">
              <Link
                href="/courses/cissp"
                className="inline-flex items-center text-white font-semibold bg-[#29434e] hover:bg-[#2bb3a2] px-6 py-2 rounded-full transition-colors text-lg"
              >
                Details <FaArrowRight className="ml-2" />
              </Link>
              <Link
                href="/enroll/sc-200"
                className="inline-flex items-center font-bold px-8 py-2 rounded-full text-white shadow-lg text-lg bg-[#29434e] hover:bg-[#2bb3a2]"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingOptions;
