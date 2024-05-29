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
        <h1 className="hidden sm:block text-7xl text-primary-purple tracking-widest text-center ">
          Megha Saxena
          <br />
          Kathuria
        </h1>
        <h1 className="sm:hidden text-2xl text-primary-purple tracking-widest text-center ">
          Megha Saxena Kathuria
        </h1>
        <div className="transform translate-x-3 sm:translate-x-6 ">
          <Image src="/assets/hero.svg" alt="Hero" width={500} height={500} />
        </div>
      </div>
    </section>
  );
}
