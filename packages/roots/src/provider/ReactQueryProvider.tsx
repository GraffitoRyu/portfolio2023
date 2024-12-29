"use client";

import {
  defaultShouldDehydrateQuery,
  isServer,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

/**
 * 클라이언트 단에서의 React Query client
 * @type {QueryClient | undefined}
 */
let browserQueryClient: QueryClient | undefined = undefined;

/**
 * React Query client 생성
 * - 서비스 전역에 적용할 쿼리옵션을 사전에 지정하여 생성
 * @return {QueryClient}
 */
function makeQueryClient(): QueryClient {
  return new QueryClient({
    // react-query 전역 설정
    defaultOptions: {
      queries: {
        // onError: queryErrorHandler,
        staleTime: 600000,
        gcTime: 900000, // 기존 cacheTime에서 명칭 변경, 원래 "가비지 콜렉션 시간"을 의미하였음.
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        retry: false,
      },
      dehydrate: {
        // include pending queries in dehydration
        shouldDehydrateQuery: query =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === "pending",
      },
    },
  });
}

/**
 * React Query client 생성
 * @return {QueryClient}
 */
export function getQueryClient(): QueryClient {
  if (isServer) {
    // Server: always make a new query client
    return makeQueryClient();
  } else {
    // Browser: make a new query client if we don't already have one
    // This is very important, so we don't re-make a new client if React
    // suspends during the initial render. This may not be needed if we
    // have a suspense boundary BELOW the creation of the query client
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

/**
 * ReactQuery 상태 공급자
 * @component
 * @see https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr#prefetching-and-dehydrating-data
 * @see https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr#nesting-server-components
 */
export default function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // NOTE: Avoid useState when initializing the query client if you don't
  //       have a suspense boundary between this and the code that may
  //       suspend because React will throw away the client on the initial
  //       render if it suspends and there is no boundary
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
