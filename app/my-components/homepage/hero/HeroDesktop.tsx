import CustomShapeDivider from "./CustomShapeDivider";
import Image from "next/image";

// breakpoint from "2lg" custom breakpoint 940px
const HeroDesktop = () => {
  return (
    <section className="bg-linear-to-t from-black via-red-500 to-red-400 flex h-100 lg:h-120 xl:h-[573px] 2xl:h-[643px] relative ">
      <CustomShapeDivider />
      <div
        className="absolute bottom-0 left-6 xl:left-1 h-80 w-60 lg:h-90 lg:w-75 xl:h-110
       xl:w-100 2xl:ml-20"
      >
        <Image
          alt="WTT player"
          src="/assets/chenmeng2.png"
          fill
          objectFit="contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* title and text */}
      <div className="mt-26 w-sm xl:w-lg 2xl:w-[600px] 3xl:w-[728px] mx-auto flex flex-col align-center justify-center text-white">
        <h1 className="uppercase font-bold text-4xl 2xl:text-6xl 2xl:mb-[2rem]">
          Table Tennis Warriors
        </h1>
        <p className="italic mt-3 text-lg lg:text-xl xl:text-2xl">
          Your League. Your Scores. Your Glory.
          <br />
          The ultimate hub for table-tennis results and player performance.
        </p>
      </div>

      <div
        className="absolute bottom-0 right-2 h-80 w-60 lg:h-110 lg:w-75 xl:h-120
       xl:w-100 2xl:mr-20"
      >
        <Image
          alt="WTT player"
          src="/assets/truls.webp"
          fill
          objectFit="contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </section>
  );
};

export default HeroDesktop;
