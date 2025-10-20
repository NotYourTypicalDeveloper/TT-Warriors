import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shadcn-components/ui/card";

import RoundedImage from "../../shared/RoundedImage";

type PlayerCardProps = {
  imageUrl: string;
  nickName: string;
  fullName: string;
  wins: number;
  country: string;
};
const PlayerCard = ({
  imageUrl,
  fullName,
  nickName,
  wins,
  country,
}: PlayerCardProps) => {
  return (
    <Card className="w-full p-6 flex justify-center">
      <CardContent className="p-3 relative">
        <RoundedImage
          url={imageUrl}
          width={100}
          height={100}
          altText={`player ${fullName}`}
        />
        <CardTitle className="text-sm mb-1">{fullName}</CardTitle>
        <CardDescription className="text-xs mb-2 line-clamp-2">
          aka "{nickName}"
        </CardDescription>

        <div className="flex items-center justify-between">
          <span className="text-sm font-bold">wins: {wins}</span>
          <div>{country}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlayerCard;
