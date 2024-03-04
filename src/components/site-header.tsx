import { CommandMenu } from "@/components/command-menu";
import { MainNav } from "@/components/nav/main-nav/main-nav";
import { MobileNav } from "@/components/nav/main-nav/mobile-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { SignInButton, UserButton, auth } from "@clerk/nextjs";

export function SiteHeader() {
  const { userId, sessionClaims } = auth();
  const role = sessionClaims?.metadata?.role;
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav userId={userId} role={role} />
        <MobileNav userId={userId} role={role} />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none me-4">
            <CommandMenu />
          </div>
          <div className="flex items-center  gap-2">
            {!userId && <SignInButton afterSignInUrl="/" afterSignUpUrl="/" />}
            <UserButton afterSignOutUrl="/" />
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
