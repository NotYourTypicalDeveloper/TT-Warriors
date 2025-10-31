import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardTitle } from "@/shadcn-components/ui/card";

import RoundedImage from "../../shared/RoundedImage";
import { Trophy } from "lucide-react";

type PlayerCardProps = {
  playerId: string;
  firstName: string;
  lastName: string;
  wins: number;
  country: string;
  countryCode: string;
};
const PlayerCard = ({
  playerId,
  firstName,
  lastName,
  wins,
  country,
  countryCode,
}: PlayerCardProps) => {
  return (
    <Link href={`/players/${playerId}`}>
      <Card className="group w-full flex justify-center pt-0 shadow-md hover:shadow-2xl">
        <CardContent className="relative p-0">
          <div className="bg-[#E91E63] group-hover:bg-[#f03172] flex flex-col xs:flex-row justify-evenly items-center text-white pt-8 pb-6 rounded-t-lg px-2 ">
            <RoundedImage
              url={`/assets/${playerId}.webp`}
              className="h-[120px] w-[120px] lg:h-[142px] lg:w-[142px]"
              altText={`player ${firstName} ${lastName}`}
              fallbackSrc="/assets/avatar.webp"
            />
            <div>
              <CardTitle className="text-lg mb-1">{firstName}</CardTitle>
              <CardTitle className="text-xl mb-1 uppercase">
                {lastName}
              </CardTitle>
            </div>
          </div>

          <div className="py-6 px-2">
            {/* bottom part */}
            <div className="grid grid-cols-3 gap-2">
              {/* victories  */}
              <div className="flex flex-col items-center border-r border-gray-200">
                <div className="flex items-center">
                  <Trophy height={20} width={25} />
                  <span className="ml-1 text-3xl">{wins}</span>
                </div>
                <p className="text-sm text-grey-200 w-fit">wins</p>
              </div>

              {/* country  */}
              <div className="flex flex-col items-center border-r border-gray-200 justify-end">
                <div className="h-8 w-8 relative">
                  <Image
                    src={`https://flagsapi.com/${countryCode}/shiny/64.png`}
                    fill
                    style={{ objectFit: "contain" }}
                    alt={`flag ${country}`}
                  />
                </div>
                <p className="text-sm text-grey-200 w-fit">{country}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PlayerCard;
