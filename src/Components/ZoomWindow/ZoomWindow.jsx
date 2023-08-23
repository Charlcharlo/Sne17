import { useEffect, useRef, useState } from "react";
import { useDoubleTap } from "use-double-tap";
import { useScroll } from "../Context/ScrollContext";
import ZoomIn from "../Icons/ZoomIn";
import ZoomOut from "../Icons/ZoomOut";

import "./ZoomWindow.css";

export default function ZoomWindowCopy({ source }) {
  const [zoom, setZoom] = useState(false);
  const ref = useRef();
  const imgRef = useRef();
  const backBoard = useRef();
  const scroll = useScroll();

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
    const rightHalf = e.clientX > ref.current.clientWidth / 2;
    if (zoom) {
      ref.current.scroll(0, 0);
    } else if (rightHalf) {
      ref.current.scroll({
        left: backBoard.current.clientWidth,
        behavior: "smooth",
      });
    }
    toggleZoom();
  });

  return (
    <>
      <div className="row-between zoom-btn-wrapper">
        <h2>Double Tap to Zoom</h2>
        <button className="zoom-toggle invisibutton" onClick={toggleZoom}>
          {zoom ? <ZoomOut /> : <ZoomIn />}
        </button>
      </div>
      <div
        ref={ref}
        {...doubleTap}
        className={`zoom-window ${zoom && "zoomed"}`}
      >
        <img className="page-img" ref={imgRef} src={source} />
        <div ref={backBoard} className="back-board" />
      </div>
    </>
  );
}

ZoomWindowCopy.propTypes;
