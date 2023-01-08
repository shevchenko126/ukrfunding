import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const SliderExample = () => {

    let slider1 = undefined;
    let slider2 = undefined;

    function SampleNextArrow({ onClick }) {
        return (
            <div
                className="slider-arrow"
                onClick={onClick}
            >
                <AiOutlineArrowRight />
            </div>
        );
    }

    function SamplePrevArrow({ onClick }) {
        return (
            <div
                className="slider-arrow"
                onClick={onClick}
            >
                <AiOutlineArrowLeft />
            </div>
        );
    }

    const settings = {
        infinite: true,
        slidesToShow: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
    }, []);

    return (
        <div>
            <Slider
                {...settings}
                asNavFor={nav2}
                ref={slider => (slider1 = slider)}
                className="d-flex align-items-center justify-content-center"
            >
                <div>
                    <img className='slider-main-img' src="/image/page5_profile.svg" alt="" />
                </div>
                <div>
                    <img className='slider-main-img' src="/image/page5_profile.svg" alt="" />
                </div>
                <div>
                    <img className='slider-main-img' src="/image/page5_profile.svg" alt="" />
                </div>
                <div>
                    <img className='slider-main-img' src="/image/page5_profile.svg" alt="" />
                </div>
            </Slider>
            <Slider
                asNavFor={nav1}
                ref={slider => (slider2 = slider)}
                slidesToShow={4}
                swipeToSlide={true}
                focusOnSelect={true}
            >
                <div>
                    <img className='slider-additional-img' src="/image/img.svg" alt="" />
                </div>
                <div>
                    <img className='slider-additional-img' src="/image/img.svg" alt="" />
                </div>
                <div>
                    <img className='slider-additional-img' src="/image/img.svg" alt="" />
                </div>
                <div>
                    <img className='slider-additional-img' src="/image/img.svg" alt="" />
                </div>
            </Slider>
        </div>
    );
}

export default SliderExample;