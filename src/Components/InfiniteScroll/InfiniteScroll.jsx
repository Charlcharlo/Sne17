import { useEffect, useState } from "react";
import { useScroll } from "../Context/ScrollContext";
import BookViewer from "./BookViewer";

export default function InfiniteScroll({ book }) {
  const [current, setCurrent] = useState(1);
  const scrollPosition = useScroll();

  const [pages, setPages] = useState([]);

  useEffect(() => {
    let blockHeight;
    const coverHeight = document.getElementById("cover").offsetHeight;
    if (scrollPosition > coverHeight) {
      blockHeight = document.getElementById("page-1").offsetHeight;
    }
    if (scrollPosition >= coverHeight + blockHeight * current) {
      setCurrent((prev) => prev + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollPosition]);

  useEffect(() => {
    const array = [];
    for (
      let index = 1;
      index < current + 2 && index < book.count + 1;
      index++
    ) {
      const filePath = `${window.location.origin}/${book.directory}/${book.prefix}-${index}.${book.ext}`;
      array.push(filePath);
    }
    setPages(array);
  }, [current, book]);

  return <BookViewer pages={pages} />;
}

InfiniteScroll.propTypes;
