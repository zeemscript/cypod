import React from "react";

const WhereStudentWork = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#29434e] mb-4">
            Where Our Students Work
          </h2>
          <p className="text-lg text-[#29434e]/70 mb-8">
            Our graduates are employed at leading organizations worldwide
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {/* NHS Logo */}
            <div className="flex items-center justify-center w-32 h-16 bg-white ">
              <img
                src="https://logo.clearbit.com/nhs.uk"
                alt="NHS"
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  // Try alternative NHS logo source
                  if (e.target.src.includes("clearbit.com")) {
                    e.target.src =
                      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/NHS_England_logo.svg/1200px-NHS_England_logo.svg.png";
                  } else {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }
                }}
              />
              <span
                className="text-[#2bb3a2] font-bold text-lg"
                style={{ display: "none" }}
              >
                NHS
              </span>
            </div>

            {/* ACORA Logo */}
            <div className="flex items-center justify-center w-64 h-24 bg-white">
              <img
                src="https://logo.clearbit.com/acora.com"
                alt="ACORA"
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              <span
                className="text-[#2bb3a2] font-bold text-lg"
                style={{ display: "none" }}
              >
                ACORA
              </span>
            </div>

            {/* SECURITY Logo */}
            <div className="flex items-center justify-center w-52 h-24 bg-white ">
              <img
                src="https://logo.clearbit.com/security.com"
                alt="SECURITY"
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              <span
                className="text-[#2bb3a2] font-bold text-lg"
                style={{ display: "none" }}
              >
                SECURITY
              </span>
            </div>

            {/* CLARANET Logo */}
            <div className="flex items-center justify-center w-52 h-24 bg-white ">
              <img
                src="https://logo.clearbit.com/claranet.com"
                alt="CLARANET"
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              <span
                className="text-[#2bb3a2] font-bold text-lg"
                style={{ display: "none" }}
              >
                CLARANET
              </span>
            </div>

            {/* UK ATOMIC ENERGY AUTHORITY Logo */}
            <div className="flex items-center justify-center w-40 h-16 bg-white ">
              <img
                src="https://logo.clearbit.com/ukaea.uk"
                alt="UK Atomic Energy Authority"
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  // Try alternative UKAEA logo source
                  if (e.target.src.includes("clearbit.com")) {
                    e.target.src =
                      "https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/UKAEA_logo.svg/1200px-UKAEA_logo.svg.png";
                  } else {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }
                }}
              />
              <span
                className="text-[#2bb3a2] font-bold text-sm text-center"
                style={{ display: "none" }}
              >
                UK ATOMIC ENERGY AUTHORITY
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereStudentWork;
