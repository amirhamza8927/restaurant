import Image from "next/image";

export function RoundedImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <span
      className={`relative block overflow-hidden rounded-bl-[50px] rounded-tr-[50px] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 33vw, 100vw"
        className="object-cover"
      />
    </span>
  );
}
