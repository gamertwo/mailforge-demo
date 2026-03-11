import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mf-footer">
      <div>
        <p>MailForge</p>
        <span>AI cold email personalizer demo for outbound teams, agencies, and freelancers.</span>
      </div>
      <div className="mf-route-links">
        <Link href="/features" className="mf-footer-note">
          Features
        </Link>
        <Link href="/pricing" className="mf-footer-note">
          Pricing
        </Link>
        <Link href="/generate" className="mf-footer-note">
          Generate
        </Link>
        <Link href="/contact" className="mf-footer-note">
          Contact
        </Link>
      </div>
    </footer>
  );
}
