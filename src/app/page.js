import Carousel from "./component/Carousel";
import About from "./component/About";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-5 ">
      <Carousel />
      <About />
    </main>
  );
}
