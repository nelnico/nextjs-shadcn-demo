"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Role } from "@/types/globals";
import { NavConfig } from "@/types/nav";
import { defaultNavConfig } from "@/config/nav/default-nav-links";
import { adminNavConfig } from "@/config/nav/admin-nav-links";

interface MainNavProps {
  userId: string | null;
  role?: Role;
}
export function MainNav({ userId, role }: MainNavProps) {
  const pathname = usePathname();

  let navConfig: NavConfig = defaultNavConfig;
  if (userId && role === "admin") {
    navConfig = adminNavConfig;
  }

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        {navConfig.mainNav.map((item, index) => (
          <Link
            key={index}
            href={item.href!}
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === item.href ? "text-foreground" : "text-foreground/60"
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
