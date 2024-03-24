"use client";
import { useLayoutEffect, useState } from "react";
import cn from "~/utils/cn";
import { HandleCookies } from "~/utils/handle-cookies";

const typeClass = {
  error: "bg-red-100 border-red-400 text-red-700",
  success: "bg-green-100 border-green-400 text-green-700",
  warning: "bg-yellow-100 border-yellow-400 text-yellow-700",
  info: "bg-blue-100 border-blue-400 text-blue-700",
};

export default function Alert({
  type,
  title,
  children,
  className,
  canClose,
  cookieName,
}: AlertProps) {
  const [open, setOpen] = useState<boolean>(cookieName ? false : true);

  useLayoutEffect(() => {
    // If cookie name is valid, check if the cookie is set to true.
    if (cookieName) {
      const cookieHandler = new HandleCookies(cookieName);

      if (!open && cookieHandler.getValue() !== "true") {
        setOpen(true);
      }
    }
  }, [open]);

  const toggle = () => {
    // Upon CLOSING the alert, set the cookie to true if cookieName is valid.
    if (open && cookieName) {
      const cookieHandler = new HandleCookies(cookieName);
      cookieHandler.setValue("true");
    }

    setOpen(!open);
  };

  if (!open) return "";
  return (
    <div
      className={cn(
        "rounded-md border-[1px] p-3",
        typeClass[type],
        className || "",
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between",
          title ? "mb-2" : "justify-end",
        )}
      >
        {title ? <h4 className="text-xl font-bold">{title}</h4> : ""}
        {canClose ? (
          <div className="flex justify-end px-2">
            <button onClick={toggle}>&#10005;</button>
          </div>
        ) : (
          ""
        )}
      </div>

      {children}
    </div>
  );
}

interface AlertProps {
  type: "error" | "success" | "warning" | "info";
  title?: string;
  cookieName?: string;
  className?: string;
  children: React.ReactNode | string;
  canClose?: boolean;
}
