import React from 'react';
import { motion } from 'framer-motion';

export default function AboutCard({ title, description, color, image }) {
    return (
        <motion.div
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.95 }}
            className="w-full h-[400px] md:h-[300px] lg:h-[400px] relative overflow-hidden rounded-xl shadow-lg"
        >
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className={`absolute inset-0 ${color} opacity-60 z-10`} />
            <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2  bg-opacity-70 p-2 rounded">
                    {title}
                </h3>
                <p className="text-lg md:text-xl text-black font-medium leading-relaxed bg-white bg-opacity-70 p-2 rounded">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}