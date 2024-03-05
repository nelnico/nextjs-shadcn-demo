import { NavConfig } from "@/types/nav";

export const providerNavConfig: NavConfig = {
  mainNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
    },
  ],
  sidebarNav: [
    {
      title: "Other Provider Stuff",
      items: [
        {
          title: "Introduction",
          href: "/",
          items: [],
        },
      ],
    },
    {
      title: "More Provider Stuff",
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
