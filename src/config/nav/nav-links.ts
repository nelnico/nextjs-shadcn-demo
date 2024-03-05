import { Role } from "@/types/globals";
import { NavConfig } from "@/types/nav";
import { defaultNavConfig } from "./default-nav-links";
import { adminNavConfig } from "./admin-nav-links";
import { providerNavConfig } from "./provider-nav-links";
import { clientNavConfig } from "./client-nav-links";
import { agentNavConfig } from "./agent-nav-links";
import { venueNavConfig } from "./venue-nav-links";
import { advertiserNavConfig } from "./advertiser-nav-links";

export const getNavConfig = (userId: string | null, role?: Role) => {
  let navConfig: NavConfig = defaultNavConfig;
  if (userId) {
    if (role === "admin" || role === "owner") {
      navConfig = adminNavConfig;
    } else if (role === "agent") {
      navConfig = agentNavConfig;
    } else if (role === "provider") {
      navConfig = providerNavConfig;
    } else if (role === "client") {
      navConfig = clientNavConfig;
    } else if (role === "venue") {
      navConfig = venueNavConfig;
    } else if (role === "advertiser") {
      navConfig = advertiserNavConfig;
    }
  }

  return navConfig;
};
