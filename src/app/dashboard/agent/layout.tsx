import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface AgentDashboardLayoutProps {
  children: React.ReactNode;
}

const AgentDashboardLayout = ({ children }: AgentDashboardLayoutProps) => {
  const { userId, sessionClaims } = auth();
  const role = sessionClaims?.metadata?.role;
  if (!userId || !role || role !== "agent") redirect("/");

  return (
    <>
      <h1>Agent Dashboard Layout</h1>
      {children}
    </>
  );
};

export default AgentDashboardLayout;
