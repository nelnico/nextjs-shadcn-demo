"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { roleDisplayName } from "@/lib/helpers/string";
import { Role } from "@/types/globals";
import { SignUp, SignUpButton } from "@clerk/clerk-react";
import { SignInButton } from "@clerk/nextjs";
import { RocketIcon, ValueNoneIcon } from "@radix-ui/react-icons";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";

const SignIn = () => {
  return (
    <div className="h-screen  w-full flex justify-center items-center">
      <div className="w-auto">
        <Alert>
          <RocketIcon className="h-4 w-4" />
          <AlertTitle>Please create a login first</AlertTitle>
          <Separator className="my-4" />
          <AlertDescription>
            <div>
              In order to create your profile, we need you to create a account
              first.
            </div>
            <div>
              If you already created a account, we just need you to sign in
              first.
            </div>
            <Button className="w-full my-4">
              <SignUpButton redirectUrl="/join-us">
                Create a new account
              </SignUpButton>
            </Button>
            <Button className="w-full">
              <SignInButton redirectUrl="/join-us">
                Already got an account?
              </SignInButton>
            </Button>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};

export default SignIn;
