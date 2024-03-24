"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import cn from "~/utils/cn";
import { accordionContext } from "./accordion";

export default function AccordionItem({
  heading,
  children,
  id,
  className,
}: {
  heading: string;
  children: React.ReactNode;
  id: string;
  className?: string;
}) {
  const { expanded, setExpanded } = useContext(accordionContext);

  return (
    <li
      className={cn(
        "overflow-hidden border-[1px] border-b-0 p-4 text-zinc-900",
        className || "",
      )}
    >
      <div
        onClick={() => setExpanded(expanded === id ? "" : id)}
        className={cn(
          "flex cursor-pointer items-center justify-between duration-200 ease-in-out",
          expanded !== id ? "border-b-transparent pb-0" : "border-b pb-2",
        )}
      >
        <h1 className="text-2xl font-bold">{heading}</h1>
        <IoMdArrowDropdown
          size={24}
          className={cn(
            "duration-300 ease-in-out",
            expanded === id ? "rotate-180" : "",
          )}
        />
      </div>
      <AnimatePresence initial={false}>
        {expanded === id ? (
          <motion.div
            key="content"
            exit="collapsed"
            initial="collapsed"
            animate="open"
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
          >
            <div className="h-4"></div>
            <p className="text-lg">{children}</p>
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </li>
  );
}
