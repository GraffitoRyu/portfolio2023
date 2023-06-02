import React from "react";

// style components
import { IntroTypes } from "@/types/section";

// util components
import ParseDescNewLine from "@/hooks/ParseDescNewLine";
import { IntroDesc, IntroTitle } from "@/styles/styled/components/pageVisual";

export default function PageIntro({ title, desc }: IntroTypes) {
  return (
    <div>
      <IntroTitle>{<ParseDescNewLine data={title} />}</IntroTitle>
      <IntroDesc>{<ParseDescNewLine data={desc} />}</IntroDesc>
    </div>
  );
}
