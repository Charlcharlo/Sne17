import { useLang, useLangUpdate } from "./LanguageContext";

export default function LangTest() {
  const lang = useLang();
  const langUpdate = useLangUpdate();

  return (
    <>
      <h1>
        {lang === "en"
          ? "Hello"
          : lang === "zl"
          ? "Sawubona"
          : "Please Choose a language"}
      </h1>
      <button onClick={(e) => langUpdate(e.target.value)} value="zl">
        isiZulu
      </button>
      <button onClick={(e) => langUpdate(e.target.value)} value="en">
        English
      </button>
    </>
  );
}
