import "./PanelSlider.css";
import Cancel from "../../Assets/Icons/Cancel";
import Next from "../../Assets/Icons/Next";
import Prev from "../../Assets/Icons/Prev";
import { useEffect } from "react";

export default function PanelSlider({
  currentPanel,
  sliderRef,
  pagePanels,
  incrementCurrent,
  decrementCurrent,
  closeSlider,
  removeAnimation,
  slide,
  windowRef,
}) {
  let touchStart;
  let scrollStart;
  const source = pagePanels[currentPanel].src;

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  });

  function handleKeydown(e) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      incrementCurrent();
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      decrementCurrent();
    }
  }

  function clickAway(e) {
    if (e.target === sliderRef.current) {
      windowRef.current.scroll(0, 0);
      sliderRef.current.close();
    }
  }

  function handleTouchStart(e) {
    touchStart = e.touches[0].clientX;
    scrollStart = windowRef.current.scrollLeft;
  }

  function handleMove(e) {
    const touchPosition = e.touches[0].clientX;
    if (scrollStart === 0 && touchPosition > touchStart) {
      decrementCurrent();
    }
    if (
      scrollStart ===
        windowRef.current.scrollWidth - windowRef.current.clientWidth &&
      touchPosition < touchStart
    ) {
      incrementCurrent();
    }
  }

  return (
    <dialog className="panel-modal" ref={sliderRef} onClick={clickAway}>
      <div className="row-between">
        <button className="invisibutton prev-panel" onClick={decrementCurrent}>
          <Prev />
        </button>
        <div
          className="panel-window"
          ref={windowRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleMove}
          onAnimationEnd={removeAnimation}
        >
          <img
            data-slide={slide}
            className={`panel-img`}
            src={source}
            // src={`${window.location.origin}/Sne17/Images/PH-Block.png`}
            alt=""
          />
        </div>
        <button className="invisibutton next-panel" onClick={incrementCurrent}>
          <Next />
        </button>
        <button className="invisibutton cancel-button" onClick={closeSlider}>
          <Cancel />
        </button>
      </div>
    </dialog>
  );
}

PanelSlider.propTypes;
