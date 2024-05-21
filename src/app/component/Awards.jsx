import Image from "next/image";

function Card({ text }) {
  return (
    <div className="relative flex items-center justify-center text-center w-96 h-40 ">
      <Image
        src="/assets/award-left.svg"
        alt="Award"
        width={150}
        height={150}
        className="absolute left-0 top-0"
      />
      <p className="text-xl text-white max-w-full absolute left-1/2 top-7 transform -translate-x-1/2">
        {text}
      </p>
      <Image
        src="/assets/award-right.svg"
        alt="Award"
        width={150}
        height={150}
        className="absolute right-0 top-0"
      />
    </div>
  );
}

export default function Awards() {
  return (
    <div
      className="flex flex-col items-center justify-start gap-20 bg-center bg-cover bg-no-repeat w-full "
      style={{ backgroundImage: "url('/assets/awards-bg.svg')" }}
    >
      <div className="relative flex items-center justify-center w-full">
        <div className="absolute left-80 top-1/2 transform -translate-y-1/2 w-1/5 h-0.5 bg-white"></div>
        <h1 className="text-4xl text-white tracking-wide text-center z-10 px-4">
          Awards
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
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
