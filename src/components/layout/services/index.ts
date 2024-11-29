export interface IMenuItem {
  title: string;
  linkAddress: string;
  target: string;
}

export const getMenuList = (role: string) => {
  if (role === "admin") {
    return [
      {
        title: "لیست",
        linkAddress: "/list",
        target: "list",
      },
      {
        title: "تنظیمات",
        linkAddress: "/setting",
        target: "setting",
      },
    ];
  } else {
    return [
      {
        title: "لیست",
        linkAddress: "/list",
        target: "list",
      },
    ];
  }
};
