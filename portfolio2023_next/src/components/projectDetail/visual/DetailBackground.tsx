import Image from "next/image";
import { useParams } from "next/navigation";
// import { useState } from "react";

// style components
import {
  PDVisualEmpty,
  PDVisualImage,
} from "@/styles/styled/components/ProjectDetail";

export default function DetailBackground() {
  const { category } = useParams();
  const imgURL = `/img/details/intro_${category}.jpg`;
  // const [hide, setHide] = useState<string>("opacity-0");

  return (
    <PDVisualImage>
      {category ? (
        <Image
          // className={`${hide}`}
          src={imgURL}
          alt={category}
          fill={true}
          placeholder="blur"
          blurDataURL={imgURL}
          // onLoadingComplete={() => setHide("")}
        />
      ) : (
        <PDVisualEmpty />
      )}
    </PDVisualImage>
  );
}
