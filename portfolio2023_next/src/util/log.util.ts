import { currentTime, formatDate } from "./time.util";

export default function apiLog({
  route,
  messages,
}: {
  route: string;
  messages?: string;
}) {
  return console.log(
    `[${formatDate()} ${currentTime()}][NextServer][${route}]`,
    messages,
  );
}
