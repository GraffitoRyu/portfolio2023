export const transCoverData = {
  profile: {
    title: "profile",
    desc: "",
  },
  projects: {
    title: "projects",
    desc: "",
  },
} satisfies Record<
  "profile" | "projects",
  { title: string; desc: string }
>;
