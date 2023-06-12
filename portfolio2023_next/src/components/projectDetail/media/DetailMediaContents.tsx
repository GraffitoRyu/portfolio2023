import Image from "next/image";

export default function DetailMediaContents({
  referType,
  src,
  alt,
}: {
  referType: string;
  src: string;
  alt: string;
}) {
  switch (referType) {
    case "image":
      return <DetailMediaImage src={src} alt={alt} />;
    case "video":
      return <DetailMediaVideo src={src} />;
    default:
      return null;
  }
}

function DetailMediaImage({ src, alt }: { src: string; alt: string }) {
  return <Image src={src} alt={alt} fill={true} />;
}
function DetailMediaVideo({ src }: { src: string }) {
  return (
    <video preload="auto" muted loop controls>
      <source src={src} type="video/mp4" />
    </video>
  );
}
