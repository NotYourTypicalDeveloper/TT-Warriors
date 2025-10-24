"use client";
import { useState } from "react";
import Image from "next/image";

type RoundedImageProps = {
  url: string;
  width: number;
  height: number;
  altText: string;
  fallbackSrc: string;
};

const RoundedImage = ({
  url,
  width,
  height,
  altText,
  fallbackSrc,
}: RoundedImageProps) => {
  const [imageError, setImageError] = useState(false);
  const urlToDisplay = url === null ? fallbackSrc : url;

  return (
    <div style={{ height: height, width: width }} className="relative">
      <Image
        src={imageError ? fallbackSrc : url}
        objectFit="cover"
        fill
        alt={altText}
        className="rounded-full aspect-square object-cover"
        onError={() => setImageError(true)}
      />
    </div>
  );
};

export default RoundedImage;
