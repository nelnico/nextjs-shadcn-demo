import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface AdminDashboardLayoutProps {
  children: React.ReactNode;
}

const AdminDashboardLayout = ({ children }: AdminDashboardLayoutProps) => {
  const { userId, sessionClaims } = auth();
  const role = sessionClaims?.metadata?.role;
  if (!userId || !role || (role !== "admin" && role !== "owner")) redirect("/");

  return (
    <>
      {/* <h1>Admin Dashboard Layout</h1> */}
      {children}
    </>
  );
};

export default AdminDashboardLayout;
