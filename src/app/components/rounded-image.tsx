import Image from "next/image";

export function RoundedImage({
  src,
  alt,
  className = "",
  sizes,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <span
      className={`relative block overflow-hidden rounded-bl-[50px] rounded-tr-[50px] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes ?? "(min-width: 1024px) 33vw, 100vw"}
        className="object-cover"
      />
    </span>
  );
}
