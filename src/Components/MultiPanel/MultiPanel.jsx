import { useState } from "react";
import { pageOnePanels } from "../../Data/testPages";
import PanelSlider from "../PanelSlider/PanelSlider";
import "./MultiPanel.css";

export default function MultiPanel() {
  const [panelView, setPanelView] = useState(false);
  const [startingPanel, setStartingPanel] = useState(1);

  function togglePanels() {
    setPanelView((prev) => {
      return !prev;
    });
  }

  function showSlider(startingPanel) {
    setStartingPanel(startingPanel);
    setPanelView(true);
  }

  function renderPanels(panel, i) {
    return (
      <button className="invisibutton" style={panel} key={i}>
        <img
          className="clickable-panel"
          src={`${window.location.origin}/${
            pageOnePanels.directory
          }/page-1/panel-${i + 1}.jpg`}
          alt=""
          onClick={() => showSlider(i + 1)}
        />
      </button>
    );
  }

  return (
    <div>
      <div className="panel-multi">
        {pageOnePanels.layout.map(renderPanels)}
      </div>
      {panelView && (
        <PanelSlider current={startingPanel} togglePanels={togglePanels} />
      )}
    </div>
  );
}
