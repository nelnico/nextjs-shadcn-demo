import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface VenueDashboardLayoutProps {
  children: React.ReactNode;
}

const VenueDashboardLayout = ({ children }: VenueDashboardLayoutProps) => {
  const { userId, sessionClaims } = auth();
  const role = sessionClaims?.metadata?.role;
  if (!userId || !role || role !== "venue") redirect("/");

  return (
    <>
      <h1>Venue Dashboard Layout</h1>
      {children}
    </>
  );
};

export default VenueDashboardLayout;
