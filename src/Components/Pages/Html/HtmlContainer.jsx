import Preface from "./Preface/Preface";

export default function HtmlContainer({ name }) {
  switch (name) {
    case "preface":
      return <Preface />;
    case "editors-note":
      return;
    case "characters":
      return;
    default:
      break;
  }
}

HtmlContainer.propTypes;
