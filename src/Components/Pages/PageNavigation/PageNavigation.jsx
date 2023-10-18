import { pencils } from "../../../Data/pencils";
import { useOffset, useSetOffset } from "../../Context/OffsetContext";
import "./PageNavigation.css";

export default function PageNavigation() {
  const offset = useOffset();
  const setOffset = useSetOffset();
  const { pages } = pencils;

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
          <img
            src={
              pages[0].type === "splash"
                ? pages[0].src
                : pages[0].type === "comic"
                ? pages[0].panels[0].src
                : ""
            }
            alt=""
          />
          <p>Go to Page 1</p>
        </button>
      )}
      <button className="nav-button" onClick={showPrev}>
        <img
          src={
            pages[offset - 1].type === "splash"
              ? pages[offset - 1].src
              : pages[offset - 1].type === "comic"
              ? pages[offset - 1].panels[0].src
              : ""
          }
          alt=""
        />
        <p>Previous Page</p>
      </button>
    </div>
  );
}
