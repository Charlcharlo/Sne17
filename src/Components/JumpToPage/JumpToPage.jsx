import { useEffect, useState } from "react";
import { useSetInitial } from "../Context/InitialContext";
import { useSetOffset } from "../Context/OffsetContext";
import "./JumpToPage.css";

export default function JumpToPage() {
  const testData = ["Page 1", "Page 2", "Page 3", "Page 4", "Page 5", "Page 6"];

  const [query, setQuery] = useState("");
  const [results, setResults] = useState(testData);
  const setOffset = useSetOffset();
  const setInitial = useSetInitial();

  function handleClick(offset) {
    console.log("clicked");
    setInitial(false);
    setOffset(offset);
  }

  function handleChange(e) {
    setQuery(e.target.value);
  }

  useEffect(() => {
    const results = [];
    testData.forEach((element) => {
      if (element.includes(query)) {
        results.push(element);
      }
      setResults(results);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  function renderOptions(option, i) {
    return (
      <button className="jtp-button" onClick={() => handleClick(i)}>
        {option}
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
