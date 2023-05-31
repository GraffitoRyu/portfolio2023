"use client";

import { usePathname } from "next/navigation";
import { CSSTransition, SwitchTransition } from "react-transition-group";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <SwitchTransition>
      <CSSTransition
        key={pathname}
        classNames={`trans`}
        timeout={1000}
        mountOnEnter={true}
        unmountOnExit={true}
      >
        {children}
      </CSSTransition>
    </SwitchTransition>
  );
}
