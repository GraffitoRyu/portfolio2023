import React, { useEffect, useState } from 'react';

import PageVisual from "../../components/common/pageVisual";

export default function profilePage(props) {
  return (
    <main id="pageContents" className="page-contents page-profile">
      <PageVisual borderText="Ready for" filledText="interaction" />
      <section className="page-contents"></section>
    </main>
  );
}