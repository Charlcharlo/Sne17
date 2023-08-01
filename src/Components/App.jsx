import "./App.css";
import LangProvider from "./Context/LanguageContext";
import ScrollProvider from "./Context/ScrollContext";
import Cover from "./Cover/Cover";
import NavBar from "./NavBar/NavBar";

function App() {
  return (
    <LangProvider>
      <ScrollProvider>
        <NavBar />
        <Cover />
      </ScrollProvider>
    </LangProvider>
  );
}

export default App;
