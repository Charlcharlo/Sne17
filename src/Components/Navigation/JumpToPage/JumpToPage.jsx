import { kebabCase } from "lodash";
import { useEffect, useState } from "react";
import { useBook } from "../../Context/BookContext";
import { useSetInitial } from "../../Context/InitialContext";
import { useSetOffset } from "../../Context/OffsetContext";
import "./JumpToPage.css";

export default function JumpToPage() {
  const [query, setQuery] = useState("");
  const book = useBook();
  const [results, setResults] = useState([]);
  const setOffset = useSetOffset();
  const setInitial = useSetInitial();

  function handleClick(offset) {
    setInitial(false);
    setOffset(offset);
  }

  function handleChange(e) {
    setQuery(e.target.value);
  }

  useEffect(() => {
    const results = [];
    book.forEach((element, i) => {
      if (element.title.includes(query)) {
        results.push({ title: element.title, index: i });
      }
      setResults(results);
    });
  }, [query, book]);

  function renderOptions(option, i) {
    return (
      <button
        className="jtp-button"
        onClick={() => handleClick(option.index)}
        key={i}
      >
        <img
          className="jtp-img"
          src={`${
            window.location.origin
          }/Sne17/final-pages-eng/preview/${kebabCase(option.title)}.jpg`}
          alt=""
        />
        <h2 className="jtp-name">{option.title}</h2>
      </button>
    );
  }

  return (
    <div className="jtp-wrapper centered-container">
      <input
        className="jtp-input"
        type="text"
        placeholder="Jump to page..."
        onChange={handleChange}
        value={query}
      />
      <div className="jtp-results">{results.map(renderOptions)}</div>
    </div>
  );
}
