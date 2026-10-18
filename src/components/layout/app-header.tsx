"use client";

import Link from "next/link";

export function AppHeader() {
  return (
    <header className="app-header">
      <div className="app-header__inner">
        <Link href="/" className="app-header__logo">
          PodOasis
        </Link>
      </div>
    </header>
  );
}
