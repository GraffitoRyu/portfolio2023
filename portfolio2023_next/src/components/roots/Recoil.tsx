"use client";

import { ReactNode } from "react";
import { RecoilEnv, RecoilRoot } from "recoil";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export default function RecoilContainer({ children }: { children: ReactNode }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
