import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

// style components
import {
  PDVisualEmpty,
  PDVisualImage,
} from "@/styles/styled/components/ProjectDetail";

export default function DetailVisual() {
  const { category } = useParams();
  const [hide, setHide] = useState<string>("opacity-0");

  return (
    <>
      <PDVisualImage>
        {category ? (
          <Image
            className={`${hide}`}
            src={`/img/details/intro_${category}.jpg`}
            alt={category}
            fill={true}
            onLoadingComplete={() => setHide("")}
          />
        ) : (
          <PDVisualEmpty />
        )}
      </PDVisualImage>
    </>
  );
}
