import { useRef, useState } from "react";
// import { pageOnePanels } from "../../Data/testPages";
// import { useFlex } from "../Context/FlexContext";
import PanelSlider from "../PanelSlider/PanelSlider";
import "./ComicPage.css";

export default function ComicPage({ info }) {
  const [currentPanel, setCurrentPanel] = useState(0);
  const pageRef = useRef();
  // const flex = useFlex();
  const sliderRef = useRef();

  function showSlider(index) {
    const num = parseInt(index);
    setCurrentPanel(num);
    sliderRef.current.showModal();
    // if (!flex) {
    //   pageRef.current.scrollIntoView({ behavior: "smooth" });
    // };
  }

  function incrementCurrent() {
    if (currentPanel < info.panels.length - 1) {
      setCurrentPanel((prev) => {
        return prev + 1;
      });
    }
  }

  function decrementCurrent() {
    if (currentPanel > 0) {
      setCurrentPanel((prev) => {
        return prev - 1;
      });
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
          console.log(e.target);
        }}
      >
        <img className="clickable-panel" src={panel.src} alt="" />
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
      />
    </div>
  );
}

ComicPage.propTypes;
