import { useEffect, useState } from "react";
import { useLangSelected } from "../Context/LanguageContext";
import { useScroll } from "../Context/ScrollContext";
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

  return (
    <nav className={`row-between nav-bar ${hidden ? "hidden" : "shown"}`}>
      <h1>SNE17</h1>
      <div className="row-start">{langSelected && <LangSelect />}</div>
    </nav>
  );
}
