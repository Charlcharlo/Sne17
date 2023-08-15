/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState } from "react";

const OffsetContext = createContext();
const SetOffsetContext = createContext();

export function useOffset() {
  return useContext(OffsetContext);
}

export function useSetOffset() {
  return useContext(SetOffsetContext);
}

export default function OffsetProvider({ children }) {
  const [offset, setOffset] = useState(0);

  function assignOffset(o) {
    setOffset(o);
  }

  return (
    <OffsetContext.Provider value={offset}>
      <SetOffsetContext.Provider value={assignOffset}>
        {children}
      </SetOffsetContext.Provider>
    </OffsetContext.Provider>
  );
}

OffsetProvider.propTypes;
