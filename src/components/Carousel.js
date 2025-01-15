"use client";
import useMedia from "use-media";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

// const images = [
//   "/sliderImages/bg.jpg",
//   "/sliderImages/slider_bg.jpg",
//   "/sliderImages/sliderbg.jpg",
//   "/sliderImages/2.jpg",
// ];

export default function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const isSmallScreen = useMedia({ maxWidth: "768px" });
  const isMediumScreen = useMedia({ minWidth: "769px", maxWidth: "1200px" });
  // const isLargeScreen = useMedia({ minWidth: "1201px" });
  const smallScreenImages = [
    "/sliderImages/bg.jpg",
    "/sliderImages/sliderbg.jpg",
    "/sliderImages/bg2.jpg",
    "/sliderImages/3.JPG",
  ];
  const mediumScreenImages = [
    "/sliderImages/bg.jpg",
    "/sliderImages/bg2.jpg",
    "/sliderImages/sliderbg.jpg",
  ];
  const largeScreenImages = [
    "/sliderImages/slider_bg.jpg",
    "/sliderImages/2.jpg",
  ];
  const images = isSmallScreen
    ? smallScreenImages
    : isMediumScreen
    ? mediumScreenImages
    : largeScreenImages;

  // Function to handle image change with fade effect
  const changeImage = (newIndex) => {
    setFade(false); // Start fade-out
    setTimeout(() => {
      setCurrentImageIndex(newIndex);
      setFade(true); // Start fade-in
    }, 800); // Duration of fade-out
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    changeImage(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    changeImage(prevIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentImageIndex]); // Re-run effect when currentImageIndex changes

  return (
    <div className="w-screen h-screen relative">
      {/* Image background with fade effect */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      />
      <div className="flex flex-col items-center justify-center h-full text-white text-center relative z-10">
        <h1 className="text-4xl font-bold">Your Text Here</h1>
        <button className="mt-4 px-6 py-2 border-2 border-dashed text-white  hover:bg-opacity-70">
          Click Me
        </button>
      </div>

      {/* Next and Previous buttons */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10">
        <button
          onClick={prevImage}
          className="px-4 py-2  text-white rounded hover:text-gray-500"
        >
          <div className="flex gap-1 font-mono items-center">
            <ChevronLeft size={20} />
            Previous
          </div>
        </button>
        <button
          onClick={nextImage}
          className="px-4 py-2   text-white rounded hover:text-gray-500"
        >
          <div className="flex gap-1 font-mono items-center">
            Next
            <ChevronRight size={20} />
          </div>
        </button>
      </div>
    </div>
  );
}
