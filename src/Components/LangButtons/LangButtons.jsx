import "./LangButtons.css";
import { useLang, useLangUpdate } from "../Context/LanguageContext";

export default function LangButtons() {
  const updateLang = useLangUpdate();
  const lang = useLang();

  function handleChange(e) {
    updateLang(e.target.value);
  }

  return (
    <div className="row-center" onChange={handleChange}>
      <label className="lang-selector">
        <input type="radio" name="lang" value="en" checked={lang === "en"} />
        <div>English</div>
      </label>
      <label className="lang-selector">
        <input type="radio" name="lang" value="zl" checked={lang === "zl"} />
        <div>isiZulu</div>
      </label>
    </div>
  );
}
