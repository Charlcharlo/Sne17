import "./PanelSliderSafari.css";
import SliderContent from "../SliderContent/SliderContent";

export default function PanelSliderSafari({
  currentPanel,
  sliderRef,
  pagePanels,
  incrementCurrent,
  decrementCurrent,
  closeSlider,
  removeAnimation,
  slide,
  modalIn,
  windowRef,
}) {
  function clickAway(e) {
    if (e.target === e.currentTarget) {
      closeSlider();
      windowRef.current.scroll(0, 0);
    }
  }

  return (
    <>
      {modalIn && <div className="backdrop" />}
      {modalIn && (
        <div
          className="panel-modal panel-modal-saf centered-container"
          ref={sliderRef}
          onClick={clickAway}
        >
          <SliderContent
            closeSlider={closeSlider}
            slide={slide}
            currentPanel={currentPanel}
            pagePanels={pagePanels}
            incrementCurrent={incrementCurrent}
            decrementCurrent={decrementCurrent}
            removeAnimation={removeAnimation}
            windowRef={windowRef}
          />
        </div>
      )}
    </>
  );
}

PanelSliderSafari.propTypes;
