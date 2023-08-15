import "./LangButtons.css";
import { useLang, useLangUpdate } from "../Context/LanguageContext";
import { useSetInitial } from "../Context/InitialContext";

export default function LangButtons() {
  const updateLang = useLangUpdate();
  const lang = useLang();
  const setInitial = useSetInitial();

  function handleChange(e) {
    setInitial(true);
    updateLang(e.target.value);
  }

  return (
    <div className="row-center">
      <label className="lang-selector">
        <input
          type="radio"
          onChange={handleChange}
          name="lang"
          value="en"
          checked={lang === "en"}
        />
        <div>English</div>
      </label>
      <label className="lang-selector">
        <input
          type="radio"
          onChange={handleChange}
          name="lang"
          value="zl"
          checked={lang === "zl"}
        />
        <div>isiZulu</div>
      </label>
    </div>
  );
}
