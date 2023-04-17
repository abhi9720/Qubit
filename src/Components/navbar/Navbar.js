import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }
    const closeNavbar = () => {
        setIsOpen(false);
    }

    return (
        <nav className="bg-white  sticky w-full z-20 top-0 left-0 border-b border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center">
                    <img src="../../assets/logo.jpeg" className="h-8 mr-3" alt="Qubit Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">QuBit</span>
                </a>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen}
                    onClick={toggleNavbar}
                >
                    <span className="sr-only">Open main menu</span>
                    {/* Add an icon to indicate whether the menu is open or closed */}
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
                <div className={`w-full md:block md:w-auto ${isOpen ? '' : 'hidden'}`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <NavLink onClick={closeNavbar} to="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 active:bg-blue-500" aria-current="page">Home</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={closeNavbar} to="/resource" className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 active:bg-blue-500">Resource</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={closeNavbar} to="/document" className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 active:bg-blue-500">Documentation</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={closeNavbar} to="/gallery" className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 active:bg-blue-500">Gallery</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={closeNavbar} to="/contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 active:bg-blue-500">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
