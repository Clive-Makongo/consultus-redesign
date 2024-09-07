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
            <section className="py-10 bg-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-8 text-gray-800">
                        <span className="relative inline-block">
                            <span className="relative z-10">What We Do</span>
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-black max-w-3xl mx-auto">
                        Discover the services and solutions we offer to help your business thrive in a competitive market.
                    </p>
                </div>
            </section>

            {/* Carousel */}
            <Carousel />

            
           
        </div>
    );
}


export default Home;
