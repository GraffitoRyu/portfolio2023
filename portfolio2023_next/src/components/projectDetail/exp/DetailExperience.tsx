"use client";

import { useRecoilValue } from "recoil";

// style components
import {
  PDExpContainer,
  PDExpDesc,
  PDExpList,
  PDExpSection,
  PDExpTitle,
} from "@/styles/styled/components/ProjectDetail";

// state
import { screenSizeState } from "@/states/screen";

// type
import { ScreenSizeTypes } from "@/types/state";

export default function DetailExperience() {
  const { windowHeight } = useRecoilValue<ScreenSizeTypes>(screenSizeState);

  return (
    <PDExpSection className="detail-section-exp" $wh={windowHeight}>
      <PDExpContainer>
        <PDExpTitle>
          <span>Experience</span>
        </PDExpTitle>
        <PDExpList>
          <PDExpDesc>
            <span>
              이전 경력에서는 단순 마크업과 사용자 DOM 이벤트 구현에 대한 경험만
              해오다가, 이 프로젝트를 통해 처음으로 프론트엔드 작업 경험
            </span>
          </PDExpDesc>
          <PDExpDesc>
            <span>AJAX를 통한 RESTful API 호출</span>
          </PDExpDesc>
          <PDExpDesc>
            <span>AJAX를 통해 받은 JSON 데이터의 가공 및 업데이트 처리</span>
          </PDExpDesc>
          <PDExpDesc>
            <span>WebSocket을 통한 실시간 양방향 데이터 송수신</span>
          </PDExpDesc>
          <PDExpDesc>
            <span>D3.js를 활용한 SVG 그래픽 생성 및 업데이트</span>
          </PDExpDesc>
          <PDExpDesc>
            <span>CSS를 활용하여 HUD 그래픽에 실시간 데이터 연동 처리</span>
          </PDExpDesc>
          <PDExpDesc>
            <span>
              컴포넌트 및 각 기능에 대한 모듈화 작업을 지속적으로 시도하였고,
              49% 정도까지 진행까지 하였으나 내부 사정으로 완료하지 못함
            </span>
          </PDExpDesc>
        </PDExpList>
      </PDExpContainer>
    </PDExpSection>
  );
}
