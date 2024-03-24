"use client";

import { useSession } from "next-auth/react";

import ProtectedComponent from "../auth/auth-wrappers/protected-component";
import AuthButtons from "./auth-buttons";
import GymplanLogo from "./gymplan-logo";
import NavMenu from "./nav-menu";

export default function NavBar() {
  const { status, data } = useSession();

  return (
    <nav className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-4 py-4 md:flex-row md:gap-0">
      <AuthButtons
        status={status}
        image={data?.user.image || ""}
        user={data?.user.name || ""}
      />
      <ProtectedComponent>
        <NavMenu />
      </ProtectedComponent>
      <GymplanLogo />
    </nav>
  );
}
