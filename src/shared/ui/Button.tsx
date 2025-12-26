import type { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {}
const Button = ({ children, ...props }: ButtonProps) => {
  return <button {...props}>{children}</button>;
};

export default Button;
