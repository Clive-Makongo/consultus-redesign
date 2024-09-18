import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import bgImage from '../assets/images/bg-image.jpeg'
import '../container/AboutUs.css'

export default function Hero() {
    
    return (
        <>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    
                }}
                className="bg-gradient-to-b from-gray-800 to-gray-700 text-white py-20 rounded-lg h-[60vh] m-auto "
            >
                <div className="container flex flex-col justify-center mx-auto text-center w-1/2 px-4">
                    <h1
                        className="text-4xl md:text-5xl font-bold mb-4 rounded-lg"
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.1)',
                            padding: '5px 1px',
                            borderRadius: '5px',
                        }}
                    >
                        ConsultUs Global
                    </h1>
                    
                    
                </div>
            </motion.section>
        </>
    )
}