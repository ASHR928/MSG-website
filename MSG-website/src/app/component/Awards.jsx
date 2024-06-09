import Image from "next/image";

function Card({ text }) {
  return (
    <div className="relative flex items-center justify-center text-center w-[50vw] md:w-96 h-32 md:h-40 ">
      <div className="absolute left-0 top-0 h-20 sm:h-28 md:h-36 w-16 sm:w-28 md:w-36 ">
        <Image
          src="/assets/award-left.svg"
          alt="Award"
          fill
          objectFit="contain"
        />
      </div>
      <p className="text-xs sm:text-base md:text-xl text-white max-w-full absolute left-1/2 top-4 md:top-7 transform -translate-x-1/2  ">
        {text}
      </p>
      <div className="absolute right-0 top-0 h-20 sm:h-28 md:h-36 w-16 sm:w-28 md:w-36">
        <Image
          src="/assets/award-right.svg"
          alt="Award"
          fill
          objectFit="contain"
        />
      </div>
    </div>
  );
}

export default function Awards() {
  return (
    <div
      className="flex flex-col items-center justify-start gap-10 sm:gap-14 md:gap-20 bg-center bg-cover bg-no-repeat w-full "
      style={{ backgroundImage: "url('/assets/awards-bg.svg')" }}
    >
      <div className="relative flex items-center justify-center w-full">
        <div className="absolute md:left-80 -bottom-2 md:top-1/2 transform -translate-y-1/2 w-2/5 sm:w-1/5 h-0.5 bg-white"></div>
        <h1 className="text-2xl sm:text-4xl text-white tracking-wide text-center z-10 px-2 sm:px-4">
          Awards
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 md:gap-4">
        <Card text="Mrs India 2024" />
        <Card text="India's Top Artist Award 2018" />
        <Card text="Sanskrit Bharti, Dehradun 2014" />
        <Card text="Fine Artist of Dehradun, 2018" />
        <Card text="Uttarakhandi Achievers Awards, 2022" />
        <Card text="Fine Artist of Dehradun(Prathma), 2018" />
      </div>
    </div>
  );
}
