"use client";

import { useMy } from "@/MyContext";

function ActionButton({ children }: { children: string }) {
  const { c, setC } = useMy();
  console.log(c, "ssssssssssss");
  return (
    <button
      className="p-4 bg-red-200"
      onClick={() => {
        console.log("asdf");
        setC((r: number) => r + 1);
      }}
    >
      {children}
    </button>
  );
}

export default ActionButton;
//  9   11:00น
