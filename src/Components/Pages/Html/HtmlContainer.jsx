import AboutCharacters from "./AboutCharacters/AboutCharacters";
import Editor from "./Editor/Editor";
import Preface from "./Preface/Preface";
import SDGs from "./SDGs/SDGs";

export default function HtmlContainer({ name }) {
  switch (name) {
    case "preface":
      return <Preface />;
    case "editor":
      return <Editor />;
    case "editors-note":
      return;
    case "characters":
      return <AboutCharacters />;
    case "sdg":
      return <SDGs />;
    default:
      break;
  }
}

HtmlContainer.propTypes;
