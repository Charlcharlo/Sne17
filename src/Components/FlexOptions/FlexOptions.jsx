import { useState } from "react";
import MultiPanel from "../MultiPanel/MultiPanel";
import SinglePanel from "../SinglePanel/SinglePanel";
import ZoomWindow from "../ZoomWindow/ZoomWindow";
import "./FlexOptions.css";

export default function FlexOptions({ source }) {
  const [option, setOption] = useState("zoom");

  function handleChange(e) {
    setOption(e.target.value);
  }

  return (
    <>
      <div className="flex-options row-center">
        <label className="flex-selector">
          <input
            type="radio"
            onChange={handleChange}
            name="flexOption"
            value="zoom"
            checked={option === "zoom"}
          />
          <div>Zoom</div>
        </label>
        <label className="flex-selector">
          <input
            type="radio"
            onChange={handleChange}
            name="flexOption"
            value="singlePanel"
            checked={option === "singlePanel"}
          />
          <div>Single Panel</div>
        </label>
        <label className="flex-selector">
          <input
            type="radio"
            onChange={handleChange}
            name="flexOption"
            value="multiPanel"
            checked={option === "multiPanel"}
          />
          <div>Multiple Panels</div>
        </label>
      </div>
      {option === "zoom" ? (
        <ZoomWindow source={source} />
      ) : option === "singlePanel" ? (
        <SinglePanel source={source} />
      ) : option === "multiPanel" ? (
        <MultiPanel />
      ) : null}
    </>
  );
}

FlexOptions.propTypes;
