export default function About() {
  return (
    <section className="flex flex-col items-center justify-center w-full bg-primary-darkBlue px-4 mt-4">
      <div
        className="flex flex-col items-center justify-center w-full bg-cover bg-no-repeat p-6 rounded-2xl  shadow-lg shadow-primary-shadowPurple   "
        style={{ backgroundImage: "url('/assets/about-bg.png')" }}
      >
        <div className="flex flex-row items-start justify-center w-full gap-6 ">
          <div className="flex flex-col items-center justify-start w-1/5 h-[40vh] border-r-2 border-primary-darkBlue">
            <h1 className="text-5xl text-primary-darkBlue tracking-widest text-center z-10 px-4 ">
              {" "}
              Artistic
            </h1>
            <p className="text-2xl text-primary-darkBlue tracking-wide text-center">
              Statement
            </p>
          </div>
          <div className="flex flex-col items-start justify-start w-4/5 gap-6 ">
            <div className="flex flex-col gap-1 mx-4">
              <h4 className="text-xl text-primary-darkBlue uppercase font-mono font-semibold">
                Started
              </h4>
              <p className="text-xl text-primary-lightRed uppercase font-mono font-extrabold">
                February, 1999
              </p>
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-5 font-mono tracking-tight font-semibold">
              <p className="text-base text-primary-darkBlue">
                Megha is an adept artist known for her keen observation and
                admiration of the world around her. With an emphasis on
                capturing the essence of nature and life, her meticulous artwork
                captures the inherent realism found in these subjects. Utilizing
                watercolor, charcoal, and other mediums, Megha skillfully
                expresses her emotions and thoughts, creating a harmonious
                connection between nature and the universe.
              </p>
              <p className="text-base text-primary-darkBlue">
                Originating from the picturesque DOON valley, Megha possesses a
                natural inclination towards simplicity and aesthetics. Having
                pursued a degree in Fine Arts, she subsequently embarked on a
                fulfilling career as an art faculty member, accumulating over a
                decade's worth of experience in the field.
              </p>
              <p className="text-base text-primary-darkBlue">
                As the visionary founder of "MSK Creative Studio" specializing
                in Drawing, Painting, and Creative Arts, Megha actively
                organizes and conducts diverse art workshops. Passionate about
                nurturing young individuals, she takes joy in imparting her
                knowledge and expertise in the realm of fine arts. Furthermore,
                Megha has frequently showcased her magnificent creations in both
                online and offline art exhibitions held in Shillong, Delhi,
                Noida, Haridwar, Bhopal, Dehradun, Malaysia, and beyond. Earning
                recognition from esteemed juries, her artwork has garnered
                numerous accolades.
              </p>
              <p className="text-base text-primary-darkBlue">
                In addition to the aforementioned pursuits, Megha is honored to
                serve as a faculty of arts at The Indian Military Academy,
                imparting knowledge and guidance to the esteemed gentlemen
                cadets who represent the future of our nation.
              </p>
              <p className="text-base text-primary-darkBlue">
                Furthermore, Megha proudly shares that she have been bestowed
                with the prestigious title of Mrs. India 2024, signifying her
                accomplishments and contributions in the realm of beauty and
                grace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
