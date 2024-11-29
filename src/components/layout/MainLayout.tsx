"use client";
import React, { FC } from "react";

import Header from "./views/Header";
import Sidebar from "./views/Sidebar";

interface IMainLayout {
  children?: React.ReactNode;
}

const MainLayout: FC<IMainLayout> = ({ children }) => {
  return (
    <div>
      {/* Header */}
      <Header
        showSidebar={false}
        handleToggleSidebar={() => {}}
      />
      {/* Sidebar */}
      <Sidebar
        handleToggleSidebar={() => {}}
        showSidebar={true}
      />
      {children}
    </div>
  );
};

export default MainLayout;
