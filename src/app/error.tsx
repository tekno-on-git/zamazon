"use client";

import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex h-full w-full flex-col items-center">
      <h1 className="mt-5 font-bold">Uh oh! Something as gone wrong</h1>
      <Link href="/" className="btn btn-primary mt-10 max-w-md">
        Go back home
      </Link>
    </div>
  );
}
