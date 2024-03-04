import { Role } from "@/types/globals";
import { NavConfig } from "@/types/nav";
import { defaultNavConfig } from "./default-nav-links";
import { adminNavConfig } from "./admin-nav-links";

export const getNavConfig = (userId: string | null, role?: Role) => {
  let navConfig: NavConfig = defaultNavConfig;
  if (userId && role === "admin") {
    navConfig = adminNavConfig;
  }

  return navConfig;
};
