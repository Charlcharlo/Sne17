import "./PanelSlider.css";
import SliderContent from "../SliderContent/SliderContent";

export default function PanelSlider({
  sliderRef, //m
  closeSlider, //m
  slide, //m
  currentPanel, //v
  pagePanels, //v
  incrementCurrent, //v
  decrementCurrent, //v
  removeAnimation, //v
  windowRef, //v
  page,
}) {
  function clickAway(e) {
    if (e.target === sliderRef.current) {
      windowRef.current.scroll(0, 0);
      sliderRef.current.close();
    }
  }

  return (
    <dialog className="panel-modal" ref={sliderRef} onClick={clickAway}>
      <SliderContent
        closeSlider={closeSlider}
        slide={slide}
        currentPanel={currentPanel}
        pagePanels={pagePanels}
        incrementCurrent={incrementCurrent}
        decrementCurrent={decrementCurrent}
        removeAnimation={removeAnimation}
        windowRef={windowRef}
        page={page}
      />
    </dialog>
  );
}

PanelSlider.propTypes;
