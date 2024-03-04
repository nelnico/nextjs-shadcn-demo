import { NavConfig } from "@/types/nav";

export const adminNavConfig: NavConfig = {
  mainNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      title: "Dashboard 2",
      href: "/dashboard2",
    },
    {
      title: "Dashboard 3",
      href: "/dashboard3",
    },
  ],
  sidebarNav: [
    {
      title: "Other Admin Stuff",
      items: [
        {
          title: "Introduction",
          href: "/",
          items: [],
        },
      ],
    },
    {
      title: "More Admin Stuff",
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
