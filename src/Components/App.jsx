import "./App.css";
import FlexProvider from "./Context/FlexContext";
import LangProvider from "./Context/LanguageContext";
import ScrollProvider from "./Context/ScrollContext";
import MainContent from "./MainContent";

function App() {
  return (
    <LangProvider>
      <ScrollProvider>
        <FlexProvider>
          <MainContent />
        </FlexProvider>
      </ScrollProvider>
    </LangProvider>
  );
}

export default App;
