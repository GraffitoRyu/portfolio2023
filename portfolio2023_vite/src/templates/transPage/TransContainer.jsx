import React, { createRef } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  TransitionGroup,
  CSSTransition,
  SwitchTransition,
} from "react-transition-group";

// components
import ScrollContainer from "./ScrollContainer";
import TransCover from "../../components/trans/Cover";
import ProjectDetails from "../projectDetails/Container";

// data
import { sitemapData } from "../../data/sitemap";

// state
import { pageState } from "../../hooks/state/page";

export default function TransContainer() {
  const loc = useLocation();
  const nowPagePath = loc.pathname;
  const [page, setPageState] = useRecoilState(pageState);
  const _outlet = useOutlet();

  // 페이지 전환 컨텐츠 ref 설정
  const routesData = sitemapData
    .filter(r => !r.external && !r.contact)
    .map(d => ({ ...d, nodeRef: createRef() }));
  const { nodeRef } = routesData.find(r => r.path === nowPagePath) ?? {};

  const updateTransState = state => {
    // console.log(`[ UPDATE TRANSITION STATE ] :: state: `, state);
    setPageState(prev => ({ ...prev, transStep: state }));
  };

  return (
    <SwitchTransition>
      <CSSTransition
        classNames="trans"
        key={nowPagePath}
        nodeRef={nodeRef}
        timeout={page.transDuration}
        unmountOnExit
        // transitionGroup: enter -> exit => entering -> exiting -> entered -> exited
        // SwitchTransition: exit -> exiting -> exited -> enter -> entering -> entered
        onEnter={() => updateTransState("enter")}
        onEntering={() => updateTransState("entering")}
        onEntered={() => updateTransState("entered")}
        onExit={() => updateTransState("exit")}
        onExiting={() => updateTransState("exiting")}
        onExited={() => updateTransState("exited")}
      >
        {state => {
          // 스크롤 컨테이너 분리; 페이지 이동 시 스크롤 안먹힘 수정 필요
          return (
            <div
              className="w-full h-full overflow-hidden absolute top-0 left-0"
              ref={nodeRef}
            >
              <ScrollContainer contents={_outlet} />
            </div>
          );
        }}
      </CSSTransition>
    </SwitchTransition>
  );
}
