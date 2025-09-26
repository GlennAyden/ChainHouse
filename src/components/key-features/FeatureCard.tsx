import type { CSSProperties, ReactNode } from "react";

type FeatureCardProps = {
  title: string;
  children: ReactNode;
  className?: string;
  shadow?: "strong" | "subtle";
  style?: CSSProperties;
  titleClassName?: string;
};

const shadowMap: Record<NonNullable<FeatureCardProps["shadow"]>, string> = {
  strong: "shadow-[0_22px_45px_-30px_rgba(107,53,232,0.75)]",
  subtle: "shadow-[0_22px_45px_-30px_rgba(107,53,232,0.65)]",
};

export default function FeatureCard({
  title,
  children,
  className,
  shadow = "strong",
  style,
  titleClassName,
}: FeatureCardProps) {
  const classes = [
    "rounded-[28px] bg-[#FAFAFA] p-8 text-left text-[#050505]",
    shadowMap[shadow],
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const headingClasses = [
    "text-2xl font-semibold tracking-tight",
    titleClassName ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} style={style}>
      <h3 className={headingClasses}>{title}</h3>
      {children}
    </div>
  );
}