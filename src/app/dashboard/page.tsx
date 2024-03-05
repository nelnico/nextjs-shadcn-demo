import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const DashboardPage = () => {
  const { userId, sessionClaims } = auth();

  if (!userId) redirect("/");
  const role = sessionClaims?.metadata?.role;

  switch (role) {
    case "admin":
    case "owner":
      redirect("/dashboard/admin");
    case "agent":
      redirect("/dashboard/agent");
    case "client":
      redirect("/dashboard/client");
    case "provider":
      redirect("/dashboard/provider");
    case "venue":
      redirect("/dashboard/venue");
    case "advertiser":
      redirect("/dashboard/advertiser");
    default:
      redirect("/");
  }
};

export default DashboardPage;
