import "../../scss/sample.scss";

export default function projectItem(props) {
  return (
    <div className="common-wrap">
      <div className="project-item">
        <div className="project-item-inner flex flex-col">
          <header className="project-header">
            <figure className="project-arrow ml-auto">
              <span className="arrow-line"></span>
            </figure>
            <h3 className="project-name">Lorem ipsum dolor sit amet consectetur</h3>
          </header>
          <div className="project-contents flex flex-col">
            <p className="project-comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto praesentium, maxime suscipit minima</p>
            <div className="project-feature flex mt-auto">
              <ul className="project-part flex items-center">
                <li>
                  <span>프론트엔드 개발</span>
                </li>
                <li>
                  <span>웹 퍼블리싱</span>
                </li>
                <li>
                  <span>유지보수</span>
                </li>
              </ul>
              <div className="project-period ml-auto flex items-center">
                <time>2019_12</time>
                <span className="period-bar"></span>
                <time>2022_12</time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
