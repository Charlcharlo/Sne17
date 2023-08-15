/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState } from "react";

const InitialContext = createContext();
const SetInitialContext = createContext();

export function useInitial() {
  return useContext(InitialContext);
}

export function useSetInitial() {
  return useContext(SetInitialContext);
}

export default function InitialProvider({ children }) {
  const [initial, setInitial] = useState(true);

  function assignInitial(bool) {
    setInitial(bool);
  }

  return (
    <InitialContext.Provider value={initial}>
      <SetInitialContext.Provider value={assignInitial}>
        {children}
      </SetInitialContext.Provider>
    </InitialContext.Provider>
  );
}

InitialProvider.propTypes;
