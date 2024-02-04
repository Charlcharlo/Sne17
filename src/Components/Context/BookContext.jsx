/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { finalEng } from "../../Data/finalEnglish";
// import { pencils } from "../../Data/pencils";
import { panelBookZL } from "../../Data/testPages";
import { useLang } from "./LanguageContext";

const BookContext = createContext();

export function useBook() {
  return useContext(BookContext);
}

export default function BookProvider({ children }) {
  const [book, setBook] = useState(finalEng.pages);
  const language = useLang();

  useEffect(() => {
    setBook(language === "en" ? finalEng.pages : panelBookZL.pages);
  }, [language]);

  return <BookContext.Provider value={book}>{children}</BookContext.Provider>;
}

BookProvider.propTypes;
