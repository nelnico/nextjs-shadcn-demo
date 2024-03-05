import { auth } from "@clerk/nextjs";
import Joined from "./components/joined";
import SignIn from "./components/signin";

interface JoinUsboardLayoutProps {
  children: React.ReactNode;
}

const JoinUsDashboardLayout = ({ children }: JoinUsboardLayoutProps) => {
  const { userId, sessionClaims } = auth();

  const role = sessionClaims?.metadata?.role;

  {
    if (role) return <Joined role={role} />;
  }

  {
    if (!userId) return <SignIn />;
  }

  return (
    <div className="  w-full flex justify-center items-center">{children}</div>
  );
};

export default JoinUsDashboardLayout;
