"use client";

import { ContextAboutProvider, useContextAbout } from "../contextAbout";
import Me from "./Me";

function page() {
  return (
    <ContextAboutProvider>
      <Me />
      <Me />
      <Me />
      <Me />
    </ContextAboutProvider>
  );
}

export default page;
