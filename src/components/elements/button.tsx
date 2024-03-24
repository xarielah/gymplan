import React from "react";
import { SyncLoader } from "react-spinners";
import cn from "~/utils/cn";

export default React.forwardRef(function Button(
  props: Readonly<React.ButtonHTMLAttributes<HTMLButtonElement>> & ButtonTypes,
  ref: React.Ref<HTMLButtonElement>,
) {
  const { className, children, loading, disabled, ...restProps } = props;
  return (
    <button
      ref={ref}
      {...restProps}
      disabled={loading || disabled}
      className={cn(
        "min-w-24 bg-purple-400 px-4 py-1 text-white duration-100 ease-in-out hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-50",
        className || "",
        loading ? "relative text-transparent duration-0" : "",
      )}
    >
      {loading === true ? (
        <SyncLoader
          size={8}
          color="rgb(24 24 27)"
          className={cn(
            "absolute left-1/2 -translate-x-1/2",
            loading ? "opacity-100" : "opacity-0",
          )}
        />
      ) : (
        ""
      )}
      {children}
    </button>
  );
});

interface ButtonTypes {
  loading?: boolean;
}
