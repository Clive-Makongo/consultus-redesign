import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
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

// Make sure to import the CSS files in your main App.js or index.js:
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

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

const NextArrow = ({ onClick }) => (
    <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 shadow-lg hover:bg-opacity-100 transition z-10"
        onClick={onClick}
    >
        <ChevronRightIcon className="h-6 w-6" />
    </button>
);

const PrevArrow = ({ onClick }) => (
    <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 shadow-lg hover:bg-opacity-100 transition z-10"
        onClick={onClick}
    >
        <ChevronLeftIcon className="h-6 w-6" />
    </button>
);

export default function Carousel() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth < 640);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        adaptiveHeight: true,
    };

    return (
        <section className="bg-gray-100 py-16 rounded-lg">
            <div className="container mx-auto px-4 relative">
                <Slider {...settings} className='rounded-xl overflow-hidden'>
                    {slides.map((slide) => (
                        <div key={slide.id} className="relative h-[50vh] md:h-[60vh] rounded-xl overflow-hidden">
                            <img
                                className="h-full w-full object-cover"
                                src={isSmallScreen ? slide.imageXs : slide.imageLg}
                                alt={`${slide.title} slide`}
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                                <div className="text-center p-4">
                                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{slide.title}</h2>
                                    <p className="text-sm md:text-base mx-auto max-w-lg">{slide.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}