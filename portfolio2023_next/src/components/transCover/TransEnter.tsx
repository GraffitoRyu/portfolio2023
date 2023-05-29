"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRecoilState } from "recoil";
import { pageState, pageStateTypes } from "@/states/page";

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [page, setPage] = useRecoilState<pageStateTypes>(pageState);

  useEffect(() => {
    const url = pathname + searchParams.toString();
    console.log(url);
    // You can now use the current URL
    // ...
    if (!page.init) setPage(prev => ({ ...prev, init: true }));
    else setPage(prev => ({ ...prev, loaded: true }));
  }, [pathname, searchParams]);

  return null;
}
