import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
export default function routerRoot() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </RecoilRoot>
  );
}
