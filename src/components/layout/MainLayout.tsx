"use client";
import React, { FC } from "react";

import Header from "./views/Header";
import Sidebar from "./views/Sidebar";
import { useLayout } from "./hooks/useLayout";

interface IMainLayout {
  children?: React.ReactNode;
}

const MainLayout: FC<IMainLayout> = ({ children }) => {
  const { showSidebar, handleToggleSidebar, menuList } = useLayout();
  return (
    <div>
      {/* Header */}
      <Header
        showSidebar={showSidebar}
        handleToggleSidebar={handleToggleSidebar}
      />
      {/* Sidebar */}
      <Sidebar
        handleToggleSidebar={handleToggleSidebar}
        showSidebar={showSidebar}
        menuList={menuList}
      />

      {/* Content */}
      <div
        className={`transition-all mr-auto h-[calc(100vh-5.3125rem)] ${
          showSidebar
            ? "w-[calc(100%-8.125rem)] lg:w-[calc(100%-20.625rem)]"
            : "w-[calc(100%-8.125rem)]"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
