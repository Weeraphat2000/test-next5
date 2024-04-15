import React from "react";
import axios, { AxiosResponse } from "axios";
import Image from "next/image";
interface MyData {
  name: string;
  id: string;
  avatar: string;
}
async function Load() {
  const result = await axios
    .get("https://661c0128e7b95ad7fa697f72.mockapi.io/api/block/userName")
    .then((response: AxiosResponse<MyData[]>) => {
      console.log(response, "response");
      const data = response.data;
      return data;
    });
  return (
    <div>
      {result.map((item) => {
        return (
          <div key={item.id}>
            <div className="flex gap-5">
              <div>{item.id}</div>
              <div>{item.name}</div>
              <Image src={item.avatar} width={100} height={100} alt="test" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Load;
