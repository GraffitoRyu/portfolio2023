import { useMemo, type ReactNode } from "react";
import { useNavigate, useParams, useRouterState } from "@tanstack/react-router";
import {
  ProductRuntimeProvider,
  type ProductImageProps,
} from "@graffitoryu/ui/product/runtime/ProductRuntime";
import { getRouteCode } from "@graffitoryu/ui/product/hooks/navigation/useNavigation";
import { source } from "@/data/source";

function ViteProductImage({
  blurDataURL: _blurDataURL,
  fill,
  placeholder: _placeholder,
  ...props
}: ProductImageProps) {
  void _blurDataURL;
  void _placeholder;

  return (
    <img
      {...props}
      style={
        fill
          ? {
              height: "100%",
              inset: 0,
              objectFit: "cover",
              position: "absolute",
              width: "100%",
            }
          : undefined
      }
    />
  );
}

export default function ProductRuntimeAdapter({
  children,
}: {
  children: ReactNode;
}) {
  const navigate = useNavigate();
  const params = useParams({ strict: false });
  const pathname = useRouterState({ select: state => state.location.pathname });
  const value = useMemo(
    () => ({
      Image: ViteProductImage,
      params,
      pathname,
      push: (path: string) => {
        void navigate({
          resetScroll: getRouteCode(pathname) !== getRouteCode(path),
          to: path as never,
        });
      },
      replace: (path: string) => {
        void navigate({
          replace: true,
          resetScroll: getRouteCode(pathname) !== getRouteCode(path),
          to: path as never,
        });
      },
      source,
    }),
    [navigate, params, pathname],
  );

  return (
    <ProductRuntimeProvider value={value}>{children}</ProductRuntimeProvider>
  );
}
