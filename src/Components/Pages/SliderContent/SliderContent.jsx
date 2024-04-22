import { useEffect, useState } from "react";
import Cancel from "../../Assets/Icons/Cancel";
import Next from "../../Assets/Icons/Next";
import Prev from "../../Assets/Icons/Prev";
import SdgWheel from "../../Assets/Icons/SdgWheel";
import { isMobile } from "react-device-detect";
import { useLang } from "../../Context/LanguageContext";
import { useFlex } from "../../Context/FlexContext";

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
  const flex = useFlex();
  const lang = useLang();
  const source = `${page}/panel-${currentPanel + 1}.png`;
  const pageSource = `${window.location.origin}/Sne17/final-pages-${lang}/${
    flex ? "panels-mobi" : "panels"
  }/${source}`;
  const [loading, setLoading] = useState(true);
  const [showButtons, setShowButtons] = useState(false);
  const buttonVis = showButtons ? "visible" : "hidden";

  useEffect(() => {
    setLoading(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPanel]);

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

  function handleClick() {
    revealButtons();
  }

  function revealButtons() {
    setShowButtons(true);
    setTimeout(hideButtons, "3000");
  }

  function hideButtons() {
    setShowButtons(false);
  }

  function handleTouchStart(e) {
    touchStart = e.touches[0].clientX;
    scrollStart = windowRef.current.scrollLeft;
    revealButtons();
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
    <div className="fit-height">
      <div className="col-between fit-height">
        <div
          className="panel-window"
          ref={windowRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleMove}
          onAnimationEnd={removeAnimation}
          onClick={handleClick}
        >
          <img
            data-slide={slide}
            className={`panel-img`}
            style={{ display: loading ? "none" : "block" }}
            onLoad={() => setLoading(false)}
            src={pageSource}
            alt=""
          />
          {loading && (
            <div className="centered-container">
              <div className="loader-wrapper">
                <SdgWheel />
              </div>
            </div>
          )}
        </div>
        <div className="row-center">
          <div
            className={`panel-nav-buttons ${isMobile && buttonVis + " mobile"}`}
          >
            <button
              className="invisibutton prev-panel"
              onClick={
                isMobile
                  ? showButtons
                    ? decrementCurrent
                    : revealButtons
                  : decrementCurrent
              }
            >
              <Prev />
            </button>
            <button
              className="invisibutton next-panel"
              onClick={
                isMobile
                  ? showButtons
                    ? incrementCurrent
                    : revealButtons
                  : incrementCurrent
              }
            >
              <Next />
            </button>
          </div>
        </div>
      </div>
      <button
        className={`invisibutton cancel-button centered-container ${
          isMobile && buttonVis
        }`}
        onClick={
          isMobile ? (showButtons ? closeSlider : revealButtons) : closeSlider
        }
      >
        <Cancel />
      </button>
    </div>
  );
}

SliderContent.propTypes;
