import React from "react";

// type
import { IntroTypes } from "@/types/section";

// style components
import { IntroDesc, IntroTitle } from "@/styles/styled/components/PageVisual";

// util components
import ParseDescNewLine from "@/components/util/ParseDescNewLine";

export default function PageIntro({ title, desc }: IntroTypes) {
  return (
    <div>
      <IntroTitle>
        <ParseDescNewLine data={title} />
      </IntroTitle>
      <IntroDesc>
        <ParseDescNewLine data={desc} />
      </IntroDesc>
    </div>
  );
}
