import { useState } from "react";
import Cancel from "../Icons/Cancel";
import Next from "../Icons/Next";
import Prev from "../Icons/Prev";

export default function PanelSlider({ current, togglePanels }) {
  const [currentPanel, setCurrentPanel] = useState(current);

  function incrementCurrent() {
    if (currentPanel < 6) {
      setCurrentPanel((prev) => {
        return prev + 1;
      });
    }
  }

  function decrementCurrent() {
    if (currentPanel > 1) {
      setCurrentPanel((prev) => {
        return prev - 1;
      });
    }
  }

  return (
    <div className="row-between panel-wrapper">
      <button className="invisibutton" onClick={decrementCurrent}>
        <Prev />
      </button>
      <div className="panel-window row-start">
        <img
          className="panel-img"
          src={`${window.location.origin}/placeholder-panels/page-1/panel-${currentPanel}.jpg`}
          alt=""
        />
      </div>
      <button className="invisibutton" onClick={incrementCurrent}>
        <Next />
      </button>
      <button className="invisibutton cancel-button" onClick={togglePanels}>
        <Cancel />
      </button>
    </div>
  );
}

PanelSlider.propTypes;
