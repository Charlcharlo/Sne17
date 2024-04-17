/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { finalEng } from "../../Data/finalEnglish";
import { useLang } from "./LanguageContext";

const BookContext = createContext();

export function useBook() {
  return useContext(BookContext);
}

export default function BookProvider({ children }) {
  const [book, setBook] = useState(finalEng.pages);
  const language = useLang();

  useEffect(() => {
    setBook(language === "en" ? finalEng.pages : finalEng.pages);
  }, [language]);

  return <BookContext.Provider value={book}>{children}</BookContext.Provider>;
}

BookProvider.propTypes;
