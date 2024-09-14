import React from "react";
import Slider from "react-slick";
import AboutCard from '../components/Card';
import aboutCardData from "../utils/CardData";
import './AboutUs.css'
import a1 from '../assets/images/about-us-img1.PNG';
import a2 from '../assets/images/about-us-img2.jpg';
import a3 from '../assets/images/about-us-img3.jpg';
import a4 from '../assets/images/about-us-img4.jpg';
import a5 from '../assets/images/about-us-img5.jpg';
import a6 from '../assets/images/about-us-img6.jpg';
import a7 from '../assets/images/about-us-img7.png';

// Don't forget to import the CSS for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [a1, a2, a3, a4, a5, a6, a7];

// Custom arrow components
const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow custom-next`}
            style={{ ...style, display: "block", background: "gray" }}
            onClick={onClick}
        />
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow custom-prev`}
            style={{ ...style, display: "block", background: "gray" }}
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
        autoplaySpeed: 3000,
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
                                color="bg-blue-500"
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}