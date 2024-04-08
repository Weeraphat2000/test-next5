import React from "react";
import { useContextAbout } from "../contextAbout";

function Me() {
  const { test } = useContextAbout();
  return <div>Me {test}</div>;
}

export default Me;
