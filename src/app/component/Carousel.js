"use client";
import Slider from "react-slick";
import Hero from "./Hero";
import Exhibition from "./Exhibition";

export default function Carousel() {
  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full min-h-screen">
      <Slider {...settings}>
        <div>
          <Hero />
        </div>
        <div>
          <Exhibition />
        </div>
      </Slider>
    </div>
  );
}
