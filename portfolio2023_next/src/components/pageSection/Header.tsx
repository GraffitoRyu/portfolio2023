import React from "react";

// style components
import {
  SectionHeaderContainer,
  HeaderDesc,
  HeaderTitle,
} from "@/styles/styled/components/pageSection";

// type
import { SectionHeaderTypes } from "@/types/profile";

export default function SectionHeader({
  empty,
  title,
  desc,
}: SectionHeaderTypes) {
  return (
    <SectionHeaderContainer className="section-header">
      {empty ? (
        ""
      ) : (
        <>
          <HeaderTitle className="capitalize">{title}</HeaderTitle>
          <HeaderDesc>
            {desc?.map((d, i) => (
              <React.Fragment
                key={`sectionHeaderDesc_${Math.floor(
                  Math.random() * 100000
                )}_${i}`}
              >
                <span>{d}</span>
                {i < desc.length - 1 ? <br /> : ""}
              </React.Fragment>
            ))}
          </HeaderDesc>
        </>
      )}
    </SectionHeaderContainer>
  );
}
