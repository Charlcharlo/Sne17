import { useEffect, useRef, useState } from "react";
import { useLangSelected } from "../../Context/LanguageContext";
import { useScroll } from "../../Context/ScrollContext";
import Invisibutton from "../../Assets/Invisibutton/Invisibutton";
import JumpToPage from "../JumpToPage/JumpToPage";
import SideBar from "../SideBar/SideBar";
import "./NavBar.css";
import HamburgerH from "../../Assets/Icons/HamburgerH";
import { useFlex } from "../../Context/FlexContext";

export default function NavBar() {
  const scrollHeight = useScroll();
  const langSelected = useLangSelected();
  const [hidden, setHidden] = useState(false);
  const [panelHidden, setPanelHidden] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const flex = useFlex();
  const buttonRef = useRef();
  const svgRef = useRef();

  useEffect(() => {
    const position = scrollHeight;
    if (position <= lastScrollTop) {
      setHidden(false);
    } else {
      setHidden(true);
      setPanelHidden(true);
    }
    setLastScrollTop(position <= 0 ? 0 : position);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollHeight]);

  function scrollTop() {
    window.scroll({ top: 0, behavior: "smooth" });
  }

  function togglePanel() {
    setPanelHidden((prev) => {
      return !prev;
    });
  }

  function hidePanel(e) {
    if (e.target !== buttonRef.current && e.target !== svgRef.current) {
      setPanelHidden((prev) => {
        if (!prev) {
          return true;
        } else return prev;
      });
    }
  }

  return (
    <>
      <nav className={`row-between nav-bar ${hidden ? "hidden" : "shown"}`}>
        <button className="invisibutton nav-bar-btn" onClick={scrollTop}>
          <img
            className="nav-title-img"
            src={`${window.location.origin}/Sne17/Images/${
              flex ? "nav-title-mobi" : "nav-title"
            }.png`}
            alt=""
          />
        </button>
        {langSelected && <JumpToPage />}
        <div className="row-end menu-wrapper">
          {langSelected && (
            <Invisibutton
              className="invisibutton"
              onClick={togglePanel}
              buttonRef={buttonRef}
            >
              <HamburgerH />
            </Invisibutton>
          )}
        </div>
      </nav>
      <SideBar hidden={panelHidden} hidePanel={hidePanel} />
    </>
  );
}
