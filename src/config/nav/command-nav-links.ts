import { NavConfig } from "@/types/nav";

export const commandsNavConfig: NavConfig = {
  mainNav: [
    {
      title: "Join Us",
      href: "/join-us",
    },
    {
      title: "Contact Us",
      href: "/contact",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/y",
          items: [],
        },
      ],
    },
    {
      title: "More public stuff",
      items: [
        {
          title: "Someting",
          href: "/z",
          items: [],
        },
      ],
    },
  ],
};
