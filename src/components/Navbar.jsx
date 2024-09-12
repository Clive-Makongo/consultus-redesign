import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import icon from '../assets/images/favicon.ico';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const menuVariants = {
        closed: {
            opacity: 0,
            y: "-100%",
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.07,
                delayChildren: 0.2
            }
        }
    };

    const menuItemVariants = {
        closed: { opacity: 0, y: -20 },
        open: { opacity: 1, y: 0 }
    };

    return (
        <nav className="bg-gray-800 sticky top-0 z-50 shadow-lg font-mono">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/">
                            <motion.img
                                src={icon}
                                alt="Logo"
                                className="h-8 w-8"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            />
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-4 items-center">
                        {['Home', 'About Us', 'Contact Us', 'Goals'].map((item) => (
                            <motion.div
                                key={item}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className={`text-white px-3 py-2 rounded-md text-sm font-medium ${location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`)
                                        ? 'bg-slate-700'
                                        : ''
                                    }`}
                            >
                                <Link
                                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                                >
                                    {item}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                    <div className="flex items-center md:hidden">
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="sr-only">Open main menu</span>
                            <motion.svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </motion.svg>
                        </motion.button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden"
                        id="mobile-menu"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                    >
                        <motion.div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {['Home', 'About Us', 'Contact Us', 'Goals'].map((item) => (
                                <motion.div key={item} variants={menuItemVariants}>
                                    <Link
                                        to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                                        className={`text-white block px-3 py-2 rounded-md text-base font-medium ${location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`)
                                                ? 'bg-blue-500'
                                                : ''
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;