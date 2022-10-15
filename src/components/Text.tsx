import { clsx } from "clsx";

export interface TextProps {
  size?: "sm" | "md" | "lg";
  children: string;
}

export function Text({ size = "md", children }: TextProps) {
  return (
    <h1
      className={clsx("text-grey-600 font-sans", {
        "text-sm": size === "sm",
        "text-md": size === "md",
        "text-lg": size === "lg",
      })}
    >
      {children}
    </h1>
  );
}
