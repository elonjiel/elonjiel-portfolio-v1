import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";


function Navbar() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };


  return (
     <nav className="font-fjalla bg-color-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex-shrink-0">
            <a href="#" className="text-color-50 font-bold text-lg">elonjiel</a>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center ml-3">
              <a href="#" className="text-color-50 hover:text-color-400 hover:underline px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" className="text-color-50 hover:text-color-400 hover:underline px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#" className="text-color-50 hover:text-color-400 hover:underline px-3 py-2 rounded-md text-sm font-medium">Projects</a>
              <a href="#" className="text-color-50 hover:text-color-400 hover:underline px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
      <div className="md:hidden">
        {/* Mobile menu button */}
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          <RxHamburgerMenu className="text-color-50"/>
        </button>
      </div>
      </div>
      </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mobile-menu">
          {/* Mobile menu links */}
          <a href="#" className="block text-color-50 hover:text-color-400 hover:underline px-5 py-2 rounded-md text-base font-medium">Home</a>
          <a href="#" className="block text-color-50 hover:text-color-400 hover:underline px-5 py-2 rounded-md text-base font-medium">About</a>
          <a href="#" className="block text-color-50 hover:text-color-400 hover:underline px-5 py-2 rounded-md text-base font-medium">Projects</a>
          <a href="#" className="block text-color-50 hover:text-color-400 hover:underline px-5 pt-2 pb-4 rounded-md text-base font-medium">Contact</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar