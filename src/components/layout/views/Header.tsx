import React, { FC } from "react";

import { icons } from "@/utils/icons";

interface IHeader {
  showSidebar: boolean;
  handleToggleSidebar: () => void;
}

const Header: FC<IHeader> = ({ showSidebar, handleToggleSidebar }) => {
  return (
    <div
      className={`flex items-center h-12 py-2 mb-2 bg-transparent pl-10 transition-all mr-auto ${
        showSidebar ? "w-[calc(100%-8.125rem)] lg:w-[calc(100%-20.625rem)]" : "w-[calc(100%-8.125rem)]"
      }`}
    >
        {!showSidebar && (
          <div
            className='flex items-center justify-center w-8 h-8 -scale-x-100 cursor-pointer'
            onClick={handleToggleSidebar}
          >
            {icons.hamburgerMenu()}
          </div>
        )}
    </div>
  );
};

export default Header;
