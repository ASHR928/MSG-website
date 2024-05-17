import Image from "next/image";

export default function Exhibition() {
  return (
    <section
      className="flex flex-col items-center justify-start w-full bg-cover bg-center bg-no-repeat px-6 pb-14"
      style={{ backgroundImage: "url('/assets/exhibition-bg.svg')" }}
    >
      <div className="flex flex-row items-end justify-end w-full">
        <Image src="/assets/msk_logo.svg" alt="Logo" width={140} height={140} />
      </div>
      <div className="relative flex flex-col gap-10 items-center justify-between -mt-10 ">
        <div className="relative flex items-center justify-center w-full">
          <div className="absolute left-36 top-1/2 transform -translate-y-1/2 w-1/5 h-0.5 bg-white"></div>
          <h1 className="text-4xl bg-gradient-to-tr bg-clip-text text-transparent from-white to-primary-purple tracking-widest text-center z-10 px-4">
            Exhibitions Performed <br /> & Judged at
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 mt-4 font-bold mx-20 ">
          <div className="flex flex-row gap-4 items-center justify-between mx-14">
            <div className="flex flex-col gap-2 ">
              <Image
                src="/assets/locations/shillong.svg"
                alt="Exhibition"
                width={400}
                height={400}
              />
              <h1 className="text-3xl text-primary-purple tracking-widest text-center ">
                Shillong
              </h1>
            </div>
            <div className="flex flex-col gap-2 ">
              <Image
                src="/assets/locations/delhi.svg"
                alt="Exhibition"
                width={400}
                height={400}
              />
              <h1 className="text-3xl text-primary-purple tracking-widest text-center ">
                Delhi
              </h1>
            </div>
            <div className="flex flex-col gap-2 ">
              <Image
                src="/assets/locations/noida.svg"
                alt="Exhibition"
                width={400}
                height={400}
              />
              <h1 className="text-3xl text-primary-purple tracking-widest text-center ">
                Noida
              </h1>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-center justify-between w-full">
            <div className="flex flex-col gap-2 ">
              <Image
                src="/assets/locations/malaysia.svg"
                alt="Exhibition"
                width={400}
                height={400}
              />
              <h1 className="text-3xl text-primary-purple tracking-widest text-center ">
                Malaysia
              </h1>
            </div>
            <div className="flex flex-col gap-2 ">
              <Image
                src="/assets/locations/dehradun.svg"
                alt="Exhibition"
                width={400}
                height={400}
              />
              <h1 className="text-3xl text-primary-purple tracking-widest text-center ">
                Dehradun
              </h1>
            </div>
            <div className="flex flex-col gap-2 ">
              <Image
                src="/assets/locations/bhopal.svg"
                alt="Exhibition"
                width={400}
                height={400}
              />
              <h1 className="text-3xl text-primary-purple tracking-widest text-center ">
                Bhopal
              </h1>
            </div>
            <div className="flex flex-col gap-2 ">
              <Image
                src="/assets/locations/haridwar.svg"
                alt="Exhibition"
                width={400}
                height={400}
              />
              <h1 className="text-3xl text-primary-purple tracking-widest text-center ">
                Haridwar
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
