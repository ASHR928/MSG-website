import Image from "next/image";

export default function Exhibition() {
  return (
    <section
      className="flex flex-col items-center justify-start w-full bg-cover bg-center bg-no-repeat px-6 pb-4 "
      style={{ backgroundImage: "url('/assets/exhibition-bg.svg')" }}
    >
      <div className="hidden sm:flex flex-row items-end justify-end w-full">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40">
          <Image
            src="/assets/msk_logo.svg"
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="relative flex flex-col gap-4 items-center justify-between sm:-mt-24">
        <div className="relative flex items-center justify-center w-full">
          <div className="absolute md:left-36 -bottom-2 md:top-1/2 transform -translate-y-1/2 w-2/5 sm:w-1/5 h-0.5 bg-white"></div>
          <h1 className="text-xl sm:text-2xl md:text-4xl bg-gradient-to-tr bg-clip-text text-transparent from-white to-primary-purple tracking-widest text-center z-10 px-2 sm:px-4">
            Exhibitions Performed <br /> & Judged at
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 font-semibold sm:font-bold mx-4 md:mx-20 ">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-4 md:mx-14">
            <div className="flex flex-col gap-0.5">
              <div className="relative w-32 md:w-60 h-32 md:h-60">
                <Image
                  src="/assets/locations/shillong.svg"
                  alt="Exhibition"
                  fill
                  className="object-contain"
                />
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl text-primary-purple tracking-wide sm:tracking-widest text-center ">
                Shillong
              </h1>
            </div>
            <div className="flex flex-col gap-0.5  ">
              <div className="relative w-32 md:w-60 h-32 md:h-60">
                <Image
                  src="/assets/locations/delhi.svg"
                  alt="Exhibition"
                  fill
                  className="object-contain"
                />
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl text-primary-purple tracking-wide sm:tracking-widest text-center ">
                Delhi
              </h1>
            </div>
            <div className="flex flex-col gap-0.5  ">
              <div className="relative w-32 md:w-60 h-32 md:h-60">
                <Image
                  src="/assets/locations/noida.svg"
                  alt="Exhibition"
                  fill
                  className="object-contain"
                />
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl text-primary-purple tracking-wide sm:tracking-widest text-center ">
                Noida
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4 ">
            <div className="flex flex-col gap-0.5  ">
              <div className="relative w-32 md:w-60 h-32 md:h-60">
                <Image
                  src="/assets/locations/malaysia.svg"
                  alt="Exhibition"
                  fill
                  className="object-contain"
                />
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl text-primary-purple tracking-wide sm:tracking-widest text-center ">
                Malaysia
              </h1>
            </div>
            <div className="flex flex-col gap-0.5  ">
              <div className="relative w-32 md:w-60 h-32 md:h-60">
                <Image
                  src="/assets/locations/dehradun.svg"
                  alt="Exhibition"
                  fill
                  className="object-contain"
                />
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl text-primary-purple tracking-wide sm:tracking-widest text-center ">
                Dehradun
              </h1>
            </div>
            <div className="flex flex-col gap-0.5  ">
              <div className="relative w-32 md:w-60 h-32 md:h-60">
                <Image
                  src="/assets/locations/bhopal.svg"
                  alt="Exhibition"
                  fill
                  className="object-contain"
                />
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl text-primary-purple tracking-wide sm:tracking-widest text-center ">
                Bhopal
              </h1>
            </div>
            <div className="flex flex-col gap-0.5  ">
              <div className="relative w-32 md:w-60 h-32 md:h-60">
                <Image
                  src="/assets/locations/haridwar.svg"
                  alt="Exhibition"
                  fill
                  className="object-contain"
                />
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl text-primary-purple tracking-wide sm:tracking-widest text-center ">
                Haridwar
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
