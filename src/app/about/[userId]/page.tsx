"use client";

import { useParams } from "next/navigation";
import React from "react";

function page() {
  const { userId } = useParams();
  console.log(userId, "userId");
  return <div>page {userId}</div>;
}

export default page;
