import Link from "next/link";
import { tw } from "@/utils/tailwind";

export default function LinkAnimated({
  children,
  href = "",
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      scroll={false}
      target="_blank"
      rel="noopener noreferrer"
      className={tw("group relative", className)}
    >
      {children}
      <span
        className={tw(
          "absolute bottom-0 left-[1px] h-px w-0 bg-foreground-dimmed transition-[width] duration-[400ms] ease-out lg:group-hover:w-full motion-reduce:lg:group-hover/body:w-0",
        )}
      />
    </Link>
  );
}
