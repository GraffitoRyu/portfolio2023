"use client";

import Image from "next/image";
import { resolvePublicAssetUrl } from "@/data/assets";

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
  const assetUrl = resolvePublicAssetUrl(src);

  return (
    <Image
      src={assetUrl}
      alt={alt}
      fill={true}
      loading="eager"
      placeholder="blur"
      blurDataURL={assetUrl}
    />
  );
}
function DetailMediaVideo({ src: videoId }: { src: string }) {
  return (
    <div className="iframe-ratio-wrapper">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}?mute=1&autoplay=1&loop=1&playlist=${videoId}`}
        title="류대현 포트폴리오 프로젝트 영상 참조"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        referrerPolicy="strict-origin-when-cross-origin"
        // loading="lazy"
        allowFullScreen
      ></iframe>
    </div>
  );
}
