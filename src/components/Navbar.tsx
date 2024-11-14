import React from 'react';
import { IoMdMenu } from 'react-icons/io';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-medium">Portfolio.</div>
        {/* Navigation Links */}
        <ul className="gap-10 lg:gap-16 hidden md:flex">
          <li className="menuLink"><a href="#hero">Home</a></li>
          <li className="menuLink"><a href="#about">About</a></li>
          <li className="menuLink"><a href="#projects">Projects</a></li>
          <li className="menuLink"><a href="#skills">Skills</a></li>
          <li className="menuLink"><a href="#contact">Contact</a></li>
        </ul>
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub size={24} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:your-email@example.com" className="hover:text-gray-400">
            <FaEnvelope size={24} />
          </a>
        </div>
        {/* Mobile Menu Icon */}
        <IoMdMenu className="md:hidden" size={30} />
      </div>
    </nav>
  );
};

export default Navbar;
