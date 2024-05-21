import Image from "next/image";

function Card({ title, img }) {
  return (
    <div className="flex flex-col items-center relative cursor-pointer group">
      <div className="flex items-center justify-center bg-gradient-to-b from-[#2B02B8] to-[#D4C2FF] transform -rotate-45 absolute -top-12  rounded-lg ">
        <div className="flex items-center p-4 transform rotate-45">
          <Image src={img} alt="drawing" width={30} height={30} />
        </div>
      </div>
      <div className="flex items-center justify-center bg-primary-lightPurple rounded-ss-3xl rounded-b-none rounded-e-none transition-all duration-300 group-hover:rounded-br-3xl group-hover:pb-32 ">
        <p className="text-black text-xl p-2 mx-6 my-4 font-mono">{title}</p>
      </div>
    </div>
  );
}

export default function Courses() {
  return (
    <div
      className="flex flex-col items-center justify-start gap-20 bg-center w-full bg-cover pt-10 pb-32 "
      style={{ backgroundImage: "url('/assets/exhibition-bg.svg')" }}
    >
      <h1 className="text-4xl text-white tracking-widest text-center z-10 px-4">
        {" "}
        We are <span>Dedicated</span> to <br />
        Serve you all the time
      </h1>
      <div className="flex flex-row items-start justify-center gap-6 font-bold h-40 ">
        <Card title="Drawing Courses" img="/assets/drawing.svg" />
        <Card title="Painting Courses" img="/assets/paint.svg" />
        <Card title="Mentorship" img="/assets/mentor.svg" />
        <Card title="Customized Arts" img="/assets/custom-arts.svg" />
        <Card title="Art Materials" img="/assets/architecture.svg" />
      </div>
    </div>
  );
}
