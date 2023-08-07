import { useEffect, useRef, useState } from "react";
import { useDoubleTap } from "use-double-tap";
import { useScroll } from "../Context/ScrollContext";
import ZoomIn from "../Icons/ZoomIn";
import ZoomOut from "../Icons/ZoomOut";

import "./ZoomWindow.css";

export default function ZoomWindow({ source }) {
  const [zoom, setZoom] = useState(false);
  // const [drag, setDrag] = useState(false);
  // const [imgOffset, setImgOffset] = useState({
  //   top: 0,
  //   left: 0,
  // });

  const ref = useRef();
  const imgRef = useRef();
  const scroll = useScroll();

  // useEffect(() => {
  //   if (zoom) {

  //   }
  // }, [zoom]);

  useEffect(() => {
    const pagePosition = ref.current.getBoundingClientRect();
    if (
      scroll > pagePosition.bottom + scroll ||
      scroll + window.innerHeight < pagePosition.top + scroll
    ) {
      setZoom(false);
    }
  }, [scroll]);

  function toggleZoom() {
    setZoom((prev) => {
      return !prev;
    });
  }

  const doubleTap = useDoubleTap((e) => {
    // if (!zoom) {
    const pagePosition = ref.current.getBoundingClientRect();
    //   setImgOffset({
    //     top: pagePosition.top - e.clientY,
    //     left: pagePosition.left - e.clientY,
    //   });
    // } else {
    //   setImgOffset({
    //     top: 0,
    //     left: 0,
    //   });
    // }
    const clickPosition = e.clientX;
    console.log(ref.current.clientWidth / 2, clickPosition);
    toggleZoom();
    if (!zoom) {
      if (ref.current.clientWidth / 2 > clickPosition) {
        ref.current.scroll({
          top: e.clientY * 2 - pagePosition.top,
          left: 0,
          behavior: "smooth",
        });
      } else {
        console.log("got here");
        ref.current.scroll({
          top: e.clientY - pagePosition.top,
          left: ref.current.scrollWidth,
          behavior: "smooth",
        });
      }
    } else {
      ref.current.scroll(0, 0);
    }
  });

  // function onDrag(e) {
  //   if (drag) {
  //     console.log(e.changedTouches[0].clientY);
  //     const pagePosition = ref.current.getBoundingClientRect();
  //     imgRef.current.style.top = e.changedTouches[0].clientY;
  //     imgRef.current.style.left =
  //       pagePosition.left - e.changedTouches[0].clientX;
  //   }
  // }

  return (
    <>
      <div className="row-end zoom-btn-wrapper">
        <button className="zoom-toggle" onClick={toggleZoom}>
          {zoom ? <ZoomOut /> : <ZoomIn />}
        </button>
      </div>
      <div
        ref={ref}
        {...doubleTap}
        className={`zoom-window ${zoom && "zoomed"}`}
      >
        <img
          className="page-img"
          ref={imgRef}
          // onTouchStart={() => setDrag(true)}
          // onTouchEnd={() => setDrag(false)}
          // onTouchMove={onDrag}
          // style={imgOffset}
          src={source}
        />
        <div className="back-board" />
      </div>
    </>
  );
}

ZoomWindow.propTypes;
