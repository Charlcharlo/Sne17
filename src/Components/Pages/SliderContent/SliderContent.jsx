import { useEffect } from "react";
import Cancel from "../../Assets/Icons/Cancel";
import Next from "../../Assets/Icons/Next";
import Prev from "../../Assets/Icons/Prev";

export default function SliderContent({
  currentPanel,
  incrementCurrent,
  decrementCurrent,
  removeAnimation,
  windowRef,
  slide,
  closeSlider,
  page,
}) {
  let touchStart;
  let scrollStart;
  const source = `${page}/panel-${currentPanel + 1}.png`;

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
    <div className="col-between">
      <div className="row-end">
        <button
          className="invisibutton cancel-button centered-container"
          onClick={closeSlider}
        >
          <Cancel />
        </button>
      </div>
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
          src={`${window.location.origin}/Sne17/final-pages-eng/panels/${source}`}
          alt=""
        />
      </div>
      <div className="row-center">
        <div className="panel-nav-buttons">
          <button
            className="invisibutton prev-panel"
            onClick={decrementCurrent}
          >
            <Prev />
          </button>
          <button
            className="invisibutton next-panel"
            onClick={incrementCurrent}
          >
            <Next />
          </button>
        </div>
      </div>
    </div>
  );
}

SliderContent.propTypes;
