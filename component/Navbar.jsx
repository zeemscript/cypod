import React from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { name: "Home", to: "/" },
  { name: "Courses", to: "/courses" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
];

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-5 bg-white/80 backdrop-blur-md border-b border-[#ff8c2b] z-50 w-full fixed top-0 left-0">
      <div>
        <Image src="/cypod_logo.png" height={40} width={190} alt="Cypod_Logo" />
      </div>
      <div className="flex gap-8 cursor-pointer">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.to}
            className="text-md sm:text-lg text-[#2bb3a2] hover:text-[#ff8c2b] transition font-normal"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

// ext - [#2bb3a2]
// #ff8c2b
// #29434e
