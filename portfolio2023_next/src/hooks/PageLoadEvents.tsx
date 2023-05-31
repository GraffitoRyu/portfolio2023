"use client";

import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { pageState, pageStateTypes } from "@/states/page";

export function PageLoadEvents() {
  const [page, setPage] = useRecoilState<pageStateTypes>(pageState);

  useEffect(() => {
    // const url = pathname + searchParams.toString();
    // console.log(url);
    // You can now use the current URL
    // ...
    if (!page.init) {
      console.log(`페이지 최초 로드 완료`);
      setPage(prev => ({ ...prev, init: true }));
    } else {
      console.log(`페이지 변경: `, page.cur);
      setPage(prev => ({ ...prev, loaded: true }));
    }
  }, [page.cur, page.init, setPage]);

  return null;
}
