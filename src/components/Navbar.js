import React, { useState } from "react";
import logo from "./Images/logo1.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="font-[Roboto] relative">
      <nav className="flex justify-between items-center w-[92%] mx-auto max-h-20">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-12 md:w-20 cursor-pointer" />
          <a className="ml-2 text-xl font-bold text-[#022146]" href="/transportrapide">Flash Transport</a>
        </div>
        <div className="md:flex hidden items-center">
          <ul className="flex gap-8 text-[#022146]">
            <li><a className="font-bold hover:text-gray-500" href="/Stand">Stand</a></li>
            <li><a className="font-bold hover:text-gray-500" href="/transporter">Transporteur</a></li>
            <li><a className="font-bold hover:text-gray-500" href="/connecter">Se connecter</a></li>
            <li><a className="font-bold hover:text-gray-500" href="/inscription">S'inscrire</a></li>
            <li><a className="font-bold hover:text-gray-500" href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="flex items-center">
          <button
            className="md:hidden bg-[#FEEE90] text-[#022146] py-2 px-4 rounded-full hover:bg-[#87acec]"
            onClick={toggleMobileMenu}
          >
            ☰
          </button>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="bg-white absolute top-full left-0 w-full py-4 z-10 shadow-md">
          <ul className="flex flex-col gap-4 text-[#022146]">
            <li><a className="font-bold hover:text-gray-500" href="/Stand" onClick={closeMobileMenu}>Stand</a></li>
            <li><a className="font-bold hover:text-gray-500" href="/transporter" onClick={closeMobileMenu}>Transporteur</a></li>
            <li><a className="font-bold hover:text-gray-500" href="/connecter" onClick={closeMobileMenu}>Se connecter</a></li>
            <li><a className="font-bold hover:text-gray-500" href="/inscription" onClick={closeMobileMenu}>S'inscrire</a></li>
            <li><a className="font-bold hover:text-gray-500" href="/contact" onClick={closeMobileMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
