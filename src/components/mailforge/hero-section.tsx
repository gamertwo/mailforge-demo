"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { exampleEmail, features, longFormSections, socialProof } from "@/lib/mailforge-data";
import { t } from "@/lib/mailforge-theme";
import { SectionLabel } from "./section-label";

export function HeroSection() {
  return (
    <section className="mf-home">
      <div className="mf-section">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel>AI Cold Email Personalizer</SectionLabel>
          <h1 className="mf-hero-title">
            Cold emails that read like <span>you actually did the research.</span>
          </h1>
          <p className="mf-lead">
            Paste a lead&apos;s name, company, and website. MailForge writes a personalised first line,
            three full emails, follow-ups, and subject lines, ready to send in under 30 seconds.
          </p>
          <div className="mf-actions" style={{ marginBottom: 64, flexWrap: "wrap" }}>
            <Link href="/generate" className="mf-button-accent" style={{ padding: "12px 28px", fontSize: 13 }}>
              Generate your first email
            </Link>
            <Link href="/examples" className="mf-button-ghost" style={{ padding: "12px 22px", fontSize: 13 }}>
              See example output
            </Link>
          </div>
          <div className="mf-kpi-strip">
            {["Free - 10 emails/month", "No credit card needed", "Works with any sequencer"].map((item) => (
              <div key={item} className="mf-kpi-item">
                <span className="mf-kpi-dot" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.section
        className="mf-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionLabel>Example output</SectionLabel>
        <div className="mf-table-shell" style={{ borderColor: t.borderAccent }}>
          <div
            style={{
              padding: "14px 24px",
              borderBottom: `1px solid ${t.border}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "rgba(255,255,255,0.018)",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <div className="mf-row" style={{ gap: 6 }}>
              {["#ef4444", "#f59e0b", "#22c55e"].map((color) => (
                <div
                  key={color}
                  style={{ width: 9, height: 9, borderRadius: "50%", background: color, opacity: 0.55 }}
                />
              ))}
            </div>
            <div className="mf-mono" style={{ fontSize: 9, color: t.textMute, letterSpacing: "0.12em" }}>
              Generated - FitCore - Sarah
            </div>
            <div
              className="mf-mono"
              style={{
                fontSize: 9,
                padding: "2px 9px",
                borderRadius: 4,
                border: `1px solid rgba(111,207,188,0.2)`,
                color: t.accent,
                opacity: 0.7,
              }}
            >
              Version 1 of 3
            </div>
          </div>
          <div className="mf-grid-2" style={{ gap: 0 }}>
            <div style={{ padding: "22px 20px", borderRight: `1px solid ${t.borderSubtle}`, background: "rgba(255,255,255,0.012)" }}>
              <div className="mf-mini-stack" style={{ marginBottom: 18 }}>
                <div className="mf-mono" style={{ fontSize: 8, color: t.textMute, letterSpacing: "0.16em" }}>
                  SUBJECT
                </div>
                <div style={{ fontSize: 12, color: t.textSec, lineHeight: 1.5 }}>{exampleEmail.subject}</div>
              </div>
              <div className="mf-mini-stack" style={{ marginBottom: 18 }}>
                <div className="mf-mono" style={{ fontSize: 8, color: t.textMute, letterSpacing: "0.16em" }}>
                  TO
                </div>
                <div style={{ fontSize: 12, color: t.textSec }}>Sarah @ FitCore</div>
              </div>
              <div
                className="mf-card"
                style={{ marginTop: 24, padding: "10px 12px", borderColor: t.accentDim, background: t.accentDim }}
              >
                <div className="mf-mono" style={{ fontSize: 8, color: t.accent, letterSpacing: "0.14em", marginBottom: 4 }}>
                  FIRST LINE
                </div>
                <p style={{ fontSize: 11, color: t.textSec, margin: 0, lineHeight: 1.6, fontStyle: "italic" }}>
                  {exampleEmail.firstLine}
                </p>
              </div>
            </div>
            <div style={{ padding: "22px 24px" }}>
              <pre
                style={{
                  fontFamily: t.sans,
                  fontSize: 13,
                  color: t.textSec,
                  lineHeight: 1.82,
                  margin: 0,
                  whiteSpace: "pre-wrap",
                  fontWeight: 300,
                }}
              >
                {exampleEmail.body}
              </pre>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="mf-section">
        <SectionLabel>What you get</SectionLabel>
        <h2 className="mf-page-title" style={{ fontSize: "clamp(22px, 3vw, 36px)", marginBottom: 32 }}>
          Everything to run a cold outreach campaign.
        </h2>
        <div className="mf-grid-3" style={{ gap: 1, border: `1px solid ${t.border}`, borderRadius: 14, overflow: "hidden" }}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="mf-card"
              style={{
                borderRadius: 0,
                border: "none",
                borderRight: index % 3 < 2 ? `1px solid ${t.borderSubtle}` : "none",
                borderBottom: index < 3 ? `1px solid ${t.borderSubtle}` : "none",
              }}
            >
              <div className="mf-mono" style={{ fontSize: 16, color: t.accent, opacity: 0.6, marginBottom: 14 }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: 14, margin: "0 0 8px" }}>{feature.title}</h3>
              <p style={{ fontSize: 12, color: t.textMute, lineHeight: 1.72, margin: 0 }}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mf-section">
        <SectionLabel>Why teams use it</SectionLabel>
        <div className="mf-long-grid">
          {longFormSections.map((item) => (
            <div key={item.title} className="mf-panel">
              <h3 style={{ margin: "0 0 12px", fontSize: 18 }}>{item.title}</h3>
              <p className="mf-copy" style={{ margin: 0, fontSize: 14 }}>
                {item.copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mf-section">
        <SectionLabel>From users</SectionLabel>
        <div className="mf-grid-3">
          {socialProof.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="mf-card"
            >
              <div className="mf-mono" style={{ fontSize: 28, color: "rgba(111,207,188,0.25)", lineHeight: 1, marginBottom: 16 }}>
                ❝
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.78, margin: "0 0 16px", minHeight: 120 }}>{item.quote}</p>
              <div style={{ borderTop: `1px solid ${t.borderSubtle}`, paddingTop: 14 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "rgba(237,234,227,0.8)", marginBottom: 2 }}>{item.name}</div>
                <div className="mf-mono" style={{ fontSize: 9, color: t.accent, opacity: 0.55, letterSpacing: "0.08em" }}>
                  {item.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mf-band mf-section-tight">
        <div className="mf-grid-2" style={{ alignItems: "center" }}>
          <div>
            <div className="mf-mono" style={{ fontSize: 9, color: t.accent, letterSpacing: "0.2em", marginBottom: 10 }}>
              READY TO START?
            </div>
            <h2 className="mf-page-title" style={{ fontSize: "clamp(20px,3vw,32px)" }}>
              Write smarter cold emails today.
            </h2>
            <p className="mf-copy" style={{ margin: "8px 0 0", maxWidth: 420 }}>
              Free plan includes 10 personalised emails per month. No card needed to start.
            </p>
          </div>
          <div className="mf-actions" style={{ justifyContent: "flex-end", flexWrap: "wrap" }}>
            <Link href="/generate" className="mf-button-accent" style={{ padding: "12px 28px", fontSize: 13 }}>
              Start for free
            </Link>
            <Link href="/pricing" className="mf-button-ghost" style={{ padding: "12px 20px", fontSize: 13 }}>
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}
