import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

export default function Carousel() {
    const slides = [
        {
            id: 1,
            title: 'Green Jobs',
            description: `Consultus Global is driving green jobs to improve energy and raw material efficiency, 
                          limit greenhouse gas emissions, minimize waste and pollution, protect and restore ecosystems, 
                          and help support adaptation to the impacts of climate change.`,
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
                          cities that are resistant to climate change.`,
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

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 640);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <>
            {/* Carousel Section */}
            < section className="py-16 bg-gray-100" >
                <div className="container mx-auto px-4 relative">
                    <div className="relative overflow-hidden rounded-lg shadow-xl">
                        <AnimatePresence initial={false}>
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="h-[50vh] md:h-[60vh] relative"
                            >
                                <img
                                    className="h-full w-full object-cover"
                                    src={isSmallScreen ? slides[currentSlide].imageXs : slides[currentSlide].imageLg}
                                    alt={`${slides[currentSlide].title} slide`}
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                                    <div className="text-center p-4">
                                        <h2 className="text-2xl md:text-3xl font-bold mb-4">{slides[currentSlide].title}</h2>
                                        <p className="text-sm md:text-base mx-auto max-w-lg">{slides[currentSlide].description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Controls */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 shadow-lg hover:bg-opacity-100 transition"
                            onClick={handlePrevSlide}
                        >
                            {/* SVG for prev button */}
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 shadow-lg hover:bg-opacity-100 transition"
                            onClick={handleNextSlide}
                        >
                            {/* SVG for next button */}
                        </motion.button>
                    </div>

                    {/* Slide Indicators */}
                    <div className="flex justify-center mt-4 space-x-2">
                        {slides.map((_, index) => (
                            <motion.button
                                key={index}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                                className={`h-3 w-3 rounded-full ${currentSlide === index ? 'bg-gray-800' : 'bg-gray-400'}`}
                                onClick={() => setCurrentSlide(index)}
                            ></motion.button>
                        ))}
                    </div>
                </div>
            </section >
        </>

    )
}