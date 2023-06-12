import Image from "next/image";
import { useSearchParams } from "next/navigation";
// import { useState } from "react";

// style components
import {
  PDVisualEmpty,
  PDVisualImage,
  PDVisualImageContainer,
} from "@/styles/styled/components/ProjectDetail";

export default function DetailBackground() {
  const params = useSearchParams();
  const code = params.get("code");
  const imgURL = `/img/details/intro_${code}.jpg`;
  // const [hide, setHide] = useState<string>("opacity-0");

  return (
    <PDVisualImageContainer>
      <PDVisualImage>
        {code ? (
          <Image
            // className={`${hide}`}
            src={imgURL}
            alt={code}
            fill={true}
            placeholder="blur"
            blurDataURL={imgURL}
            // onLoadingComplete={() => setHide("")}
          />
        ) : (
          <PDVisualEmpty />
        )}
      </PDVisualImage>
    </PDVisualImageContainer>
  );
}
