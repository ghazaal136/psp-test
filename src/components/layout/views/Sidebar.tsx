import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { icons } from "@/utils/icons";
import { IMenuItem } from "../services";
import CustomButton from "@/components/custom-button/CustomButton";

interface ISidebar {
  handleToggleSidebar: () => void;
  showSidebar: boolean;
  menuList: IMenuItem[];
}
const Sidebar: FC<ISidebar> = ({
  handleToggleSidebar,
  showSidebar,
  menuList,
}) => {
  const pathname = usePathname();
  return (
    <div
      className={`${
        showSidebar
          ? "w-[19.375rem]"
          : "w-[6.875rem] flex justify-center items-start"
      } transition-all px-4 py-4 fixed right-2 top-4 z-10 bg-main-purple h-[calc(100vh-30px)] rounded-md`}
    >
      <div className='flex items-center justify-between'>
        <Link href={"/dashboard"}>
          <div className={`flex items-center gap-3`}>
            <Image
              alt='logo'
              src={"/assets/images/logo.png"}
              width={"60"}
              height={"60"}
              className='rounded-full'
            />
            {showSidebar && (
              <span className='text-white text-3xl'>نام شرکت</span>
            )}
          </div>
        </Link>

        {showSidebar && (
          <div
            className='flex items-center justify-center w-8 h-8 -scale-x-100 [&>svg>path]:!fill-white cursor-pointer'
            onClick={handleToggleSidebar}
          >
            {icons.hamburgerMenu()}
          </div>
        )}
      </div>

      {showSidebar && (
        <div className='mt-10'>
          {menuList.map((menuItem: IMenuItem, index: number) => (
            <div
              key={index}
              className='mb-2'
            >
              <CustomButton
                text={menuItem.title}
                isLink={true}
                linkHref={menuItem.linkAddress}
                classNames={
                  menuItem.target === pathname.replace("/", "")
                    ? "bg-light-purple"
                    : ""
                }
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
