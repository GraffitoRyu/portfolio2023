import open from "open";
import getLocalNetwork from "./getLocalNetwork.mjs";

export default function openBrowserLocalNextServer() {
  if (process.env.NODE_ENV !== "development") return;

  const PORT = 3000;
  const localhost = `https://localhost:${PORT}`;
  const network = `https://${getLocalNetwork()}:${PORT}`;

  console.log(`
      - Local: ${localhost}
      - Network: ${network}
    `);

  open(localhost);
}
