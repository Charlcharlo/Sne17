import { useEffect, useState } from "react";
import { useLangSelected } from "../Context/LanguageContext";
import { useScroll } from "../Context/ScrollContext";
import JumpToPage from "../JumpToPage/JumpToPage";
import LangSelect from "../LangSelect/LangSelect";
import "./NavBar.css";

export default function NavBar() {
  const scrollHeight = useScroll();
  const langSelected = useLangSelected();
  const [hidden, setHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const position = scrollHeight;
    if (position <= lastScrollTop) {
      setHidden(false);
    } else {
      setHidden(true);
    }
    setLastScrollTop(position <= 0 ? 0 : position);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollHeight]);

  function scrollTop() {
    window.scroll({ top: 0, behavior: "smooth" });
  }

  return (
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
      <div className="row-end">{langSelected && <LangSelect />}</div>
    </nav>
  );
}
