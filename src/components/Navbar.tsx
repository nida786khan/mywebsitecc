import React, { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  // State to toggle mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-medium">Portfolio.</div>

        {/* Mobile Menu Icon */}
        <IoMdMenu
          className="md:hidden cursor-pointer"
          size={30}
          onClick={toggleMenu}
        />

        {/* Navigation Links for larger screens */}
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
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-700">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li className="menuLink"><a href="#hero" onClick={toggleMenu}>Home</a></li>
            <li className="menuLink"><a href="#about" onClick={toggleMenu}>About</a></li>
            <li className="menuLink"><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li className="menuLink"><a href="#skills" onClick={toggleMenu}>Skills</a></li>
            <li className="menuLink"><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


       
