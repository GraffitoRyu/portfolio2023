import { ProjectsType } from "@/types/projects";
import Period from "../period/Period";

export default function ProjectItem({ summary }: ProjectsType) {
  return (
    <li className="w-full">
      <button className="relative w-full overflow-hidden select-auto">
        <div className="basic-box w-3/5 relative">
          <Period className="absolute left-full" date={summary.period} />
          <h3 className="text-right">{summary.title}</h3>
          <p className="text-right">{summary.desc}</p>
          <ul className="flex items-center justify-end">
            {summary.role?.map((d: string, i: number) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
        <div className="hover-box absolute top-full"></div>
      </button>
    </li>
  );
}
