import "./InfiniteScroll.css";
import { useEffect, useRef, useState } from "react";
// import { placeholder, placeholderZl } from "../../Data/testPages";
// import { useLang } from "../Context/LanguageContext";
import { useScroll } from "../Context/ScrollContext";
import BookViewer from "./BookViewer";
import { useOffset } from "../Context/OffsetContext";
import { useInitial } from "../Context/InitialContext";
import PageNavigation from "../PageNavigation/PageNavigation";
import { panelBookPH, scottPilgrim } from "../../Data/testPages";

export default function InfiniteScroll({ coverRef }) {
  const [current, setCurrent] = useState(1);
  const [book, setBook] = useState(scottPilgrim.pages);
  const [pages, setPages] = useState([]);
  const [ready, setReady] = useState(false);
  const [stackHeight, setStackHeight] = useState(0);
  const scrollPosition = useScroll();
  // const lang = useLang();
  const offset = useOffset();
  const initial = useInitial();
  const firstPageRef = useRef();

  useEffect(() => {
    let stackHeight = 0;
    for (let i = 0; i < pages.length - 1; i++) {
      const pageHeight = document.getElementById(`page-${i}`).offsetHeight;
      stackHeight = stackHeight + pageHeight;
    }
    setStackHeight(stackHeight);
  }, [pages]);

  useEffect(() => {
    const coverHeight = coverRef.current.offsetHeight;
    if (scrollPosition >= coverHeight + stackHeight) {
      setCurrent((prev) => prev + 1);
    }
  }, [coverRef, scrollPosition, stackHeight]);

  // useEffect(() => {
  //   setBook(lang === "zl" ? placeholderZl : placeholder);
  // }, [lang]);

  useEffect(() => {
    const array = [];
    for (
      let index = offset;
      index < current + offset + 1 && index < book.length;
      index++
    ) {
      array.push(book[index]);
    }
    setPages(array);
    setReady(true);
  }, [current, book, offset]);

  useEffect(() => {
    if (ready && !initial) {
      console.log(offset);
      const newPage = document.getElementById(`page-0`);
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
