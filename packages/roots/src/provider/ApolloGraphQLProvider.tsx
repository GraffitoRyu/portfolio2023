"use client";

import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support";

/**
 * 인스턴스 생성
 */
const makeClient = () => {
  const httpLink = new HttpLink({
    uri: "/api/graphQL",
  });
  return new ApolloClient({
    // ssrMode: typeof window === "undefined", // deprecated
    cache: new InMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({ stripDefer: true }),
            httpLink,
          ])
        : httpLink,
  });
};

/**
 * GraphQL 활용을 위한 Apollo 클라이언트 공급자
 * @component
 */
export default function ApolloGraphQLProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
