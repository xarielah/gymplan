import React, { FormHTMLAttributes } from "react";
import cn from "~/utils/cn";

export default React.forwardRef(function Form(
  props: Readonly<FormHTMLAttributes<HTMLFormElement>>,
  ref: React.Ref<HTMLFormElement>,
) {
  const { className, children, ...restProps } = props;
  return (
    <form
      ref={ref}
      {...restProps}
      className={cn(className || "", "flex flex-col gap-3")}
    >
      {children}
    </form>
  );
});
