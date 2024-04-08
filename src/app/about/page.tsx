import MyContextProvider from "@/MyContext";
import Button from "./Button";
import Link from "next/link";
import { ContextAboutProvider } from "./contextAbout";

function page() {
  return (
    <ContextAboutProvider>
      <div>
        {/* <MyContextProvider> */}
        <Button>HUN</Button>
        <Button>jim</Button>
        <Button>a</Button>
        <Link href="/profile">profile</Link>
        {/* </MyContextProvider> */}
      </div>
    </ContextAboutProvider>
  );
}

export default page;
