import { NavConfig } from "@/types/nav";

export const adminNavConfig: NavConfig = {
  mainNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
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
