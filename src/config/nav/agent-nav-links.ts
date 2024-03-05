import { NavConfig } from "@/types/nav";

export const agentNavConfig: NavConfig = {
  mainNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
    },
  ],
  sidebarNav: [
    {
      title: "Other Agent Stuff",
      items: [
        {
          title: "Introduction",
          href: "/",
          items: [],
        },
      ],
    },
    {
      title: "More Agent Stuff",
      items: [
        {
          title: "More things",
          href: "/ ",
          items: [],
        },
      ],
    },
  ],
};
