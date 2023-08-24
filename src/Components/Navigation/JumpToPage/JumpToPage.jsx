import { useEffect, useState } from "react";
import { scottPilgrim } from "../../../Data/testPages";
import { useSetInitial } from "../../Context/InitialContext";
import { useSetOffset } from "../../Context/OffsetContext";
import "./JumpToPage.css";

export default function JumpToPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(scottPilgrim.pages);
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
    scottPilgrim.pages.forEach((element) => {
      if (element.title.includes(query)) {
        results.push(element);
      }
      setResults(results);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

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
