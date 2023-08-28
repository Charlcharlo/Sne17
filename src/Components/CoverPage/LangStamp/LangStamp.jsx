import SdgWheel from "../../Assets/Icons/SdgWheel";
import { useSetInitial } from "../../Context/InitialContext";
import { useLangUpdate } from "../../Context/LanguageContext";
import "./LangStamp.css";

export default function LangStamp() {
  const updateLang = useLangUpdate();
  const setInitial = useSetInitial();

  function setLang(e) {
    setInitial(true);
    updateLang(e.target.value);
  }
  return (
    <div className="lang-stamp row-between">
      <button className="stamp-button" onClick={setLang} value="en">
        English
      </button>
      <button className="stamp-button" onClick={setLang} value="zl">
        isiZulu
      </button>
      <div className="stamp-icon-outline centered-container">
        <div className="stamp-icon">
          <SdgWheel />
        </div>
      </div>
    </div>
  );
}
