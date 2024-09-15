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
                <div className="shader-background rounded-lg p-4 space-y-2">
                    <h3 className="text-2xl md:text-3xl font-[900] text-black">
                        {title}
                    </h3>
                    <p className="text-lg md:text-xl font-semibold text-black leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}