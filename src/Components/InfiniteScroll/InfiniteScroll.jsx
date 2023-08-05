import { useEffect, useRef, useState } from "react";
import { placeholder, placeholderZl } from "../../Data/testPages";
import { useLang } from "../Context/LanguageContext";
import { useScroll } from "../Context/ScrollContext";
import BookViewer from "./BookViewer";

export default function InfiniteScroll({ coverRef }) {
  const [current, setCurrent] = useState(1);
  const [book, setBook] = useState(placeholder);
  const scrollPosition = useScroll();
  const lang = useLang();
  const firstPageRef = useRef();

  const [pages, setPages] = useState([]);

  useEffect(() => {
    let blockHeight;
    const coverHeight = coverRef.current.offsetHeight;
    if (scrollPosition > coverHeight) {
      blockHeight = firstPageRef.current.offsetHeight;
    }
    if (scrollPosition >= coverHeight + blockHeight * current) {
      setCurrent((prev) => prev + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollPosition]);

  useEffect(() => {
    setBook(lang === "zl" ? placeholderZl : placeholder);
  }, [lang]);

  useEffect(() => {
    const array = [];
    for (
      let index = 1;
      index < current + 2 && index < book.count + 1;
      index++
    ) {
      const filePath = `${window.location.origin}/Sne17/${book.directory}/${book.prefix}-${index}.${book.ext}`;
      array.push(filePath);
    }
    setPages(array);
  }, [current, book]);

  return <BookViewer pages={pages} firstPageRef={firstPageRef} />;
}

InfiniteScroll.propTypes;
