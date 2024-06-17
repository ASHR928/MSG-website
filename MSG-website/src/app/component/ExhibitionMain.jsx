"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ExhibitionMain() {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleItems, setVisibleItems] = useState(4);
  const [showMore, setShowMore] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://msg-website-pa8k.onrender.com/api/v1/exhibition"
      );
      setData(response.data.exhibitions);
    } catch (err) {
      console.error("Error fetching data", err);
    }
  };

  const filteredData = data.filter(
    (item) =>
      item.category.toLowerCase() === selectedCategory.toLowerCase() ||
      selectedCategory === "all"
  );

  const handleShowMore = () => {
    if (showMore) {
      setVisibleItems(filteredData?.length);
      setShowMore(false);
    } else {
      setVisibleItems(4);
      setShowMore(true);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10 sm:gap-14 md:gap-20 bg-primary-darkBlue w-full pt-4 sm:pt-10 pb-10 sm:pb-16 md:pb-32 ">
      <div className="relative flex items-center justify-center w-full">
        <div className="absolute sm:right-36 -bottom-4 sm:top-1/2 transform -translate-y-1/2 w-2/5 sm:w-1/5 h-[1px] bg-white"></div>
        <h1 className="text-3xl sm:text-5xl text-primary-lightPurple tracking-normal text-center z-10 px-4">
          Current Exhibition
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center relative">
        <div className="flex flex-row items-center justify-center gap-2 sm:gap-12 md:gap-24 relative px-2 sm:px-4 font-baloo300">
          {["all", "landscape", "whimsical", "figures"].map((category) => (
            <button
              key={category}
              className={`relative text-sm sm:text-xl text-primary-lightPurple font-mono  sm:tracking-wide text-center z-10 px-2 sm:px-4 uppercase `}
              onClick={() => handleCategoryClick(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
              {selectedCategory === category && (
                <div className="absolute bottom-[-10px] left-0 w-full h-[2px] bg-white"></div>
              )}
            </button>
          ))}
        </div>
        <div className="absolute bottom-[-10px] left-0 w-full h-[1.5px] bg-gray-500"></div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mx-4 sm:mx-6 md:mx-0">
        {filteredData?.slice(0, visibleItems)?.map((item, index) => (
          <div key={index} className="relative group">
            <Image
              src={item?.image?.url}
              alt="exhibition"
              width={280}
              height={280}
            />
            <div className="absolute inset-0 flex flex-col gap-3 sm:gap-6 items-center justify-center bg-black bg-opacity-50 text-primary-purple opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-sm transition-opacity duration-300 ease-in-out">
              <div className="flex flex-col gap-1 items-center justify-center text-center">
                <p className="text-base sm:text-xl">{item?.brief}</p>
                <h3 className="text-2xl sm:text-4xl font-bold">
                  {item?.title}
                </h3>
              </div>
              <p className="text-lg sm:text-2xl font-semibold">
                ₹ {item?.price}/-
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        className={`text-base sm:text-xl rounded-full bg-gradient-to-r from-[#E9DEFF] from-[2%] to-[#9747FF]  text-primary-lightPurple font-semibold sm:font-bold tracking-wide text-center z-10 px-4 sm:px-6 py-2 uppercase sm:mt-4 hover:shadow-lg ${
          filteredData.length <= 4
            ? "hidden md:block cursor-not-allowed"
            : "cursor-pointer"
        }`}
        onClick={handleShowMore}
        disabled={filteredData?.length <= 4}
      >
        {showMore ? "Show More" : "Show Less"}
      </button>
    </div>
  );
}
