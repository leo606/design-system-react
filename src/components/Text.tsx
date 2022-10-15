interface TextProps {
  size?: "sm" | "md" | "lg";
}

export function Text({ size = "md" }: TextProps) {
  return <h1 className=''>Text</h1>;
}
