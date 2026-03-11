"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/examples", label: "Examples" },
  { href: "/pricing", label: "Pricing" },
  { href: "/generate", label: "Generate" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/history", label: "History" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="mf-header">
      <div className="mf-brand">
        <div className="mf-brand-badge">✉</div>
        <span className="mf-brand-name">MailForge</span>
      </div>
      <nav className="mf-nav">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="mf-nav-link"
            data-active={pathname === item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="mf-meta">
        <span className="mf-chip">Live demo</span>
        <Link href="/generate" className="mf-button-accent">
          Try free
        </Link>
      </div>
    </header>
  );
}
