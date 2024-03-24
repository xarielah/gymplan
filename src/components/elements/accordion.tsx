"use client";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import cn from "~/utils/cn";

export const accordionContext = createContext<{
  expanded: string;
  setExpanded: Dispatch<SetStateAction<string>>;
}>({
  expanded: "",
  setExpanded: () => undefined,
});

export default function Accordion({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [expanded, setExpanded] = useState<string>("");

  return (
    <>
      <ul className={cn("last:border-b-[1px]", className || "")}>
        <accordionContext.Provider value={{ expanded, setExpanded }}>
          {children}
        </accordionContext.Provider>
      </ul>
    </>
  );
}
