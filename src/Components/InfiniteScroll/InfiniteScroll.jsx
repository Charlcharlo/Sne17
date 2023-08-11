import "./InfiniteScroll.css";
import { useEffect, useRef, useState } from "react";
import { placeholder, placeholderZl } from "../../Data/testPages";
import { useLang } from "../Context/LanguageContext";
import { useScroll } from "../Context/ScrollContext";
import BookViewer from "./BookViewer";

export default function InfiniteScroll({ coverRef }) {
  const [current, setCurrent] = useState(1);
  const [viewing, setViewing] = useState(1);
  const [waitForScroll, setWaitingForScroll] = useState(false);
  const [bookDone, setBookDone] = useState(false);
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
      const viewPage = Math.ceil((scrollPosition - coverHeight) / blockHeight);
      setViewing(viewPage);
    }
    if (scrollPosition >= coverHeight + blockHeight * current) {
      setCurrent((prev) => prev + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollPosition]);

  function handlePageJump(e) {
    const targetNumber = e.target.value;
    if (targetNumber <= book.count) {
      setViewing(targetNumber);
      if (targetNumber > current) {
        setBookDone(false);
        setCurrent(targetNumber);
        setWaitingForScroll(true);
      } else if (targetNumber > 0) {
        const targetPage = document.getElementById(`page-${targetNumber}`);
        targetPage.scrollIntoView();
      }
    }
  }

  useEffect(() => {
    if (waitForScroll && bookDone) {
      const targetPage = document.getElementById(`page-${viewing}`);
      targetPage.scrollIntoView();
      setWaitingForScroll(false);
    }
  }, [waitForScroll, viewing, bookDone]);

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
    setBookDone(true);
  }, [current, book]);

  return (
    <>
      <BookViewer pages={pages} firstPageRef={firstPageRef} />
      <div className="jump-to-page-wrapper row-center">
        <div className="jump-to-page row-center">
          <label htmlFor="jump-to-page">Page:</label>
          <input
            type="number"
            value={viewing}
            name="jump-to-page"
            onChange={handlePageJump}
          />
        </div>
      </div>
    </>
  );
}

InfiniteScroll.propTypes;
