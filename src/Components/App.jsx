import "./Variables.css";
import "./App.css";
import FlexProvider from "./Context/FlexContext";
import InitialProvider from "./Context/InitialContext";
import LangProvider from "./Context/LanguageContext";
import OffsetProvider from "./Context/OffsetContext";
import ScrollProvider from "./Context/ScrollContext";
import MainContent from "./MainContent";
import BookProvider from "./Context/BookContext";

function App() {
  return (
    <LangProvider>
      <BookProvider>
        <ScrollProvider>
          <FlexProvider>
            <OffsetProvider>
              <InitialProvider>
                <MainContent />
              </InitialProvider>
            </OffsetProvider>
          </FlexProvider>
        </ScrollProvider>
      </BookProvider>
    </LangProvider>
  );
}

export default App;
