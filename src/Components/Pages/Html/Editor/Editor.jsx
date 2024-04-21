import Splashes from "../Splashes/Splashes";
import "./Editor.css";
import { eng } from "./text";

export default function Editor() {
  const { title, text } = eng;
  return (
    <div className="full-page editor">
      <Splashes />
      <h2 className="title-smaller">{title}</h2>
      <p className="body-text">{text}</p>
      <div className="sig-container">
        <img
          src={`${window.location.origin}/Sne17/characters/marc-sig.png`}
          alt=""
        />
      </div>
    </div>
  );
}

Editor.propTypes;
