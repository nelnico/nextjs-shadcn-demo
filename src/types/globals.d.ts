export {};

// Create a type for the roles
export type Role =
  | "owner"
  | "admin"
  | "agent"
  | "provider"
  | "client"
  | "venue"
  | "advertiser";

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Role;
    };
  }
}
