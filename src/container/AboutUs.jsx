import React from "react";
import Slider from "react-slick";
import AboutCard from '../components/Card';
import aboutCardData from "../utils/CardData";
import './AboutUs.css'
import a1 from '../assets/images/eu-turk-flag.jpg';
import a2 from '../assets/images/fidic.png';
import a3 from '../assets/images/prag1.jpg';
import a4 from '../assets/images/construction.jpeg';
import a5 from '../assets/images/feasability.jpg';
import a6 from '../assets/images/meeting-room.jpeg';
import a7 from '../assets/images/about-us-img7.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [a1, a2, a3, a4, a5, a6, a7];

// Custom arrow components
const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow custom-next rounded-full`}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
        />
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow rounded-full custom-prev`}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
        />
    );
};

export default function AboutUs() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ],
        dotsClass: "slick-dots custom-dot-class",
        customPaging: function (i) {
            return (
                <div className="custom-dot " />
            );
        },
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <Slider {...settings} className="custom-slider">
                {aboutCardData.map((el, index) => (
                    <div key={index} className="px-2">
                        <div className="shadow-2xl">
                            <AboutCard
                                description={el.description}
                                title={el.title}
                                image={images[index]}
                                
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}