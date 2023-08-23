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
}) {
  // const panelList = pageOnePanels.layout;
  const flex = useFlex();
  const windowRef = useRef();

  function closeSlider() {
    sliderRef.current.close();
  }

  function clickAway(e) {
    if (e.target.nodeName === "DIALOG" && !flex) {
      windowRef.current.scroll(0, 0);
      sliderRef.current.close();
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
          <div className="panel-window" ref={windowRef}>
            <img
              className={`panel-img`}
              src={pagePanels[currentPanel].src}
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
