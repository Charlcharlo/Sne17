import "./Variables.css";
import "./App.css";
import FlexProvider from "./Context/FlexContext";
import InitialProvider from "./Context/InitialContext";
import LangProvider from "./Context/LanguageContext";
import OffsetProvider from "./Context/OffsetContext";
import ScrollProvider from "./Context/ScrollContext";
import MainContent from "./MainContent";

function App() {
  return (
    <LangProvider>
      <ScrollProvider>
        <FlexProvider>
          <OffsetProvider>
            <InitialProvider>
              <MainContent />
            </InitialProvider>
          </OffsetProvider>
        </FlexProvider>
      </ScrollProvider>
    </LangProvider>
  );
}

export default App;
