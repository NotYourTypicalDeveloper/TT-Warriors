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
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* title and text */}
      <header
        className="mt-26
        w-[420px]    
        xl:w-[540px]
        2xl:w-[720px]
        mx-auto flex flex-col justify-center text-white"
      >
        <h1 className="font-edu font-extrabold text-5xl mb-[1rem] 2xl:text-5xl 2xl:mb-[2rem]">
          Table Tennis Warriors
        </h1>
        <p className="font-saira mt-3 text-lg lg:text-xl xl:text-2xl">
          Your League. Your Scores. Your Glory.
        </p>
        <p className="font-saira mt-[1rem] text-md lg:text-lg xl:text-2xl">
          The ultimate hub for table-tennis results and player performance.
        </p>
      </header>

      <div
        className="absolute bottom-0 right-2 h-80 w-60 lg:h-110 lg:w-75 xl:h-120
       xl:w-100 2xl:mr-20"
      >
        <Image
          alt="WTT player"
          src="/assets/truls.webp"
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </section>
  );
};

export default HeroDesktop;
