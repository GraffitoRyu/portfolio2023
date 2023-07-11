// import { useParams } from "next/navigation";
// import { useLayoutEffect, useState } from "react";
// import { useRecoilValue } from "recoil";

// // components
// // import DetailMediaItem from "./DetailMediaItem";

// // style components
// // import { PDMediaContainer } from "@/styles/styled/components/ProjectDetail";

// // types
// import { MediaType } from "@/types/projects";
// import { DetailTypes } from "@/types/projectDetails";

// // state
// import { detailData } from "@/states/detail";

export default function DetailMediaContainer() {
  // const { category } = useParams();
  // const data = useRecoilValue<DetailTypes>(detailData);
  // const [media, setMedia] = useState<MediaType[] | []>([]);

  // useLayoutEffect(() => {
  //   if (!category) return;

  //   const d = data[category]?.media;
  //   if (d) setMedia(d);
  // }, [category, data]);

  return null;
  // return (
  // <PDMediaContainer>
  //   {media.map((m: MediaType, i: number) => (
  //     <DetailMediaItem key={`detailMedia_${category}_${i}`} data={m} />
  //   ))}
  // </PDMediaContainer>
  // );
}
