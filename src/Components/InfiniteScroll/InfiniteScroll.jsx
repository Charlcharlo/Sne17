import "./InfiniteScroll.css";
import { useEffect, useRef, useState } from "react";
// import { placeholder, placeholderZl } from "../../Data/testPages";
// import { useLang } from "../Context/LanguageContext";
import { useScroll } from "../Context/ScrollContext";
import BookViewer from "./BookViewer";
import { useOffset } from "../Context/OffsetContext";
import { useInitial } from "../Context/InitialContext";
import PageNavigation from "../PageNavigation/PageNavigation";
import { panelBookPH } from "../../Data/testPages";

export default function InfiniteScroll({ coverRef }) {
  const [current, setCurrent] = useState(1);
  const [book, setBook] = useState(panelBookPH.pages);
  const [pages, setPages] = useState([]);
  const [ready, setReady] = useState(false);
  const scrollPosition = useScroll();
  // const lang = useLang();
  const offset = useOffset();
  const initial = useInitial();
  const firstPageRef = useRef();

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

  // useEffect(() => {
  //   setBook(lang === "zl" ? placeholderZl : placeholder);
  // }, [lang]);

  useEffect(() => {
    const array = [];
    for (
      let index = offset;
      index < current + offset + 2 && index < book.length;
      index++
    ) {
      // const filePath = `${window.location.origin}/Sne17/${book.directory}/${book.prefix}-${index}.${book.ext}`;
      array.push(book[index]);
    }
    setPages(array);
    setReady(true);
  }, [current, book, offset]);

  useEffect(() => {
    if (ready && !initial) {
      const newPage = document.getElementById(`page-${offset + 1}`);
      newPage.scrollIntoView({ behavior: "smooth" });
    }
  }, [offset, ready, initial]);

  return (
    <>
      {offset > 0 && <PageNavigation />}
      <BookViewer pages={pages} firstPageRef={firstPageRef} />
    </>
  );
}

InfiniteScroll.propTypes;
