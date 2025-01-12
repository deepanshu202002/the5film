"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const Carousel = () => {
  // Custom arrows
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute pr-20 bottom-4 left-1/2 transform -translate-x-1/2 text-white p-2 hover:text-gray-500 rounded-full  z-10"
      >
        <div className="flex">
          <ChevronLeft /> Prev
        </div>
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute bottom-4 right-1/2 transform translate-x-1/2 pl-20 text-white  hover:text-gray-500 p-2 rounded-full  z-10"
      >
        <div className="flex">
          Next <ChevronRight />
        </div>
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="h-screen bg-cover bg-center relative">
          <Image
            src="/sliderImages/2.JPG"
            alt="Slide 1"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="flex flex-col items-center justify-center h-full text-white text-center z-30 relative">
            <h1 className="text-2xl font-mono">Slide 1</h1>
            <button className="mt-4 px-4 py-2 border-2 w-40 border-dashed border-gray-500 ">
              Learn More
            </button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="h-screen bg-cover bg-center relative">
          <Image
            src="/sliderImages/slider_bg.JPG"
            alt="Slide 2"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="flex flex-col items-center justify-center h-full text-white text-center relative z-30">
            <h1 className="text-2xl font-mono">Slide 2</h1>
            <button className="mt-4 px-4 py-2 border-2 border-gray-500 w-40 border-dashed ">
              Learn More
            </button>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="h-screen bg-cover bg-center relative">
          <Image
            src="/sliderImages/bg.JPG"
            alt="Slide 3"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="flex flex-col items-center justify-center h-full text-white text-center z-30 relative">
            <h1 className="text-2xl font-mono">Slide 3</h1>
            <button className="mt-4 px-4 py-2 border-2 border-gray-500 w-40 border-dashed ">
              Learn More
            </button>
          </div>
        </div>
        <div className="h-screen bg-cover bg-center relative">
          <Image
            src="/sliderImages/sliderbg.JPG"
            alt="Slide 3"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="flex flex-col items-center justify-center h-full text-white text-center z-30 relative">
            <h1 className="text-2xl font-mono">Slide 4</h1>
            <button className="mt-4 px-4 py-2 border-2 w-40 border-dashed border-gray-500">
              Learn More
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
