import { useEffect, useRef, useState } from "react";
import { useDoubleTap } from "use-double-tap";
import { useScroll } from "../../Context/ScrollContext";
import ZoomIn from "../../Assets/Icons/ZoomIn";
import ZoomOut from "../../Assets/Icons/ZoomOut";

import "./ZoomWindow.css";
// import { isMobile } from "react-device-detect";

export default function ZoomWindowCopy({ source, orientation }) {
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
      if (prev) {
        ref.current.scroll(0, 0);
      }
      return !prev;
    });
  }

  const doubleTap = useDoubleTap(() => {
    toggleZoom();
  });

  return (
    <>
      {/* {!zoom && isMobile && <h2 className="zoom-hint">Double Tap to Zoom</h2>} */}
      <div className="row-end zoom-btn-wrapper">
        <button className="zoom-toggle invisibutton" onClick={toggleZoom}>
          {zoom ? <ZoomOut /> : <ZoomIn />}
        </button>
      </div>
      <div
        ref={ref}
        {...doubleTap}
        className={`zoom-window ${zoom && "zoomed"} ${orientation}`}
      >
        <img className="page-img" ref={imgRef} src={source} />
        <div ref={backBoard} className="back-board" />
      </div>
    </>
  );
}

ZoomWindowCopy.propTypes;
