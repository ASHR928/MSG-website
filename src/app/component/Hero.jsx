import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="flex flex-col items-center justify-start w-full bg-cover bg-center bg-no-repeat px-6"
      style={{ backgroundImage: "url('/assets/hero-bg.svg')" }}
    >
      <div className="flex flex-row items-end justify-end w-full">
        <Image src="/assets/msk_logo.svg" alt="Logo" width={140} height={140} />
      </div>
      <div className="relative flex items-center justify-between mt-2 ">
        <h1 className="text-7xl text-primary-purple tracking-widest text-center ">
          Megha Saxena
          <br />
          Kathuria
        </h1>
        <div className="transform translate-x-6 scale-110">
          <Image src="/assets/hero.svg" alt="Hero" width={500} height={500} />
        </div>
      </div>
    </section>
  );
}
