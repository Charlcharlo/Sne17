import "./LangSelect.css";
import { useLang, useLangUpdate } from "../../Context/LanguageContext";
import { useSetInitial } from "../../Context/InitialContext";
import Check from "../../Assets/Icons/Check";

export default function LangSelect() {
  const updateLang = useLangUpdate();
  const lang = useLang();
  const setInitial = useSetInitial();

  function handleChange(e) {
    setInitial(true);
    updateLang(e.target.value);
  }

  return (
    <>
      <label className="lang-selector">
        <input
          type="radio"
          onChange={handleChange}
          name="lang"
          value="eng"
          checked={lang === "eng"}
        />
        <div className="row-start">
          <Check />
          <p>English</p>
        </div>
      </label>
      <label className="lang-selector">
        <input
          type="radio"
          onChange={handleChange}
          name="lang"
          value="zl"
          checked={lang === "zl"}
        />
        <div className="row-start">
          <Check />
          <p>isiZulu</p>
        </div>
      </label>
    </>
  );
}
