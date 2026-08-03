import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useRef,
} from "react";
import { useRouterState } from "@tanstack/react-router";

type ProjectInteractionContextValue = {
  focusProjectTrigger: () => void;
  hasProjectTrigger: () => boolean;
  setProjectTrigger: (trigger: HTMLButtonElement) => void;
};

const ProjectInteractionContext =
  createContext<ProjectInteractionContextValue | null>(null);

export function useProjectInteraction() {
  const context = useContext(ProjectInteractionContext);

  if (!context) {
    throw new Error(
      "useProjectInteraction must be used within AppInteractionBoundary",
    );
  }

  return context;
}

export default function AppInteractionBoundary({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = useRouterState({
    select: state => state.location.pathname,
  });
  const projectTriggerRef = useRef<HTMLButtonElement | null>(null);

  const setProjectTrigger = useCallback((trigger: HTMLButtonElement) => {
    projectTriggerRef.current = trigger;
  }, []);

  const focusProjectTrigger = useCallback(() => {
    const trigger = projectTriggerRef.current;
    const fallback = document.querySelector<HTMLElement>("#projects-title");
    const target = trigger?.isConnected ? trigger : fallback;

    if (!target) return;

    target.focus({ preventScroll: true });
  }, []);

  const hasProjectTrigger = useCallback(
    () => projectTriggerRef.current?.isConnected === true,
    [],
  );

  useLayoutEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    ).filter(element => element.dataset.revealed !== "true");

    if (elements.length === 0) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach(element => {
        element.dataset.revealed = "true";
      });
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;

          (entry.target as HTMLElement).dataset.revealed = "true";
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12%", threshold: 0.08 },
    );

    elements.forEach(element => {
      element.dataset.revealReady = "true";
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <ProjectInteractionContext.Provider
      value={{ focusProjectTrigger, hasProjectTrigger, setProjectTrigger }}
    >
      {children}
    </ProjectInteractionContext.Provider>
  );
}
