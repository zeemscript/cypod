"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-white/80 backdrop-blur-md border-b border-gray-200">
      {/* Logo */}
      <div className="flex items-center gap-2 sm:gap-3">
        <img
          src="/cypod_logo.png"
          alt="CYPOD Logo"
          className="h-8 w-auto sm:h-10"
        />
   
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-6 lg:gap-8 text-[#29434e] font-medium text-base lg:text-lg">
        <li>
          <Link
            href="/"
            className="hover:text-[#2bb3a2] transition-colors duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#courses"
            className="hover:text-[#2bb3a2] transition-colors duration-200"
          >
            Courses
          </Link>
        </li>
        <li>
          <Link
            href="#footer"
            className="hover:text-[#2bb3a2] transition-colors duration-200"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:text-[#2bb3a2] transition-colors duration-200"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 text-[#29434e] hover:text-[#2bb3a2] transition-colors duration-200"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 md:hidden">
          <ul className="flex flex-col py-4 px-4 sm:px-6 text-[#29434e] font-medium text-lg">
            <li className="py-2">
              <Link
                href="/"
                className="block hover:text-[#2bb3a2] transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/"
                className="block hover:text-[#2bb3a2] transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/about"
                className="block hover:text-[#2bb3a2] transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="py-2">
              <Link
                href="/contact"
                className="block hover:text-[#2bb3a2] transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
