import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowRight, Download } from 'lucide-react';
import profileImg from '../assets/images/profile.png';

const Hero = () => {
  return (
    <section id="hero" className="pt-32 md:pt-40 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-12">
      <div className="flex-1 flex flex-col justify-center text-center md:text-left pb-10 md:pb-28">
        <h1 className="text-4xl md:text-6xl font-bold text-heading leading-tight mb-6">
          Hi, I'm <span className="text-primary">{personalInfo.name}</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-body mb-8 font-medium">
          {personalInfo.title}
        </h2>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <a href="#projects" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-md hover:bg-blue-800 transition-colors font-medium">
            Lihat Portofolio
            <ArrowRight size={20} className="ml-2" />
          </a>
          {/* <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-md hover:bg-slate-50 transition-colors font-medium">
            Unduh Resume
            <Download size={20} className="ml-2" />
          </a> */}
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-end items-end relative md:mt-0">
        <div className="relative w-full max-w-sm md:max-w-md">
          {/* Efek Blur/Glow di belakang foto */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-3/4 bg-primary/20 blur-[70px] rounded-full pointer-events-none"></div>
          
          <img src={profileImg} alt={personalInfo.name} className="relative z-10 object-contain w-full h-auto drop-shadow-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
