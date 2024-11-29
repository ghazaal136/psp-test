"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return <></>;
};

export default Home;
