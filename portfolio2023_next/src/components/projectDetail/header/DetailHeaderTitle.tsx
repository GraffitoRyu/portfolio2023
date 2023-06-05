import { Suspense } from "react";
import DetailTitle from "../DetailTitle";

export default function DetailHeaderTitle() {
  return (
    <Suspense fallback={<div>Title loading...</div>}>
      <DetailTitle />
    </Suspense>
  );
}
