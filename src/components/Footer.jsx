import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/favicon.ico';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo and About Section */}
                    <div className="flex flex-col items-center md:items-start">
                        <Link to="/" className="flex items-center mb-4">
                            <img src={logo} alt="Logo" className="h-12 w-12 mr-3" />
                            <span className="text-2xl font-bold">ConsultUs Global</span>
                        </Link>
                        <p className="text-gray-400 text-center md:text-left mt-2">
                            Empowering global progress through expert consultancy services.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <nav>
                            <ul className="space-y-2">
                                <li><Link to="/" className="text-gray-400 hover:text-white transition duration-300">Home</Link></li>
                                <li><Link to="/about-us" className="text-gray-400 hover:text-white transition duration-300">About Us</Link></li>
                                <li><Link to="/contact-us" className="text-gray-400 hover:text-white transition duration-300">Contact Us</Link></li>
                                <li><Link to="/goals" className="text-gray-400 hover:text-white transition duration-300">Goals</Link></li>
                            </ul>
                        </nav>
                    </div>

                    {/* Contact Information */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <address className="text-gray-400 not-italic text-center md:text-left">
                            <p className="font-semibold">Ankara Office</p>
                            <p>KIZILIRMAK MAH.</p>
                            <p>1443 CAD. NO:25 B</p>
                            <p>IÇ KAPI NO: 8</p>
                            <p>ÇANKAYA/ANKARA/TÜRKIYE</p>
                            <p className="mt-2">
                                <a href="mailto:info@consultus.com.tr" className="hover:text-white transition duration-300">
                                    info@consultus.com.tr
                                </a>
                            </p>
                        </address>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} ConsultUs Global. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;