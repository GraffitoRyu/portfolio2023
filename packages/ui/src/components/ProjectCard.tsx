import { forwardRef } from "react";

import { Button, type ButtonProps } from "./Button";

export type ProjectCardProps = ButtonProps;

export const ProjectCard = forwardRef<HTMLButtonElement, ProjectCardProps>(
  function ProjectCard(props, ref) {
    return <Button ref={ref} {...props} />;
  },
);
