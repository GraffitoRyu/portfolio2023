"use client";

import { ReactNode } from "react";
import {
  QueryClient,
  defaultShouldDehydrateQuery,
  isServer,
} from "@tanstack/react-query";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false,
//       refetchOnMount: false,
//       retry: false,
//       staleTime: 5 * 60 * 60 * 1000,
//       gcTime: Infinity,
//     },
//   },
// });

let browserQueryClient: QueryClient | undefined = undefined;

/**
 * Jotai 상태 공급자
 * - Roots > Provider; Jotai
 * @component
 */
export default function ReactQueryProvider({
  children,
}: {
  children: ReactNode;
}) {
  // const 
  const queryClient = () => {
    if (isServer)
      return new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            retry: false,
            staleTime: 5 * 60 * 60 * 1000,
            gcTime: Infinity,
          },
          dehydrate: {
            // include pending queries in dehydration
            shouldDehydrateQuery: query =>
              defaultShouldDehydrateQuery(query) ||
              query.state.status === "pending",
          },
        },
      });

      return browserQueryClient || ;
  };

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={true} position="bottom-right" /> */}
    </QueryClientProvider>
  );
}

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
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



export function getQueryClient() {
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
