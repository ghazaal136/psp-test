import React, { FC } from "react";

import { icons } from "@/utils/icons";

interface IHeader {
  showSidebar: boolean;
  handleToggleSidebar: () => void;
}

const Header: FC<IHeader> = ({ showSidebar, handleToggleSidebar }) => {
  return (
    <div
      className={`flex items-center h-12 py-2 mb-2 bg-red-400 ${
        showSidebar ? '' : ''
      }`}
    >
        {!showSidebar && (
          <div
            className='flex items-center justify-center w-8 h-8 -scale-x-100'
            onClick={handleToggleSidebar}
          >
            {icons.hamburgerMenu()}
          </div>
        )}
    </div>
  );
};

export default Header;
