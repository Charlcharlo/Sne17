import "./PanelSlider.css";
import Cancel from "../../Assets/Icons/Cancel";
import Next from "../../Assets/Icons/Next";
import Prev from "../../Assets/Icons/Prev";
import { useRef } from "react";

export default function PanelSlider({
  // currentPanel,
  sliderRef,
  // pagePanels,
  incrementCurrent,
  decrementCurrent,
  closeSlider,
}) {
  const windowRef = useRef();
  let touchStart;
  let scrollStart;
  // const source = pagePanels[currentPanel].src;

  function clickAway(e) {
    if (e.target === sliderRef.current) {
      windowRef.current.scroll(0, 0);
      sliderRef.current.close();
    }
  }

  function handleTouchStart(e) {
    touchStart = e.touches[0].clientX;
    scrollStart = windowRef.current.scrollLeft;
  }

  function handleMove(e) {
    const touchPosition = e.touches[0].clientX;
    if (scrollStart === 0 && touchPosition > touchStart) {
      decrementCurrent();
    }
    if (
      scrollStart ===
        windowRef.current.scrollWidth - windowRef.current.clientWidth &&
      touchPosition < touchStart
    ) {
      incrementCurrent();
    }
  }

  return (
    <dialog className="panel-modal" ref={sliderRef} onClick={clickAway}>
      <div className="row-between">
        <button className="invisibutton prev-panel" onClick={decrementCurrent}>
          <Prev />
        </button>
        <div
          className="panel-window"
          ref={windowRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleMove}
        >
          <img
            className={`panel-img`}
            // src={source}
            src={`${window.location.origin}/Images/PH-Block.png`}
            alt=""
          />
        </div>
        <button className="invisibutton next-panel" onClick={incrementCurrent}>
          <Next />
        </button>
        <button className="invisibutton cancel-button" onClick={closeSlider}>
          <Cancel />
        </button>
      </div>
    </dialog>
  );
}

PanelSlider.propTypes;
