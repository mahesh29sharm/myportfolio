"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Navigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <header className="site-nav">
      <Link href="#top" className="wordmark" aria-label="Personal Creative Archive, home">
        <span>PCA</span>
        <small>Since 2016</small>
      </Link>
      <button
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="primary-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <nav id="primary-navigation" className={open ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
        <Link href="#archive" onClick={() => setOpen(false)}>Archive</Link>
        <Link href="#index" onClick={() => setOpen(false)}>Index</Link>
        <Link href="#about" onClick={() => setOpen(false)}>About</Link>
        <Link href="#contact" onClick={() => setOpen(false)}>Contact</Link>
      </nav>
    </header>
  );
}
