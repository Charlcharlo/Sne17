import { createContext, useContext, useEffect, useState } from "react";

const FlexContext = createContext();
const WidthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useFlex() {
  return useContext(FlexContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export function useWidth() {
  return useContext(WidthContext);
}

export default function FlexProvider({ children }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [flex, setFlex] = useState(false);

  // Set width

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    updateFlex(width);
  }, [width]);

  function updateFlex(width) {
    if (width < 500) {
      setFlex(true);
    } else {
      setFlex(false);
    }
  }

  return (
    <FlexContext.Provider value={flex}>
      <WidthContext.Provider value={width}>{children}</WidthContext.Provider>
    </FlexContext.Provider>
  );
}

FlexProvider.propTypes;
