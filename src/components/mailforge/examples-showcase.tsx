import { exampleEmail, exampleLibrary } from "@/lib/mailforge-data";
import { t } from "@/lib/mailforge-theme";
import { SectionLabel } from "./section-label";

export function ExamplesShowcase() {
  return (
    <section className="mf-page">
      <div className="mf-section-tight">
        <SectionLabel>Examples</SectionLabel>
        <h1 className="mf-page-title">Output that feels campaign-ready.</h1>
        <p className="mf-copy" style={{ margin: 0, maxWidth: 520 }}>
          MailForge is designed for real outbound work, not novelty one-liners. These sample blocks
          show the level of structure, context, and control built into each generation.
        </p>
      </div>

      <div className="mf-table-shell mf-section-tight" style={{ borderColor: t.borderAccent }}>
        <div style={{ padding: "14px 24px", borderBottom: `1px solid ${t.border}`, display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <span className="mf-mono" style={{ fontSize: 9, color: t.textMute }}>FITCORE / SARAH</span>
          <span className="mf-chip">Example output</span>
        </div>
        <div className="mf-grid-2" style={{ gap: 0 }}>
          <div style={{ padding: "22px 20px", borderRight: `1px solid ${t.borderSubtle}` }}>
            <div className="mf-mini-stack" style={{ marginBottom: 20 }}>
              <div className="mf-mono" style={{ fontSize: 8, color: t.textMute }}>SUBJECT</div>
              <div style={{ color: t.textSec, fontSize: 13 }}>{exampleEmail.subject}</div>
            </div>
            <div className="mf-panel" style={{ padding: "14px 14px", borderColor: t.borderAccent, background: t.accentDim }}>
              <div className="mf-mono" style={{ fontSize: 8, color: t.accent, marginBottom: 5 }}>PERSONALISED FIRST LINE</div>
              <p className="mf-copy" style={{ margin: 0, fontStyle: "italic" }}>{exampleEmail.firstLine}</p>
            </div>
          </div>
          <div style={{ padding: "22px 24px" }}>
            <pre style={{ margin: 0, whiteSpace: "pre-wrap", fontFamily: t.sans, lineHeight: 1.85, fontSize: 13, color: t.textSec }}>
              {exampleEmail.body}
            </pre>
          </div>
        </div>
      </div>

      <div className="mf-grid-3">
        {exampleLibrary.map((item) => (
          <div key={item.niche} className="mf-card">
            <div className="mf-mono" style={{ fontSize: 9, color: t.accent, marginBottom: 10 }}>{item.niche}</div>
            <h3 style={{ fontSize: 16, margin: "0 0 8px" }}>{item.target}</h3>
            <p className="mf-copy" style={{ margin: 0 }}>{item.result}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
