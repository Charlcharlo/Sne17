import { useLang } from "../Context/LanguageContext";
import LangButtons from "../LangButtons/LangButtons";
import "./Cover.css";

export default function Cover({ coverRef }) {
  const lang = useLang();

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
    </div>
  );
}

Cover.propTypes;
