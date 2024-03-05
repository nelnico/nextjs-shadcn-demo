import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface ProviderDashboardLayoutProps {
  children: React.ReactNode;
}

const ProviderDashboardLayout = ({
  children,
}: ProviderDashboardLayoutProps) => {
  const { userId, sessionClaims } = auth();
  const role = sessionClaims?.metadata?.role;
  if (!userId || !role || role !== "provider") redirect("/");

  return (
    <>
      <h1>Provider Dashboard Layout</h1>
      {children}
    </>
  );
};

export default ProviderDashboardLayout;
