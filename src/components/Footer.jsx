import React from 'react';
import { Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="bg-heading text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
      </div>
      </div>
    </footer>
  );
};

export default Footer;
