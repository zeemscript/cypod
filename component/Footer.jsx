import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEnvelope, FaGlobe } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#29434e] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Image
                src="/cypod_logo.png"
                height={40}
                width={190}
                alt="Cypod_Logo"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">
              Expert Cybersecurity Training and Advisory Services
            </h3>
            <div className="space-y-2 text-gray-300">
              <p>Training</p>
              <p>Advisory services</p>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-bold mb-4">Courses</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  href="/courses/sc-200"
                  className="hover:text-[#2bb3a2] transition-colors"
                >
                  SC-200 Security Operations
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/az-500"
                  className="hover:text-[#2bb3a2] transition-colors"
                >
                  AZ-500 Azure Security Engineer
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/cissp"
                  className="hover:text-[#2bb3a2] transition-colors"
                >
                  CISSP Info Security Professional
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-2 text-gray-300 mb-6">
              <div className="flex items-center gap-2">
                <FaGlobe className="text-[#2bb3a2]" />
                <a
                  href="https://www.cypodadvisory.com"
                  className="hover:text-[#2bb3a2] transition-colors"
                >
                  www.cypodadvisory.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-[#2bb3a2]" />
                <a
                  href="mailto:contact@cypodadvisory.com"
                  className="hover:text-[#2bb3a2] transition-colors"
                >
                  contact@cypodadvisory.com
                </a>
              </div>
            </div>
            <div className="space-y-2 text-gray-300">
              <Link
                href="/terms-of-service"
                className="block hover:text-[#2bb3a2] transition-colors"
              >
                Privacy & Refund Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>© 2025 CYPODadvisory · All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
