import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Carousel from '../components/Carousel';
import Hero from    '../components/Hero'

function Home() {
  

    return (
        <div className="bg-gray-100 text-gray-900">
            {/* Hero Section */}
            <Hero/>

            {/* What We Do Header */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-8 text-gray-800">
                        <span className="relative inline-block">
                            <span className="relative z-10">What We Do</span>
                            <span className="absolute inset-x-0 bottom-0 h-2 bg-gray-500 rounded-md"></span>
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover the services and solutions we offer to help your business thrive in a competitive market.
                    </p>
                </div>
            </section>

            {/* Carousel */}
            <Carousel />

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12">Our Features</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((feature) => (
                            <motion.div
                                key={feature}
                                whileHover={{ scale: 1.05 }}
                                className="p-6 border rounded-lg shadow-md transition"
                            >
                                <h3 className="text-xl font-semibold mb-4">Feature {feature}</h3>
                                <p className="text-gray-600">A brief description of what this feature entails.</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Call to Action Section */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="py-20 bg-gradient-to-r from-gray-600 to-gray-500 text-white text-center"
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Take Your Business to the Next Level?</h2>
                    <p className="text-lg md:text-xl mb-8">Join us today and start your journey towards success.</p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-accent-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-accent-600 transition"
                    >
                        Sign Up Now
                    </motion.button>
                </div>
            </motion.section>
        </div>
    );
}


export default Home;
