import Image from "next/image";

type RoundedImageProps = {
  url: string;
  width: number;
  height: number;
  altText: string;
};

const RoundedImage = ({ url, width, height, altText }: RoundedImageProps) => {
  return (
    <>
      <Image
        src={url}
        height={height}
        width={width}
        alt={altText}
        className="rounded-full aspect-square object-cover"
      />
    </>
  );
};

export default RoundedImage;
