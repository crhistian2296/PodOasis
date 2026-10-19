"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function AppHeader() {
  return (
    <header className="app-header">
      <div className="app-header__inner">
        <Link href="/" className="app-header__logo">
          PodOasis
        </Link>
        <div className="app-header__actions">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
