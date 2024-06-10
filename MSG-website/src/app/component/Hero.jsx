import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="flex flex-col items-center justify-start w-full bg-cover bg-center bg-no-repeat px-2 sm:px-6"
      style={{ backgroundImage: "url('/assets/hero-bg.svg')" }}
    >
      <div className="flex flex-row items-end justify-end w-full">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40">
          <Image
            src="/assets/msk_logo.svg"
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="relative flex items-center justify-between mt-2 ">
        <h1 className="hidden sm:block text-8xl text-primary-golden tracking-widest text-center font-corinthia400 font-bold ">
          Megha
          <br />
          <span className="text-6xl"> Saxena Kathuria</span>
        </h1>
        <h1 className="sm:hidden text-2xl text-primary-golden tracking-widest text-center ">
          Megha Saxena Kathuria
        </h1>
        <div className="transform translate-x-3 sm:translate-x-6 ">
          <Image
            src="/assets/msk-img.svg"
            alt="Hero"
            width={420}
            height={420}
          />
        </div>
      </div>
    </section>
  );
}
