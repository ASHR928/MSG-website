"use client";
import Image from "next/image";
import Slider from "react-slick";
import { galleryData } from "../utils/constant";

export default function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="flex flex-col items-center justify-center gap-20 bg-primary-darkBlue w-full pt-10 pb-32">
      <div className="relative flex items-center justify-center w-full">
        <div className="absolute right-72 top-1/2 transform -translate-y-1/2 w-1/5 h-[1px] bg-white"></div>
        <h1 className="text-4xl text-white tracking-wide text-center z-10 px-4">
          Gallery
        </h1>
      </div>
      <div className="flex items-center justify-center w-[90vw] h-56">
        <Slider {...settings} className="w-full h-full">
          {galleryData?.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full h-full "
            >
              <Image src={item} alt="gallery" width={400} height={400} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
