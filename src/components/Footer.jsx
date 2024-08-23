import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and About Section */}
                    <div>
                        <Link to="/" className="flex items-center mb-4">
                            <img src="/vite.svg" alt="Logo" className="h-10 w-10 mr-2" /> {/* Replace with your logo */}
                            <span className="text-2xl font-bold">Your Brand</span>
                        </Link>
                        <p className="text-gray-400">
                            Your Brand is committed to providing the best services and products to our customers.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
                            </li>
                            <li>
                                <Link to="/about-us" className="text-gray-400 hover:text-white">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contact-us" className="text-gray-400 hover:text-white">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="/goals" className="text-gray-400 hover:text-white">Goals</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-white">Service 1</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-white">Service 2</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-white">Service 3</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-white">Service 4</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <p className="text-gray-400">123 Street Name, City, State, Zip</p>
                        <p className="text-gray-400">Email: info@yourbrand.com</p>
                        <p className="text-gray-400">Phone: (123) 456-7890</p>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-8 flex justify-center space-x-6">
                    <Link to="/" className="text-gray-400 hover:text-white">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            {/* Replace with actual icons */}
                            <path d="M18 2h-3.01a4 4 0 00-4 4V9h-2v3h2v10h3V12h2.8l.2-3h-3V6a1 1 0 011-1h2V2z" />
                        </svg>
                    </Link>
                    <Link to="/" className="text-gray-400 hover:text-white">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            {/* Replace with actual icons */}
                            <path d="M18 2h-3.01a4 4 0 00-4 4V9h-2v3h2v10h3V12h2.8l.2-3h-3V6a1 1 0 011-1h2V2z" />
                        </svg>
                    </Link>
                    <Link to="/" className="text-gray-400 hover:text-white">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            {/* Replace with actual icons */}
                            <path d="M18 2h-3.01a4 4 0 00-4 4V9h-2v3h2v10h3V12h2.8l.2-3h-3V6a1 1 0 011-1h2V2z" />
                        </svg>
                    </Link>
                </div>

                {/* Copyright */}
                <div className="mt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Your Brand. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
