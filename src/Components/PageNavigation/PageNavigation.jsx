import { useSetOffset } from "../Context/OffsetContext";
import "./PageNavigation.css";

export default function PageNavigation() {
  const setOffset = useSetOffset();

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
      <button onClick={goPageOne}>Go to Page 1</button>
      <button onClick={showPrev}>Show Previous Page</button>
    </div>
  );
}
