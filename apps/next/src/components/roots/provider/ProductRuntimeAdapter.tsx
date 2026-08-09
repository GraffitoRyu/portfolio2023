"use client";

import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useMemo, type ReactNode } from "react";
import {
  ProductRuntimeProvider,
  type ProductImageProps,
} from "@graffitoryu/ui/product/runtime/ProductRuntime";
import { source } from "@/data";

function NextProductImage(props: ProductImageProps) {
  return <Image {...props} />;
}

export default function ProductRuntimeAdapter({
  children,
}: {
  children: ReactNode;
}) {
  const params = useParams<Record<string, string>>();
  const pathname = usePathname();
  const router = useRouter();
  const value = useMemo(
    () => ({
      Image: NextProductImage,
      params,
      pathname,
      push: (path: string) => router.push(path, { scroll: false }),
      replace: (path: string) => router.replace(path, { scroll: false }),
      source,
    }),
    [params, pathname, router],
  );

  return (
    <ProductRuntimeProvider value={value}>{children}</ProductRuntimeProvider>
  );
}
