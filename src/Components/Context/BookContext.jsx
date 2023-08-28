/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { panelBookPH, panelBookZL } from "../../Data/testPages";
import { useLang } from "./LanguageContext";

const BookContext = createContext();

export function useBook() {
  return useContext(BookContext);
}

export default function BookProvider({ children }) {
  const [book, setBook] = useState(panelBookPH.pages);
  const language = useLang();

  useEffect(() => {
    setBook(language === "en" ? panelBookPH.pages : panelBookZL.pages);
  }, [language]);

  return <BookContext.Provider value={book}>{children}</BookContext.Provider>;
}

BookProvider.propTypes;
