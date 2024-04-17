import "./ReadingOptions.css";
// import PdfDownloader from "../../Assets/PdfDownloader/PdfDownloader";
import DownArrow from "../../Assets/Icons/DownArrow";

export default function ReadingOptions() {
  return (
    <div className="reading-options col-start">
      <h2 className="scroll-title">Start reading</h2>
      <div className="down-arrow">
        <DownArrow />
      </div>
    </div>
  );
}
