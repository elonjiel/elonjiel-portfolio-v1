import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { RxHamburgerMenu } from "react-icons/rx";


function Navbar() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setIsNavbarScrolled(isScrolled);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const navbarClasses = `bg-color-900 z-50 sticky top-0 transition-all duration-500	 ${
      isNavbarScrolled ? 'bg-opacity-90' : ''
    }`;


  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex-shrink-0">
            <a href="#" className="text-color-50 font-bold text-lg">elonjiel</a>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center ml-3">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="text-color-50 hover:text-color-400 hover:underline px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
              >
                Home
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="text-color-50 hover:text-color-400 hover:underline px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
              >
                About
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="text-color-50 hover:text-color-400 hover:underline px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
              >
                Projects
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-color-50 hover:text-color-400 hover:underline px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button className="mobile-menu-button" onClick={toggleMobileMenu}>
            <RxHamburgerMenu className="text-color-50"/>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mobile-menu">
           <Link
            to="home"
            smooth={true}
            duration={500}
            className="block text-color-50 hover:text-color-400 hover:underline px-5 py-2 rounded-md text-base font-medium cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="block text-color-50 hover:text-color-400 hover:underline px-5 py-2 rounded-md text-base font-medium cursor-pointer"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="block text-color-50 hover:text-color-400 hover:underline px-5 py-2 rounded-md text-base font-medium cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="block text-color-50 hover:text-color-400 hover:underline px-5 pt-2 pb-4 rounded-md text-base font-medium cursor-pointer"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar