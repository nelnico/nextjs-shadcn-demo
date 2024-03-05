import { Role } from "@/types/globals";

export const roleDisplayName = (role: Role) => {
  if (role === "owner") return "Owner";
  if (role === "admin") return "Administrator";
  if (role === "agent") return "Agent";
  if (role === "provider") return "Escort";
  if (role === "client") return "Punter";
  if (role === "venue") return "Venue";
  if (role === "advertiser") return "Advertiser";
};
