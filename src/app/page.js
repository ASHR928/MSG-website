import Carousel from "./component/Carousel";
import About from "./component/About";
import Courses from "./component/Courses";
import ExhibitionMain from "./component/ExhibitionMain";
import Awards from "./component/Awards";
import Gallery from "./component/Gallery";
import Contact from "./component/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center ">
      <Carousel />
      <About />
      <Courses />
      <ExhibitionMain />
      <Awards />
      <Gallery />
      <Contact />
    </main>
  );
}
