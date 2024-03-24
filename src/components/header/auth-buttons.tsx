"use client";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Button from "../elements/button";

export default function AuthButtons({ status, image, user }: AuthButtonsProps) {
  if (status === "authenticated")
    return (
      <div className="flex flex-col items-center gap-3 md:flex-row md:gap-6">
        <div className="md:text-md flex items-center gap-2 text-xl">
          <Image
            src={image || ""}
            className="hidden h-[25px] w-[25px] md:block"
            alt={user}
            width={25}
            height={25}
          />
          {user}
        </div>
        <Button className="btn-danger text-sm" onClick={() => signOut()}>
          התנתקות
        </Button>
      </div>
    );
  else if (status === "unauthenticated")
    return (
      <Button className="text-sm" onClick={() => signIn("google")}>
        התחברות
      </Button>
    );
  else return <div></div>;
}

interface AuthButtonsProps {
  status: "authenticated" | "loading" | "unauthenticated";
  image: string;
  user: string;
}
