import { useRef } from "react";
import { useLangSelected } from "./Context/LanguageContext";
import Cover from "./Navigation/Cover/Cover";
import InfiniteScroll from "./Pages/InfiniteScroll/InfiniteScroll";
import NavBar from "./Navigation/NavBar/NavBar";

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
