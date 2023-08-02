import { placeholder } from "../Data/testPages";
import "./App.css";
import LangProvider from "./Context/LanguageContext";
import ScrollProvider from "./Context/ScrollContext";
import Cover from "./Cover/Cover";
import InfiniteScroll from "./InfiniteScroll/InfiniteScroll";
import NavBar from "./NavBar/NavBar";

function App() {
  return (
    <LangProvider>
      <ScrollProvider>
        <NavBar />
        <Cover />
        <InfiniteScroll book={placeholder} />
      </ScrollProvider>
    </LangProvider>
  );
}

export default App;
