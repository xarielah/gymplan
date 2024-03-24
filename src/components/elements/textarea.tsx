import React from "react";
import type { FormErr } from "~/types/generic-forms.types";
import cn from "~/utils/cn";

export default React.forwardRef(function Textarea(
  props: Readonly<React.TextareaHTMLAttributes<HTMLTextAreaElement>> & FormErr,
  ref: React.Ref<HTMLTextAreaElement>,
) {
  const { className, err, ...restProps } = props;
  return (
    <div>
      <textarea
        ref={ref}
        {...restProps}
        className={cn(
          className || "",
          "border-[1px] border-b-4 border-gray-200 px-4 py-1 focus:border-gray-500 focus:outline-none",
        )}
      />
      {err ? <span className="text-sm text-red-500">{err}</span> : ""}
    </div>
  );
});
