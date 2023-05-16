"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

export default function Gnb() {
  const curPath = usePathname();
  const GnbBtn = styled(Link)`
    color: ${props => (props.href === curPath ? "red" : "blue")};
  `;
  return (
    <nav className='gnb flex items-center'>
      <GnbBtn href='/'>프로필</GnbBtn>
      <GnbBtn href='/projects'>프로젝트</GnbBtn>
    </nav>
  );
}
