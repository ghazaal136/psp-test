/// <reference types="cypress" />

import { getMenuList } from "@/components/layout/services";

describe("SideBar menu list Test", () => {
  it("renders the correct menu list for admin", () => {
    const menuList = getMenuList("admin");
    expect(menuList).to.have.length(2);
  });

  it("renders the correct menu list for user", () => {
    const menuList = getMenuList("user");

    expect(menuList).to.have.length(1);
  });
});
