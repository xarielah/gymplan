import React from "react";
import type { FormErr } from "~/types/generic-forms.types";
import cn from "~/utils/cn";
import FormError from "./form-error";

export default React.forwardRef(function Select(
  props: Readonly<React.SelectHTMLAttributes<HTMLSelectElement>> & FormErr,
  ref: React.Ref<HTMLSelectElement>,
) {
  const { className, children, err, ...restProps } = props;
  return (
    <div className="flex flex-col gap-1">
      <select
        ref={ref}
        {...restProps}
        className={cn(
          className || "",
          "border-[1px] border-b-4 border-gray-200 p-2 focus:border-gray-500 focus:outline-none",
        )}
      >
        {children}
      </select>
      <FormError err={err} />
    </div>
  );
});
