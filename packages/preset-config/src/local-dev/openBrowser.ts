import open from "open";
import getLocalNetwork from "./getLocalNetwork";

export default async function openBrowserLocalNextServer(
  props?: Partial<{
    port: number;
    https: boolean;
  }>,
) {
  if (process.env.NODE_ENV !== "development" || typeof open !== "function")
    return;

  const PORT = props?.port || 3090;
  const protocol = props?.https ? "https" : "http";
  const localhost = `${protocol}://localhost:${PORT}`;
  const network = `${protocol}://${getLocalNetwork()}:${PORT}`;

  console.log(`
      - Local: ${localhost}
      - Network: ${network}
    `);

  await open(localhost);
}
