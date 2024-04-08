"use client";

import { useMy } from "@/MyContext";

function page() {
  const { c } = useMy();
  return (
    <div>
      <div>Priofile</div>
      <div>{c}</div>
    </div>
  );
}

export default page;
