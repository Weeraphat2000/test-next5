"use client";

import React, { createContext, useContext, useState } from "react";

const MyContext = createContext({});

function MyContextProvider({ children }: any) {
  const [c, setC] = useState<number>(0);
  return (
    <MyContext.Provider value={{ c, setC }}>{children}</MyContext.Provider>
  );
}

export default MyContextProvider;

export const useMy: any = () => useContext(MyContext);
// contexts/MyContext.tsx
// import { createContext, useContext, useState } from "react";

// // สร้าง Context
// const MyContext = createContext<number>(0);

// // สร้าง Hook เพื่อใช้งาน Context
// export const useMy = () => useContext(MyContext);

// export const MyContextProvider: React.FC = ({ children }) => {
//   const [c, setC] = useState<number>(0);

//   return (
//     <MyContext.Provider value={{ c, setC }}>{children}</MyContext.Provider>
//   );
// };
