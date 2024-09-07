import React from "react";
import AboutCard from '../components/Card';
import aboutCardData from "../utils/CardData";
import a1 from '../assets/images/about-us-img1.PNG';
import a2 from '../assets/images/about-us-img2.jpg';
import a3 from '../assets/images/about-us-img3.jpg';
import a4 from '../assets/images/about-us-img4.jpg';
import a5 from '../assets/images/about-us-img5.jpg';
import a6 from '../assets/images/about-us-img6.jpg';
import a7 from '../assets/images/about-us-img7.png'

const images = [a1, a2, a3, a4, a5, a6, a7];

export default function AboutUs() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {aboutCardData.map((el, index) => (
                <AboutCard
                    key={index}
                    description={el.description}
                    title={el.title}
                    image={images[index]}
                    color={el.color || "bg-blue-500"}
                />
            ))}
        </div>
    );
}