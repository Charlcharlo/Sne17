import { useEffect, useRef, useState } from "react";
import { useScroll } from "../Context/ScrollContext";
import PanelSlider from "../PanelSlider/PanelSlider";
import "./SinglePanel.css";

export default function SinglePanel({ source }) {
  const [panelView, setPanelView] = useState(false);
  const ref = useRef();
  const imgRef = useRef();

  const scroll = useScroll();

  useEffect(() => {
    const pagePosition = ref.current.getBoundingClientRect();
    if (
      scroll > pagePosition.bottom + scroll ||
      scroll + window.innerHeight < pagePosition.top + scroll
    ) {
      setPanelView(false);
    }
  }, [scroll]);

  function togglePanels() {
    setPanelView((prev) => {
      return !prev;
    });
  }

  return (
    <div ref={ref}>
      <button className="page-button invisibutton" onClick={togglePanels}>
        <img ref={imgRef} className="page-img" src={source} />
      </button>
      {panelView && <PanelSlider current={1} togglePanels={togglePanels} />}
    </div>
  );
}

SinglePanel.propTypes;
