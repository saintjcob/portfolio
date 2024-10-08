import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="mx-auto max-w-screen-md px-4 py-4 lg:px-0">
      <Link
        href="/"
        scroll={false}
        className="inline-flex origin-center font-medium transition-transform active:scale-[0.98]"
      >
        Jakub Ziemba
      </Link>
    </nav>
  );
}
