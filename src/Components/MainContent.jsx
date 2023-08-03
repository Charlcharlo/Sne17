import { useRef } from "react";
import { useLangSelected } from "./Context/LanguageContext";
import Cover from "./Cover/Cover";
import InfiniteScroll from "./InfiniteScroll/InfiniteScroll";
import NavBar from "./NavBar/NavBar";

export default function MainContent() {
  const langSelected = useLangSelected();
  const coverRef = useRef();

  return (
    <>
      <NavBar />
      <Cover coverRef={coverRef} />
      {langSelected && <InfiniteScroll coverRef={coverRef} />}
    </>
  );
}
