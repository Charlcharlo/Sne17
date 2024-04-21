import "./SDGs.css";
import { eng } from "./text";
import ShareButtons from "../ShareButtons/ShareButtons";
import BackToTop from "../BackToTop/BackToTop";

export default function SDGs() {
  const { goals, title, subTitle, body } = eng;
  function mapIcons(goal, i) {
    const num = i + 1;
    return (
      <img
        key={`sdg-${i}`}
        src={`${window.location.origin}/Sne17/sdg-icons/E-WEB-Goal-${num}.png`}
        className="sdg-icon"
        alt={goal}
      />
    );
  }

  return (
    <div className="full-page">
      <div className="sdg-titles">
        <h1 className="title">{title}</h1>
        <h2 className="sub-title">{subTitle}</h2>
      </div>
      <img
        className="sdg-title-img"
        src={`${window.location.origin}/Sne17/sdg-icons/E_SDG_logo_horizontal.png`}
      />
      <div className="row-center-flex sdg-container">
        {goals.map(mapIcons)}
        <img
          src={`${window.location.origin}/Sne17/sdg-icons/sdg-wheel.png`}
          className="sdg-icon"
          alt="SDG Wheel"
        />
      </div>
      <p className="body-text sdg-text">{body}</p>
      <p className="body-text sdg-text">
        [Source:{" "}
        <a href="https://www.undp.org/publications/sustainable-development-goals-booklet">
          UNDP - SDGs Booklet
        </a>
        ]
      </p>
      <ShareButtons />
      <BackToTop />
    </div>
  );
}
