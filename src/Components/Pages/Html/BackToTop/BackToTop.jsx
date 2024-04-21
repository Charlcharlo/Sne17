// import { useSetOffset } from "../../../Context/OffsetContext";
import "./BackToTop.css";
export default function BackToTop() {
  //   const setOffset = useSetOffset();
  function onClick() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <button className="back-to-top" onClick={onClick}>
      <h2 className="sub-title">Back to top</h2>
    </button>
  );
}
