import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface AdvertiserDashboardLayoutProps {
  children: React.ReactNode;
}

const AdvertiserDashboardLayout = ({
  children,
}: AdvertiserDashboardLayoutProps) => {
  const { userId, sessionClaims } = auth();
  const role = sessionClaims?.metadata?.role;
  if (!userId || !role || role !== "advertiser") redirect("/");

  return (
    <>
      <h1>Advertiser Dashboard Layout</h1>
      {children}
    </>
  );
};

export default AdvertiserDashboardLayout;
