"use client";

import { usePathname } from "next/navigation";
import { SwitchTransition, Transition } from "react-transition-group";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <SwitchTransition>
      <Transition
        key={pathname}
        timeout={1000}
        mountOnEnter={true}
        unmountOnExit={true}
      >
        {children}
      </Transition>
    </SwitchTransition>
  );
}
