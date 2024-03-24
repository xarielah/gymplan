import React from "react";
import type { FormErr } from "~/types/generic-forms.types";
import cn from "~/utils/cn";
import FormError from "./form-error";

export default React.forwardRef(function Input(
  props: Readonly<React.InputHTMLAttributes<HTMLInputElement>> & FormErr,
  ref: React.Ref<HTMLInputElement>,
) {
  const { className, err, ...restProps } = props;
  return (
    <div className="flex flex-col gap-1">
      <input
        ref={ref}
        {...restProps}
        className={cn(
          className || "",
          "border-[1px] border-b-4 border-gray-200 px-4 py-1 focus:border-gray-500 focus:outline-none",
        )}
      />
      <FormError err={err} />
    </div>
  );
});
