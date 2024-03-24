import { useSession } from "next-auth/react";

export default function ProtectedComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { status } = useSession();
  if (status === "authenticated") return <>{children}</>;
  else return <></>;
}
