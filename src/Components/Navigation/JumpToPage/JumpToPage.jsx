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
    book.forEach((element) => {
      if (element.title.includes(query)) {
        results.push(element);
      }
      setResults(results);
    });
  }, [query, book]);

  function renderOptions(option, i) {
    return (
      <button className="jtp-button" onClick={() => handleClick(i)} key={i}>
        {option.title}
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
