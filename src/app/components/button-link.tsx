export function ButtonLink({
  children,
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "outline";
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center px-8 py-[14px] text-[16px] font-medium leading-5 transition-colors ${
        variant === "primary"
          ? "bg-[#94173d] text-white hover:bg-[#7f1233]"
          : "border border-white text-white hover:bg-white/10"
      }`}
    >
      {children}
    </a>
  );
}
