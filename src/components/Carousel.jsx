import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import GreenJobs from '../assets/images/Green-Jobs.png';
import GreenJobsXS from '../assets/images/green-jobs-xs.png';
import WaterManagement from '../assets/images/water-management-cli.png';
import WaterManagementXS from '../assets/images/water-management-cli-xs.png';
import ClimateAction from '../assets/images/climate-action and-cli.png';
import ClimateActionXS from '../assets/images/resilident-city-xs.png';
import EnergyEfficiency from '../assets/images/energy-efficiency-cli.png';
import EnergyEfficiencyXS from '../assets/images/energy-eff-xs.png';
import EUFlags from '../assets/images/eu-flags.png';
import EUFlagsXS from '../assets/images/eu-xs.png';

const slides = [
    {
        id: 1,
        title: 'Green Jobs',
        description: `Consultus Global is driving green jobs to improve energy and raw material efficiency, limit greenhouse gas emissions, minimize waste and pollution, protect and restore ecosystems, and help support adaptation to the impacts of climate change. `,
        imageLg: GreenJobs,
        imageXs: GreenJobsXS,
    },
    {
        id: 2,
        title: 'Water Management',
        description: `We produce projects compatible with all local and national government units to develop 
                          strategies for establishing systems that are closest to the natural return of water 
                          that we deteriorate with urbanization.`,
        imageLg: WaterManagement,
        imageXs: WaterManagementXS,
    },
    {
        id: 3,
        title: 'Climate Actions and Resilient Cities',
        description: `One of our main goals is to produce projects that exactly coincide with the aim of creating 
                          cities that are resistant to climate change.

                          Our team is well-versed in EU climate policies, working collaboratively to address climate change challenges through innovative strategies.`,
        imageLg: ClimateAction,
        imageXs: ClimateActionXS,
    },
    {
        id: 4,
        title: 'Energy Efficiency Solutions',
        description: `We're committed to enhancing energy efficiency through tailored solutions. 
                          Our experts help institutions navigate complex EU regulations, ensuring compliance while 
                          optimizing energy use, reducing costs, and minimizing environmental impact.`,
        imageLg: EnergyEfficiency,
        imageXs: EnergyEfficiencyXS,
    },
    {
        id: 5,
        title: 'Your EU Policy Partner',
        description: `Consultus Global is your trusted partner in achieving EU policy compliance. 
                          With a proven track record and a deep understanding of EU governance, we provide 
                          the technical expertise needed to thrive in an evolving regulatory landscape.`,
        imageLg: EUFlags,
        imageXs: EUFlagsXS,
    },
];


const variants = {
    enter: (direction) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction) => ({
        x: direction < 0 ? '100%' : '-100%',
        opacity: 0,
    }),
};

export default function Carousel() {
    const [[page, direction], setPage] = useState([0, 0]);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth < 640);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const paginate = (newDirection) => {
        setPage(([currentPage, _]) => [
            (currentPage + newDirection + slides.length) % slides.length,
            newDirection
        ]);
    };

    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4 relative">
                <div className="relative overflow-hidden rounded-xl shadow-xl h-[50vh] md:h-[60vh]">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={page}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="absolute w-full h-full"
                        >
                            <img
                                className="h-full w-full object-cover"
                                src={isSmallScreen ? slides[page].imageXs : slides[page].imageLg}
                                alt={`${slides[page].title} slide`}
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                                <div className="text-center p-4">
                                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                        {slides[page].title}
                                    </h2>
                                    <p className="text-sm md:text-base mx-auto max-w-lg">
                                        {slides[page].description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Controls */}
                <button
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 shadow-lg hover:bg-opacity-100 transition"
                    onClick={() => paginate(-1)}
                >
                    <ChevronLeftIcon className="h-6 w-6" />
                </button>
                <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 shadow-lg hover:bg-opacity-100 transition"
                    onClick={() => paginate(1)}
                >
                    <ChevronRightIcon className="h-6 w-6" />
                </button>

                {/* Slide Indicators */}
                <div className="flex justify-center mt-4 space-x-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`h-3 w-3 rounded-full ${page === index ? 'bg-gray-800' : 'bg-gray-400'}`}
                            onClick={() => setPage([index, index > page ? 1 : -1])}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
}