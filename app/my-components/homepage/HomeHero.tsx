import CustomShapeDivider from "./CustomShapeDivider";
import Image from "next/image";

const HomeHero = () => {
  return (
    <section className="bg-linear-to-t from-black via-red-500 to-red-400 flex h-140 relative">
      <CustomShapeDivider />

      {/* Left panel */}
      <div className="w-3/5 h-full">
        <div className="absolute bottom-0">
          <Image
            alt="WTT player"
            src="/assets/chenmeng2.png"
            width={250}
            height={300}
          />
        </div>
      </div>

      {/* Right panel */}
      {/* title and text */}
      <div className="mt-26 flex flex-col align-center justify-center text-white ">
        <div className="max-w-[60%]">
          <h1 className="uppercase font-extrabold text-4xl">
            Table Tennis Warriors
          </h1>
          <p className="italic mt-3 text-2xl">
            Your League. Your Scores. Your Glory. The ultimate hub for
            table-tennis results and player performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
