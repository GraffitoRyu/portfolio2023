# AGENTS.md

## JSDoc And Code Comments

- 선언과 공개 계약의 JSDoc은 `/**`, 본문, `*/`를 각각 별도 줄에 두는 multiline 형식으로 작성한다. 한 줄 JSDoc은 사용하지 않는다.
- public API, Props, component, Hook, utility와 호출자가 유지보수 계약을 알아야 하는 경계에는 목적, 입력, 반환, 예외와 비직관적 동작을 문서화한다.
- interface와 Props object에는 block JSDoc을, 각 field에는 field JSDoc을 작성한다. Props field가 union alias를 사용하면 alias명만 설명하지 않고 block `@property`와 field JSDoc 양쪽에 허용 member 전체를 정확한 literal로 명시한다.
- object union은 discriminator, variant별 필수 field와 공통 field를 block JSDoc과 field JSDoc 양쪽에 구분해 명시한다.
- 변경한 비자명한 분기, 변환, 병합 우선순위, retry/fallback, stale/race guard, state 동기화, side effect와 경계 결정에는 현재 의도, 제약 또는 용법을 가장 가까운 안정적인 위치에 기록한다. 선언 계약은 JSDoc, 구현 block은 바로 위 `//`를 사용한다.
- source 주석은 현재 코드가 존재하는 이유와 계약만 현재형으로 설명한다. 날짜, ticket, 추가·수정·삭제 이력과 제거된 workaround의 과거 이유는 Git 또는 소유 CONTEXT가 담당한다. 식별자·문법 번역과 자명한 단계 나열은 작성하지 않는다.
- 문서화 작업은 `.agents/skills/doc/SKILL.md`, 변경 source 검토는 `.agents/skills/review/SKILL.md`를 사용한다.
