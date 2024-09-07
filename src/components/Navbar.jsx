import { useState } from 'react';
import { Link } from 'react-router-dom';
import reactLogo from '../assets/react.svg'; // Replace with your logo path
import icon from '../assets/images/favicon.ico'
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800 sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/">
                            <img src={icon} alt="Logo" className="h-8 w-8" />
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-4 items-center">
                        <Link to="/" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                            Home
                        </Link>
                        <Link to="/about-us" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                            About Us
                        </Link>
                        <Link to="/contact-us" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                            Contact Us
                        </Link>
                        <Link to="/goals" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                            Goals
                        </Link>
                    </div>
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">
                            Home
                        </Link>
                        <Link to="/about-us" className="text-white block px-3 py-2 rounded-md text-base font-medium">
                            About Us
                        </Link>
                        <Link to="/contact-us" className="text-white block px-3 py-2 rounded-md text-base font-medium">
                            Contact Us
                        </Link>
                        <Link to="/goals" className="text-white block px-3 py-2 rounded-md text-base font-medium">
                            Goals
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
