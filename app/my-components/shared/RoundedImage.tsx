"use client";
import { useState } from "react";
import Image from "next/image";

type RoundedImageProps = {
  url: string;
  className: string;
  altText: string;
  fallbackSrc: string;
};

const RoundedImage = ({
  url,
  className,
  altText,
  fallbackSrc,
}: RoundedImageProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`${className} relative`}>
      <Image
        src={imageError ? fallbackSrc : url}
        objectFit="cover"
        fill
        alt={altText}
        className="rounded-full aspect-square"
        onError={() => setImageError(true)}
      />
    </div>
  );
};

export default RoundedImage;
