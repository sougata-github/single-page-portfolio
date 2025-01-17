import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Button = (
  props: {
    variant: "primary" | "secondary" | "text";
    iconAfter?: ReactNode;
  } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { className, children, variant, iconAfter, ...rest } = props;

  return (
    <button
      className={twMerge(
        "h-11 px-6 rounded-xl border  border-red-orange-500 uppercase inline-flex items-center gap-2",
        className,
        variant === "primary" && "bg-red-orange-500 text-white",
        variant === "secondary" && "",
        variant === "text" && "h-auto border-transparent"
      )}
      {...rest}
    >
      <span>{children}</span>
      {iconAfter && <span>{iconAfter}</span>}
    </button>
  );
};

export default Button;
