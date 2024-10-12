import React from 'react';
import { motion } from 'framer-motion';

export default function AboutCard({ title, description, image }) {
    return (
        <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="w-full h-[60vh] relative overflow-hidden"
            style={{
                background: `url(${image}) center center / cover no-repeat`
            }}
        >
            <div className="shader absolute inset-0 flex items-end p-8">
                <div className="gallery-cell--text">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h2>
                    <span className="hero-bar block w-16 h-1 bg-white mb-4"></span>
                    <p className="gallery-subhead text-sm text-white md:text-xl">{description}</p>
                </div>
            </div>
        </motion.div>
    );
}