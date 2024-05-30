"use client";
import Image from "next/image";
import Slider from "react-slick";
import { galleryData } from "../utils/constant";
import { useState, useEffect } from "react";

export default function Gallery() {
  const [slidesToShow, setSlidesToShow] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth > 768 ? 3 : 2);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10 sm:gap-14 md:gap-20 bg-primary-darkBlue w-full pt-4 md:pt-10 pb-20 md:pb-32">
      <div className="relative flex items-center justify-center w-full">
        <div className="absolute md:right-72 -bottom-2 md:top-1/2 transform -translate-y-1/2 w-2/5 sm:w-1/5 h-[1px] bg-white"></div>
        <h1 className="text-2xl sm:text-4xl text-white tracking-wide text-center z-10 px-2 sm:px-4">
          Gallery
        </h1>
      </div>
      <div className="flex items-center justify-center w-[84vw] sm:w-[86vw] md:w-[90vw] h-20 sm:h-56">
        <Slider {...settings} className="w-full h-full">
          {galleryData?.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 justify-center w-full h-full "
            >
              <div className="w-36 sm:w-72 h-36 sm:h-72 relative">
                <Image src={item} alt="gallery" fill objectFit="contain" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
