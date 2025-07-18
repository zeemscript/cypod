import React from "react";
import Link from "next/link";

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-md border-b border-gray-200">
    <div className="flex items-center gap-3">
      <img
        src="/cypodlogo.jpeg"
        alt="CYPOD Logo"
        className="h-10 w-auto rounded-md shadow"
      />
      <span className="text-2xl font-extrabold tracking-tight text-[#2bb3a2]">
        CYPOD
      </span>
    </div>
    <ul className="flex gap-8 text-[#29434e] font-medium text-lg">
      <li>
        <Link href="/" className="hover:text-[#2bb3a2] transition">
          Home
        </Link>
      </li>
      <li>
        <Link href="/" className="hover:text-[#2bb3a2] transition">
          Courses
        </Link>
      </li>
      <li>
        <Link href="/about" className="hover:text-[#2bb3a2] transition">
          About
        </Link>
      </li>
      <li>
        <Link href="/contact" className="hover:text-[#2bb3a2] transition">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
