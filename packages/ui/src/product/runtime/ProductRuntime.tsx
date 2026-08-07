"use client";

import {
  createContext,
  useContext,
  type ComponentType,
  type ReactNode,
} from "react";
import type { DataSource } from "@graffitoryu/preset-data";

export interface ProductImageProps {
  alt: string;
  src: string;
  fill?: boolean;
  loading?: "eager" | "lazy";
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
}

export interface ProductRuntimeValue {
  Image: ComponentType<ProductImageProps>;
  params: Record<string, string | undefined>;
  pathname: string;
  push: (path: string) => void;
  replace: (path: string) => void;
  source: DataSource;
}

const ProductRuntimeContext = createContext<ProductRuntimeValue | null>(null);

export function ProductRuntimeProvider({
  children,
  value,
}: {
  children: ReactNode;
  value: ProductRuntimeValue;
}) {
  return (
    <ProductRuntimeContext.Provider value={value}>
      {children}
    </ProductRuntimeContext.Provider>
  );
}

export function useProductRuntime(): ProductRuntimeValue {
  const runtime = useContext(ProductRuntimeContext);

  if (runtime === null) throw new Error("ProductRuntimeProvider가 필요합니다.");

  return runtime;
}

export function ProductImage(props: ProductImageProps) {
  const { Image } = useProductRuntime();
  return <Image {...props} />;
}
