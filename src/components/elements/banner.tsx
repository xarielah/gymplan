import cn from "~/utils/cn";

export default function Banner({
  children,
  className,
}: {
  children: string | React.ReactNode | React.ReactNode[];
  className?: string;
}) {
  return (
    <div className={cn("w-full bg-zinc-950 p-4 text-white", className || "")}>
      {children}
    </div>
  );
}
