
"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <Link
          href="/"
          className="brand"
          onClick={() => setOpen(false)}
          aria-label="Rathore Digital home"
        >
          <span className="brand-symbol">
            R<span>D</span>
          </span>
          <span className="brand-name">
            RATHORE<span>DIGITAL</span>
          </span>
        </Link>

        <div className="desktop-nav">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <Link href="/contact" className="nav-cta">
          Let&apos;s talk <ArrowUpRight size={16} />
        </Link>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`mobile-nav ${open ? "is-open" : ""}`}
        hidden={!open}
      >
        {links.map((link, index) => (
          <Link
            href={link.href}
            key={link.href}
            onClick={() => setOpen(false)}
          >
            <span>0{index + 1}</span>
            {link.label}
            <ArrowUpRight size={16} />
          </Link>
        ))}

        <Link
          href="/contact"
          className="mobile-nav-cta"
          onClick={() => setOpen(false)}
        >
          Start a project <ArrowUpRight size={16} />
        </Link>
      </div>
    </header>
  );
}
