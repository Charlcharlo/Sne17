import "./PanelSlider.css";
// import { useState } from "react";
import Cancel from "../Icons/Cancel";
import Next from "../Icons/Next";
import Prev from "../Icons/Prev";
import ClickAwayListener from "react-click-away-listener";
// import { pageOnePanels } from "../../Data/testPages";

export default function PanelSlider({
  currentPanel,
  sliderRef,
  pagePanels,
  incrementCurrent,
  decrementCurrent,
}) {
  // const panelList = pageOnePanels.layout;

  function closeSlider() {
    sliderRef.current.close();
  }

  function clickAway(e) {
    if (e.target.nodeName === "DIALOG") {
      sliderRef.current.close();
    }
  }

  return (
    <dialog className="panel-modal" ref={sliderRef}>
      <ClickAwayListener onClickAway={clickAway}>
        <div className="row-between">
          <button
            className="invisibutton prev-panel"
            onClick={decrementCurrent}
          >
            <Prev />
          </button>
          <div
            className="centered-container panel-window"
            style={{
              backgroundColor: "beige",
              height: `${pagePanels[currentPanel].rows * 140}px`,
              width: `${pagePanels[currentPanel].cols * 100}px`,
            }}
          >
            <h1>{`panel ${currentPanel + 1}`}</h1>
          </div>
          {/* <img
          className={`panel-img`}
          src={`${window.location.origin}/Sne17/placeholder-panels/page-1/panel-${currentPanel}.jpg`}
          alt=""
        /> */}
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
