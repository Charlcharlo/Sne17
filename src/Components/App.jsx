import "./App.css";
import LangTest from "./Context/LAngTest";
import LangProvider from "./Context/LanguageContext";

function App() {
  return (
    <LangProvider>
      <LangTest />
    </LangProvider>
  );
}

export default App;
