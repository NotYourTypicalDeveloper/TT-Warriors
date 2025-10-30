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
        style={{ objectFit: "cover" }}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt={altText}
        className="rounded-full aspect-square"
        onError={() => setImageError(true)}
      />
    </div>
  );
};

export default RoundedImage;
