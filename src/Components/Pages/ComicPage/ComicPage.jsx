import { useRef, useState } from "react";
import PanelSlider from "../PanelSlider/PanelSlider";
import "./ComicPage.css";

export default function ComicPage({ info, index }) {
  const [currentPanel, setCurrentPanel] = useState(0);
  const pageRef = useRef();
  const sliderRef = useRef();

  function showSlider(index) {
    const num = parseInt(index);
    setCurrentPanel(num);
    sliderRef.current.showModal();
  }

  function closeSlider() {
    sliderRef.current.close();
    setCurrentPanel(0);
  }

  function incrementCurrent() {
    if (currentPanel < info.panels.length - 1) {
      setCurrentPanel((prev) => {
        return prev + 1;
      });
    } else {
      const iPlusOne = index + 1;
      const nextPage = document.getElementById(`page-${iPlusOne}`);
      sliderRef.current.close();
      setCurrentPanel(0);
      if (nextPage) {
        nextPage.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  function decrementCurrent() {
    if (currentPanel > 0) {
      setCurrentPanel((prev) => {
        return prev - 1;
      });
    } else {
      const iMinusOne = index - 1;
      const prevPage = document.getElementById(`page-${iMinusOne}`);
      sliderRef.current.close();
      setCurrentPanel(0);
      if (prevPage) {
        prevPage.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  function renderPanels(panel, i) {
    return (
      <button
        className="invisibutton"
        style={{
          gridColumn: `span ${panel.cols}`,
          gridRow: `span ${panel.rows}`,
        }}
        key={i}
        value={i}
        onClick={(e) => {
          showSlider(e.currentTarget.value);
        }}
      >
        <img className="clickable-panel" src={panel.src} alt={`Panel ${i}`} />
      </button>
    );
  }

  return (
    <div>
      <div className="panel-multi" ref={pageRef}>
        {info.panels.map(renderPanels)}
      </div>
      <PanelSlider
        currentPanel={currentPanel}
        sliderRef={sliderRef}
        pagePanels={info.panels}
        incrementCurrent={incrementCurrent}
        decrementCurrent={decrementCurrent}
        closeSlider={closeSlider}
      />
    </div>
  );
}

ComicPage.propTypes;
