import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <>
      <nav className="w-full py-5 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/">
            <h1 className="text-4xl font-bold">
              Kanzulilm <span className="text-green-800">Blog</span>
            </h1>
          </Link>

          <div className="flex items-center gap-2">
            <Link className={buttonVariants({ variant: "link" })} href="/">
              <span className="text-2xl">Home</span>
            </Link>
            <Link className={buttonVariants({ variant: "link" })} href="/blog">
              <span className="text-2xl">Blog</span>
            </Link>
            <Link className={buttonVariants({ variant: "link" })} href="/about">
              <span className="text-2xl">About</span>
            </Link>
            <Link
              className={buttonVariants({ variant: "link" })}
              href="/create"
            >
              <span className="text-2xl">Create</span>
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link className={buttonVariants()} href="/auth/login">
            Login
          </Link>
          <Link
            className={buttonVariants({ variant: "outline" })}
            href="/auth/signup"
          >
            Sign Up
          </Link>
          <ModeToggle />
        </div>
      </nav>
    </>
  );
}
