"use client";
import { useState, useEffect } from "react";
import Carousel from "./component/Carousel";
import About from "./component/About";
import Courses from "./component/Courses";
import ExhibitionMain from "./component/ExhibitionMain";
import Awards from "./component/Awards";
import Gallery from "./component/Gallery";
import Contact from "./component/Contact";
import Hero from "./component/Hero";
import Exhibition from "./component/Exhibition";

export default function Home() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="flex flex-col items-center justify-center">
      {isLargeScreen ? (
        <>
          <Carousel />
          <About />
        </>
      ) : (
        <>
          <Hero />
          <About />
          <Exhibition />
        </>
      )}
      <Courses />
      <ExhibitionMain />
      <Awards />
      <Gallery />
      <Contact />
      {/* <Login/> */}
    </main>
  );
}
