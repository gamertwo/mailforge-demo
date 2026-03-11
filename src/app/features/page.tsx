import Link from "next/link";
import { features, longFormSections } from "@/lib/mailforge-data";
import { t } from "@/lib/mailforge-theme";
import { SectionLabel } from "@/components/mailforge/section-label";

export default function FeaturesPage() {
  return (
    <section className="mf-page">
      <div className="mf-section-tight">
        <SectionLabel>Features</SectionLabel>
        <h1 className="mf-page-title">Built for real outbound workflows.</h1>
        <p className="mf-copy" style={{ maxWidth: 560, margin: 0 }}>
          MailForge is not just a copy generator. It is a small outbound workspace built around
          research quality, usable draft options, and repeatable campaign output.
        </p>
      </div>

      <div className="mf-grid-3 mf-section-tight">
        {features.map((feature) => (
          <div key={feature.title} className="mf-card">
            <div className="mf-mono" style={{ fontSize: 16, color: t.accent, opacity: 0.6, marginBottom: 14 }}>
              {feature.icon}
            </div>
            <h3 style={{ margin: "0 0 8px", fontSize: 15 }}>{feature.title}</h3>
            <p className="mf-copy" style={{ margin: 0, fontSize: 13 }}>{feature.desc}</p>
          </div>
        ))}
      </div>

      <div className="mf-long-grid mf-section-tight">
        {longFormSections.map((item) => (
          <div key={item.title} className="mf-panel">
            <h2 style={{ margin: "0 0 12px", fontSize: 24 }}>{item.title}</h2>
            <p className="mf-copy" style={{ margin: 0 }}>{item.copy}</p>
          </div>
        ))}
      </div>

      <div className="mf-band">
        <div className="mf-grid-2" style={{ alignItems: "center" }}>
          <div>
            <SectionLabel>Next step</SectionLabel>
            <h2 className="mf-page-title" style={{ fontSize: "clamp(20px,3vw,30px)" }}>
              Try the generator with one real lead.
            </h2>
            <p className="mf-copy" style={{ margin: 0, maxWidth: 440 }}>
              The fastest way to understand the product is to paste one company, one offer, and see
              the output shape for yourself.
            </p>
          </div>
          <div className="mf-actions" style={{ justifyContent: "flex-end", flexWrap: "wrap" }}>
            <Link href="/generate" className="mf-button-accent">
              Open generator
            </Link>
            <Link href="/examples" className="mf-button-ghost">
              View examples
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
