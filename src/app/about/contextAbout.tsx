"use client";

import { createContext, useContext, useState } from "react";

export const contextAbout = createContext({});
export function ContextAboutProvider({ children }: any) {
  const [test, setTest] = useState(100);
  return (
    <contextAbout.Provider value={{ test, setTest }}>
      {children}
    </contextAbout.Provider>
  );
}
export const useContextAbout = (): any => useContext(contextAbout);
