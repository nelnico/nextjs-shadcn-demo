import { SignIn, auth } from "@clerk/nextjs";
import Joined from "../components/joined";

const AdvertiserRegisterPage = () => {
  const { userId, sessionClaims } = auth();
  const role = sessionClaims?.metadata?.role;
  {
    if (role) return <Joined role={role} />;
  }
  {
    if (!userId) return <SignIn />;
  }

  return <div>Advertiser Register Page</div>;
};

export default AdvertiserRegisterPage;
