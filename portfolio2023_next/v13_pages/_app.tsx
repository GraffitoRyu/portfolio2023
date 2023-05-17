import type { AppProps /*, AppContext */ } from "next/app";
import PageHeader from "@/components/common/PageHeader";
import PageFooter from "@/components/common/PageFooter";

export { metadata } from "@/data/meta";

import "@/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageHeader />
      <Component {...pageProps} />
      <PageFooter />
    </>
  );
}
