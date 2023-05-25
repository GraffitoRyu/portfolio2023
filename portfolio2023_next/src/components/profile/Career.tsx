import { CareerTypes } from "@/types/profile";
import Period from "../period/Period";

export default async function Career() {
  const careerData: CareerTypes[] | [] = (await getCareer()) ?? [];

  return (
    <ul className="career-list w-full">
      {careerData?.map((c: CareerTypes) => (
        <li className="w-full" key={c.code}>
          <Period date={c.period} />
          <h3 className="flex items-center">
            <strong className="role">{c.role}</strong>
            <span className="company flex items-center">{c.company}</span>
          </h3>
          <p>{c.desc}</p>
        </li>
      )) ?? ""}
    </ul>
  );
}

function PeriodTime({ date }: { date: string }): JSX.Element {
  const d = new Date(date);
  return (
    <time>
      {d.toLocaleString("ko-KR", {
        month: "short",
        year: "numeric",
      })}
    </time>
  );
}

async function getCareer() {
  const res = await fetch("http://localhost:3000/json/career.json");
  // if (!res.ok) throw new Error("Failed to fetch Career Data");
  const data = await res.json();
  return data;
}
