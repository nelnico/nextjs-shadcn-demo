"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { roleDisplayName } from "@/lib/helpers/string";
import { Role } from "@/types/globals";
import { ValueNoneIcon } from "@radix-ui/react-icons";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import React from "react";

interface JoinedProps {
  role: Role;
}
const Joined = ({ role }: JoinedProps) => {
  return (
    <div className="h-screen  w-full flex justify-center items-center">
      <div className="w-auto">
        <Alert>
          <ValueNoneIcon className="h-4 w-4" />
          <AlertTitle>Are you lost?</AlertTitle>
          <Separator className="my-4" />
          <AlertDescription>
            <div>You are already logged in as {roleDisplayName(role)}</div>
            <div className="mt-4">
              Try one of the links below to find your way back
            </div>
            <ul className="ml-3 mt-2">
              <li className="mb-3">
                <Link href="/">Go to the home page</Link>
              </li>
              <li className="mb-3">
                <Link href="/dashboard">Go to your dashboard</Link>
              </li>
            </ul>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};

export default Joined;
