import { useLang, useLangSelected } from "../../Context/LanguageContext";
import LangStamp from "../LangStamp/LangStamp";
import ReadingOptions from "../ReadingOptions/ReadingOptions";
import "./Cover.css";

export default function Cover({ coverRef }) {
  const lang = useLang();
  const langSelected = useLangSelected();

  return (
    <div ref={coverRef} className="cover-page col-between">
      <div className="centered-container">
        <div className="title-wrapper">
          <img
            className={`title-image ${langSelected && "large"}`}
            src={`${window.location.origin}/Sne17/Images/Sne-title.png`}
            alt=""
          />
        </div>
        {langSelected && (
          <h1 className={`title-sub`}>
            {lang === "en"
              ? "And the 17 Symbols"
              : lang === "zl"
              ? "Kanye nophawu lwe-17"
              : ""}
          </h1>
        )}
        {!langSelected && (
          <div className="row-center lang-container">
            <LangStamp />
          </div>
        )}
      </div>
      {langSelected && <ReadingOptions />}
    </div>
  );
}

Cover.propTypes;
