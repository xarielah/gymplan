"use client";

import { useSession } from "next-auth/react";
import { notFound } from "next/navigation";
import { useEffect } from "react";
import { TailSpin } from "react-loader-spinner";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      notFound();
    }
  }, [status]);

  if (status === "authenticated") return <>{children}</>;
  else if (status === "loading")
    return (
      <section id="container" className="flex items-center justify-center">
        <TailSpin
          visible={true}
          height="60"
          width="60"
          color="rgb(192 132 252)"
          ariaLabel="tail-spin-loading"
          radius="1"
        />
      </section>
    );
  else return <></>;
}
