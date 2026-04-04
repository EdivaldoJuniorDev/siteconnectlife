"use client";

interface GlassBadgeProps {
  children: React.ReactNode;
  variant?: "light" | "dark";
  className?: string;
  float?: "slow" | "fast";
}

export default function GlassBadge({
  children,
  variant = "light",
  className = "",
  float = "slow",
}: GlassBadgeProps) {
  return (
    <div
      className={`
        px-4 py-2.5 rounded-2xl text-xs text-white
        ${variant === "light"
          ? "bg-white/12 backdrop-blur-md border border-white/20"
          : "bg-black/25 backdrop-blur-md border border-white/10"
        }
        ${float === "slow" ? "animate-float" : "animate-float-delayed"}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
