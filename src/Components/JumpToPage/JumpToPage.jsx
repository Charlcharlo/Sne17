import { useSetInitial } from "../Context/InitialContext";
import { useSetOffset } from "../Context/OffsetContext";
import "./JumpToPage.css";

export default function JumpToPage() {
  const setOffset = useSetOffset();
  const setInitial = useSetInitial();

  function handleChange(e) {
    if (e.target.value) {
      const intVal = parseInt(e.target.value);
      setInitial(false);
      setOffset(intVal);
      e.target.value = null;
    }
  }

  return (
    <select className="page-selection" onChange={handleChange}>
      <option style={{ display: "none" }} value={null}>
        Jump to Page
      </option>
      <option value={0}>Page 1</option>
      <option value={1}>Page 2</option>
      <option value={2}>Page 3</option>
      <option value={3}>Page 4</option>
      <option value={4}>Page 5</option>
      <option value={5}>Page 6</option>
    </select>
  );
}
