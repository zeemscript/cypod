import React from "react";
import { FaArrowRight, FaShield, FaGraduationCap, FaUsers } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#2bb3a2]/20 to-[#ff8c2b]/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#29434e]/10 to-[#2bb3a2]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#ff8c2b]/5 to-[#2bb3a2]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#2bb3a2]/20 rounded-full px-4 py-2 text-sm font-medium text-[#2bb3a2] shadow-sm">
              <FaShield className="w-4 h-4" />
              Trusted by 1000+ Professionals
            </div>

            {/* Main headline */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-[#29434e]">Expert Cybersecurity</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2bb3a2] to-[#ff8c2b]">
                  Training & Advisory
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-[#29434e]/70 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Accelerate your cybersecurity career with hands-on training designed for individuals and teams.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-3 text-[#29434e]/80">
                <div className="w-8 h-8 bg-[#2bb3a2]/10 rounded-lg flex items-center justify-center">
                  <FaGraduationCap className="w-4 h-4 text-[#2bb3a2]" />
                </div>
                <span className="text-sm font-medium">Certified Training</span>
              </div>
              <div className="flex items-center gap-3 text-[#29434e]/80">
                <div className="w-8 h-8 bg-[#ff8c2b]/10 rounded-lg flex items-center justify-center">
                  <FaUsers className="w-4 h-4 text-[#ff8c2b]" />
                </div>
                <span className="text-sm font-medium">Team Solutions</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group bg-gradient-to-r from-[#2bb3a2] to-[#2bb3a2]/90 hover:from-[#ff8c2b] hover:to-[#ff8c2b]/90 text-white font-semibold py-4 px-8 rounded-xl shadow-lg shadow-[#2bb3a2]/25 hover:shadow-xl hover:shadow-[#ff8c2b]/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3 justify-center">
                <span>Explore Training Options</span>
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-white/80 backdrop-blur-sm hover:bg-white text-[#29434e] font-semibold py-4 px-8 rounded-xl border border-[#29434e]/10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                View Course Catalog
              </button>
            </div>
          </div>

          {/* Right side - Visual elements */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            {/* Main illustration card */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 max-w-sm w-full">
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#2bb3a2] to-[#ff8c2b] rounded-2xl flex items-center justify-center shadow-lg">
                <FaShield className="w-8 h-8 text-white" />
              </div>
              
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#29434e] mb-2">Cybersecurity Excellence</h3>
                  <p className="text-[#29434e]/70 text-sm">Master the latest security protocols and best practices</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-[#2bb3a2]/5 rounded-lg">
                    <div className="w-8 h-8 bg-[#2bb3a2] rounded-lg flex items-center justify-center">
                      <FaGraduationCap className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#29434e]">Certified Training</p>
                      <p className="text-xs text-[#29434e]/60">Industry-recognized certifications</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-[#ff8c2b]/5 rounded-lg">
                    <div className="w-8 h-8 bg-[#ff8c2b] rounded-lg flex items-center justify-center">
                      <FaUsers className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#29434e]">Team Solutions</p>
                      <p className="text-xs text-[#29434e]/60">Customized for your organization</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-8 -left-8 bg-gradient-to-br from-[#2bb3a2]/20 to-[#ff8c2b]/20 rounded-2xl p-4 backdrop-blur-sm border border-white/20 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#29434e]">500+</div>
                <div className="text-xs text-[#29434e]/70">Students Trained</div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-[#ff8c2b]/20 to-[#2bb3a2]/20 rounded-2xl p-4 backdrop-blur-sm border border-white/20 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#29434e]">98%</div>
                <div className="text-xs text-[#29434e]/70">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#29434e]/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#2bb3a2] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
