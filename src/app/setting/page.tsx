"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import SettingPage from "@/containers/setting/SettingPage";
import { userData } from "@/apis/mock";

const Setting = () => {
  const router = useRouter();
  const isAdmin = userData.role === "admin";

  useEffect(() => {
    if (!isAdmin) {
      router.push("/dashboard");
    }
  }, [isAdmin, router]);

  if (!isAdmin) {
    return null; // Prevent rendering if not admin
  }

  return <SettingPage />;
};

export default Setting;
