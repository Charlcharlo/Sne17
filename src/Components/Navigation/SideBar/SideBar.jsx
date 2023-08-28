import ClickAwayListener from "react-click-away-listener";
import LangButtons from "../LangButtons/LangButtons";
import PdfDownloader from "../../CoverPage/PdfDownloader/PdfDownloader";
import "./SideBar.css";

export default function SideBar({ hidden, hidePanel }) {
  return (
    <ClickAwayListener onClickAway={hidePanel}>
      <div className={`side-bar ${hidden && "hidden"}`}>
        <div className="panel-section">
          <h2 className="panel-section-header">Language</h2>
          <LangButtons />
        </div>
        <div className="panel-section">
          <h2 className="panel-section-header">Learn More</h2>
          <a className="panel-link" href="">
            About the author
          </a>
          <a className="panel-link" href="">
            Ethekweni Strathub
          </a>
          <a className="panel-link" href="">
            Ethekweni Municipality
          </a>
        </div>
        <div className="panel-section">
          <PdfDownloader />
        </div>
      </div>
    </ClickAwayListener>
  );
}

SideBar.propTypes;
