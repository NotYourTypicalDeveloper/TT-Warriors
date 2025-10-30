import CustomShapeDivider from "./CustomShapeDivider";
import Image from "next/image";

// view for mobile & tablet devices up to "lgplus" 940px
const HeroMobile = () => {
  return (
    <>
      <div className="relative bg-red-500">
        <CustomShapeDivider />
      </div>
      <div className="bg-linear-to-t from-black via-red-500 to-[red-400]">
        <div className="w-full p-6 xs:p-8 flex flex-col align-center justify-center">
          {/* title and text */}
          <div className="mx-auto text-white ">
            <h1 className="mt-20 sm:mt-28 uppercase font-extrabold text-4xl">
              Table Tennis Warriors
            </h1>
            <p className="italic mt-3 text-lg lg:text-xl">
              Your League. Your Scores. Your Glory.
              <br />
              The ultimate hub for table-tennis results and player performance.
            </p>
          </div>
        </div>

        <div className="flex justify-between items-end">
          <div className="h-80 w-60 md:h-100 md:w-100 relative">
            <Image
              alt="WTT player"
              src="/assets/chenmeng2.png"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="hidden xs:block h-80 w-60 md:h-110 md:w-110 relative">
            <Image
              alt="WTT player"
              src="/assets/truls.webp"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroMobile;
