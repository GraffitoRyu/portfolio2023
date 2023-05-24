import { styled } from "styled-components";

const CareerList = styled.ul`
  width: 100%;
`;
const CareerItem = styled.li`
  width: 100%;
`;

export default function Career() {
  return (
    <CareerList className="career-list">
      <CareerItem>
        <div className="period flex items-center">
          <time>----. --.</time>
          <span></span>
          <time>----. --.</time>
        </div>
        <h3 className="flex items-center">
          <strong className="role">----</strong>
          <span className="company flex items-center">----</span>
        </h3>
        <p>----</p>
      </CareerItem>
    </CareerList>
  );
}
