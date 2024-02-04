import { kebabCase } from "lodash";
import { useRef, useState } from "react";
import PanelSlider from "../PanelSlider/PanelSlider";
import "./ComicPage.css";

export default function ComicPage({ info, index, src }) {
  const [currentPanel, setCurrentPanel] = useState(0);
  const [slide, setSlide] = useState("");
  const pageRef = useRef();
  const sliderRef = useRef();
  const windowRef = useRef();
  const page = kebabCase(info.title);

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
      setSlide("to-left");
      windowRef.current.scroll(0, 0);
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
      setSlide("to-right");
      windowRef.current.scroll(0, 0);
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

  function removeAnimation() {
    setSlide("");
  }

  function renderPanels(panel, i) {
    return (
      <button
        className="invisibutton"
        style={panel.style}
        key={i}
        value={i}
        onClick={(e) => {
          showSlider(e.currentTarget.value);
        }}
      ></button>
    );
  }

  return (
    <div>
      <div className="full-comic-page">
        <img src={src} className="full-comic-img" alt="" />
        <div className="panel-multi" ref={pageRef}>
          {info.panels.map(renderPanels)}
        </div>
      </div>
      <PanelSlider
        currentPanel={currentPanel}
        sliderRef={sliderRef}
        pagePanels={info.panels}
        page={page}
        incrementCurrent={incrementCurrent}
        decrementCurrent={decrementCurrent}
        closeSlider={closeSlider}
        removeAnimation={removeAnimation}
        slide={slide}
        windowRef={windowRef}
      />
    </div>
  );
}

ComicPage.propTypes;
