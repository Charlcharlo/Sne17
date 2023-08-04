/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const LangContext = createContext();
const LangUpdateContext = createContext();
const LangSelectedContext = createContext();

export function useLang() {
  return useContext(LangContext);
}

export function useLangUpdate() {
  return useContext(LangUpdateContext);
}

export function useLangSelected() {
  return useContext(LangSelectedContext);
}

export default function LangProvider({ children }) {
  const [lang, setLang] = useState("");
  const [langSelected, setLangSeleced] = useState(false);

  function chooseLanguage(newLang) {
    setLang(newLang);
    if (!langSelected) {
      setLangSeleced(true);
    }
  }

  return (
    <LangContext.Provider value={lang}>
      <LangUpdateContext.Provider value={chooseLanguage}>
        <LangSelectedContext.Provider value={langSelected}>
          {children}
        </LangSelectedContext.Provider>
      </LangUpdateContext.Provider>
    </LangContext.Provider>
  );
}

LangProvider.propTypes;
