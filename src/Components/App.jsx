import { useRef } from "react";
import { placeholder } from "../Data/testPages";
import "./App.css";
import LangProvider from "./Context/LanguageContext";
import ScrollProvider from "./Context/ScrollContext";
import Cover from "./Cover/Cover";
import InfiniteScroll from "./InfiniteScroll/InfiniteScroll";
import NavBar from "./NavBar/NavBar";

function App() {
  const coverRef = useRef();
  return (
    <LangProvider>
      <ScrollProvider>
        <NavBar />
        <Cover coverRef={coverRef} />
        <InfiniteScroll coverRef={coverRef} book={placeholder} />
      </ScrollProvider>
    </LangProvider>
  );
}

export default App;
