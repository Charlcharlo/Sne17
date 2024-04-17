import PdfDownloader from "../../Assets/PdfDownloader/PdfDownloader";
import { useFlex } from "../../Context/FlexContext";
import { useLangSelected } from "../../Context/LanguageContext";
import LangStamp from "../LangStamp/LangStamp";
import ReadingOptions from "../ReadingOptions/ReadingOptions";
import "./Cover.css";

export default function Cover({ coverRef }) {
  // const lang = useLang();
  const langSelected = useLangSelected();
  const flex = useFlex();

  return (
    <div
      ref={coverRef}
      className={`cover-page col-end ${!langSelected && "scroll-locked"}`}
    >
      <div className="title-wrapper">
        <img
          className={`title-image ${langSelected && "large"}`}
          src={`${window.location.origin}${
            flex
              ? "/Sne17/Images/Sne-title-mobi.png"
              : "/Sne17/Images/Sne-title.png"
          }`}
          alt=""
        />
      </div>
      {!langSelected && (
        <div className="row-center lang-container">
          <LangStamp />
        </div>
      )}
      {langSelected && (
        <div className="centered-container">
          <PdfDownloader />
          <ReadingOptions />
        </div>
      )}
    </div>
  );
}

Cover.propTypes;
