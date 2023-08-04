import { useEffect, useRef, useState } from "react";
import { useDoubleTap } from "use-double-tap";
import { useScroll } from "../Context/ScrollContext";
import ZoomIn from "../Icons/ZoomIn";
import ZoomOut from "../Icons/ZoomOut";

import "./ZoomWindow.css";

export default function ZoomWindow({ source }) {
  const [zoom, setZoom] = useState(false);
  const ref = useRef();
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

  const doubleTap = useDoubleTap(() => {
    toggleZoom();
  });

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
        <img className="page-img" src={source} />
      </div>
    </>
  );
}

ZoomWindow.propTypes;
