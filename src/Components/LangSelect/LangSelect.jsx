import { useLang, useLangUpdate } from "../Context/LanguageContext";
import "./LangSelect.css";

export default function LangSelect({ setLangSelected }) {
  const updateLang = useLangUpdate();
  const lang = useLang();

  function handleChange(e) {
    updateLang(e.target.value);
    setLangSelected(true);
  }

  return (
    <select onChange={handleChange}>
      <option value="en" selected={lang === "en"}>
        English
      </option>
      <option value="zl" selected={lang === "zl"}>
        isiZulu
      </option>
    </select>
  );
}

LangSelect.propTypes;
