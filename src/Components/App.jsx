import "./App.css";
import LangProvider from "./Context/LanguageContext";
import ScrollProvider from "./Context/ScrollContext";
import MainContent from "./MainContent";

function App() {
  return (
    <LangProvider>
      <ScrollProvider>
        <MainContent />
      </ScrollProvider>
    </LangProvider>
  );
}

export default App;
