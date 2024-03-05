import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface ClientDashboardLayoutProps {
  children: React.ReactNode;
}

const ClientDashboardLayout = ({ children }: ClientDashboardLayoutProps) => {
  const { userId, sessionClaims } = auth();
  const role = sessionClaims?.metadata?.role;
  if (!userId || !role || role !== "client") redirect("/");

  return (
    <>
      <h1>Client Dashboard Layout</h1>
      {children}
    </>
  );
};

export default ClientDashboardLayout;
