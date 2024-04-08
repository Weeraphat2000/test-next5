import React from "react";
import NavBar from "../components/NavBar";
import img from "../../../public/521997_532967043454459_1688218405_n.jpg";
import Image from "next/image";

function index() {
  return (
    <div>
      {/* component ของ Next */}
      <Image
        alt="'test"
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8w8Aj5mmx-CymtQCS5ZPW-2ZobeYTj5WByznAldi0Cw&s"
        }
        width={400}
        height={400}
      />
      <Image src={img} alt="logo" width={300} height={400} />
      <NavBar></NavBar>
    </div>
  );
}

export default index;
