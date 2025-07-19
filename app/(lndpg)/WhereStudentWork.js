import React from "react";

const logos = [
  {
    src: "/logo1.png",
    alt: "NHS",
    label: "NHS",
  },
  {
    src: "/log2.png",
    alt: "ACORA",
    label: "ACORA",
  },
  {
    src: "/log3.png",
    alt: "SECURITY",
    label: "SECURITY",
  },
  {
    src: "/log4.png",
    alt: "CLARANET",
    label: "CLARANET",
  },
  {
    src: "/log5.png",
    alt: "UK Atomic Energy Authority",
    label: "UK ATOMIC ENERGY AUTHORITY",
  },
];

const LOGO_BOX_CLASSES = "w-40 h-20"; // You can adjust these values as needed

const WhereStudentWork = () => {
  return (
    <section className="py-16 bg-white">
      {/* Centered heading/description */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-bold text-[#29434e] mb-4">
            Where Our Students Work
          </h2>
          <p className="text-xl text-[#29434e]/70 mb-8">
            Our graduates are employed at leading organizations worldwide
          </p>
        </div>
      </div>
      {/* Full-width logo grid */}
      <div className="w-full bg-[#29434e] py-8 shadow">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center px-4">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className={`flex items-center justify-center ${LOGO_BOX_CLASSES}  rounded p-2 transition-transform hover:scale-105`}
              title={logo.label}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhereStudentWork;
