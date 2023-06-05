import { useRecoilValue } from "recoil";

// state
import { detailData } from "@/states/detail";

// types
import { DetailTypes } from "@/types/projects";
import { useEffect, useState } from "react";
import SplitByNewLine from "@/components/util/SplitByNewLine";

export default function DetailTitle() {
  const detail = useRecoilValue<DetailTypes>(detailData);
  // const [titleArr, setTitleArr] = useState<string[]>([]);

  useEffect(() => {
    console.log(detail);
    // console.log(summary);
    // if (summary.title) setTitleArr(SplitByNewLine(summary.title));
  }, []);

  return <h2></h2>;
}
