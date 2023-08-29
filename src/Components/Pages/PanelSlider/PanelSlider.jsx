import "./PanelSlider.css";
// import { useState } from "react";
import Cancel from "../../Assets/Icons/Cancel";
import Next from "../../Assets/Icons/Next";
import Prev from "../../Assets/Icons/Prev";
import ClickAwayListener from "react-click-away-listener";
import { useFlex } from "../../Context/FlexContext";
import { useRef } from "react";

export default function PanelSlider({
  currentPanel,
  sliderRef,
  pagePanels,
  incrementCurrent,
  decrementCurrent,
  closeSlider,
}) {
  // const panelList = pageOnePanels.layout;
  const flex = useFlex();
  const windowRef = useRef();
  let touchStart;
  let scrollStart;
  const source = pagePanels[currentPanel].src;

  function clickAway(e) {
    console.log(e.target.nodeName);
    if (
      !flex &&
      e.target.nodeName !== "BUTTON" &&
      e.target.nodeName !== "IMG" &&
      e.target.nodeName !== "DIV"
    ) {
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
    <dialog className="panel-modal" ref={sliderRef}>
      <ClickAwayListener onClickAway={clickAway} touchEvent="touchend">
        <div className="row-between">
          <button
            className="invisibutton prev-panel"
            onClick={decrementCurrent}
          >
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
          <button
            className="invisibutton next-panel"
            onClick={incrementCurrent}
          >
            <Next />
          </button>
          <button className="invisibutton cancel-button" onClick={closeSlider}>
            <Cancel />
          </button>
        </div>
      </ClickAwayListener>
    </dialog>
  );
}

PanelSlider.propTypes;
