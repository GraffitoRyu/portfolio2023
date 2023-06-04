import React from "react";

// style components
import {
  SectionHeaderContainer,
  HeaderDesc,
  HeaderTitle,
} from "@/styles/styled/components/pageSection";

// type
import { SectionHeaderTypes } from "@/types/profile";

// util components
import ParseDescNewLine from "@/components/util/ParseDescNewLine";

export default function SectionHeader({
  empty,
  title,
  desc,
}: SectionHeaderTypes) {
  return (
    <SectionHeaderContainer className="w-full lg:w-1/2">
      {empty ? (
        ""
      ) : (
        <>
          <HeaderTitle>{title}</HeaderTitle>
          <HeaderDesc>
            <ParseDescNewLine data={desc} />
          </HeaderDesc>
        </>
      )}
    </SectionHeaderContainer>
  );
}
