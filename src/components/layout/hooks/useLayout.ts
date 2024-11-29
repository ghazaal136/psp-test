import { useEffect, useState } from "react";

import { userData } from "@/apis/mock";
import { getMenuList, IMenuItem } from "../services";

export const useLayout = () => {
  //User data should fetch and set in state manger for accessing it easier. but for instance we can have mock userData which is imported above

  const [showSidebar, setShowSidebar] = useState(true);
  const [menuList, setMenuList] = useState<IMenuItem[]>([]);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
    localStorage.setItem("showSidebar", JSON.stringify(!showSidebar));
  };

  useEffect(() => {
    const role = userData.role;
    if (role) {
      const menu = getMenuList(role);
      setMenuList(menu);
    }
  }, []);

  useEffect(() => {
    const showSidebar = localStorage.getItem("showSidebar");
    setShowSidebar(showSidebar ? JSON.parse(showSidebar) : true);
  }, []);

  return {
    showSidebar,
    handleToggleSidebar,
    menuList,
  };
}