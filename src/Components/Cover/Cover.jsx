import { useLang, useLangSelected } from "../Context/LanguageContext";
import LangButtons from "../LangButtons/LangButtons";
import PdfDownloader from "../PdfDownloader/PdfDownloader";
import "./Cover.css";

export default function Cover({ coverRef }) {
  const lang = useLang();
  const langSelected = useLangSelected();

  return (
    <div ref={coverRef} className="cover-page centered-container">
      <h1>
        {lang === "en"
          ? "Hello"
          : lang === "zl"
          ? "Sawubona"
          : "Please Choose a language"}
      </h1>
      <LangButtons />
      {langSelected && <PdfDownloader />}
    </div>
  );
}

Cover.propTypes;
