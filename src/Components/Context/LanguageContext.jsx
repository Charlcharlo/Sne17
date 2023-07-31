/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const LangContext = createContext();
const LangUpdateContext = createContext();

export function useLang() {
  return useContext(LangContext);
}

export function useLangUpdate() {
  return useContext(LangUpdateContext);
}

export default function LangProvider({ children }) {
  const [lang, setLang] = useState("");

  function chooseLanguage(newLang) {
    setLang(newLang);
  }

  return (
    <LangContext.Provider value={lang}>
      <LangUpdateContext.Provider value={chooseLanguage}>
        {children}
      </LangUpdateContext.Provider>
    </LangContext.Provider>
  );
}

LangProvider.propTypes;
