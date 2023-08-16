import { useEffect, useState } from "react";
import { useLangSelected } from "../Context/LanguageContext";
import { useScroll } from "../Context/ScrollContext";
import Hamburger from "../Icons/Hamburger";
import JumpToPage from "../JumpToPage/JumpToPage";
import SideBar from "../SideBar/SideBar";
import "./NavBar.css";

export default function NavBar() {
  const scrollHeight = useScroll();
  const langSelected = useLangSelected();
  const [hidden, setHidden] = useState(false);
  const [panelHidden, setPanelHidden] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

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

  return (
    <>
      <nav className={`row-between nav-bar ${hidden ? "hidden" : "shown"}`}>
        <button className="invisibutton" onClick={scrollTop}>
          {" "}
          <img
            className="nav-title-img"
            src={`${window.location.origin}/Images/Sne-title.png`}
            alt=""
          />
        </button>
        {langSelected && <JumpToPage />}
        <div className="row-end">
          {langSelected && (
            <button className="invisibutton" onClick={togglePanel}>
              <Hamburger />
            </button>
          )}
        </div>
      </nav>
      <SideBar hidden={panelHidden} />
    </>
  );
}
