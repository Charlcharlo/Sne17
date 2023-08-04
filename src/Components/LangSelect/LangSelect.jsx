import { useLang, useLangUpdate } from "../Context/LanguageContext";
import "./LangSelect.css";

export default function LangSelect() {
  const updateLang = useLangUpdate();
  const lang = useLang();

  function handleChange(e) {
    updateLang(e.target.value);
  }

  return (
    <select onChange={handleChange} value={lang}>
      <option value="en">English</option>
      <option value="zl">isiZulu</option>
    </select>
  );
}
