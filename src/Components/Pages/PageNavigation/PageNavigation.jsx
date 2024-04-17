import { useBook } from "../../Context/BookContext";
import { useOffset, useSetOffset } from "../../Context/OffsetContext";
import "./PageNavigation.css";

export default function PageNavigation() {
  const offset = useOffset();
  const setOffset = useSetOffset();
  const pages = useBook();
  const URI_PREFIX = `${window.location.origin}/Sne17/final-pages-eng/preview`;

  function goPageOne() {
    setOffset(0);
  }

  function showPrev() {
    setOffset((prev) => {
      return prev > 0 ? prev - 1 : 0;
    });
  }

  return (
    <div className="row-center page-nav-wrapper">
      {offset > 1 && (
        <button className="nav-button" onClick={goPageOne}>
          <img src={`${URI_PREFIX}/${pages[0].src}`} alt="" />
          <p>Go to Page 1</p>
        </button>
      )}
      <button className="nav-button" onClick={showPrev}>
        <img src={`${URI_PREFIX}/${pages[offset - 1].src}`} alt="" />
        <p>Previous Page</p>
      </button>
    </div>
  );
}
