"use client";

import {
  QueryClient,
  QueryClientProvider,
  defaultShouldDehydrateQuery,
  isServer,
} from "@tanstack/react-query";

let browserQueryClient: QueryClient | undefined = undefined;

/**
 * QueryClient를 생성하는 함수입니다.
 * @return {QueryClient} 생성된 QueryClient 인스턴스
 */
function makeQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 60 * 1000,
        gcTime: Infinity,
        refetchOnMount: false,
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
 * getQueryClient 함수는 QueryClient를 반환합니다.
 * @return {QueryClient} QueryClient 인스턴스
 */
function getQueryClient(): QueryClient {
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
 * Root/Provider; React Query 상태 공급자
 * @component
 */
export default function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={true} position="bottom-right" /> */}
    </QueryClientProvider>
  );
}
