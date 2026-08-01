import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex min-h-svh flex-col justify-center px-5 md:px-8">
        <h1 className="display text-[clamp(6rem,28vw,24rem)]">404</h1>
        <p className="microcaps mt-6 text-ink/70">This page shipped nowhere.</p>
        <Link href="/" className="microcaps mt-8 inline-block underline underline-offset-4 hover:text-ink/70">
          ← Back home
        </Link>
      </main>
    </>
  );
}
