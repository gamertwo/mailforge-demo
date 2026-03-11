"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { t } from "@/lib/mailforge-theme";
import { SectionLabel } from "./section-label";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    note: "Get started",
    accent: t.accent,
    border: t.borderAccent,
    bg: t.accentDim,
    buttonBg: "transparent",
    buttonText: t.accent,
    buttonBorder: t.borderAccent,
    features: ["10 personalised emails / month", "3 email variants", "6 subject lines", "2 follow-up emails", "3 CTA variations", "Basic history"],
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    note: "Most popular",
    accent: t.blue,
    border: t.blueBorder,
    bg: t.blueBg,
    buttonBg: t.accent,
    buttonText: "#0b0c10",
    buttonBorder: "transparent",
    features: ["Unlimited emails", "Bulk generation up to 50 leads", "Full history", "CSV export", "Custom tone presets", "Priority generation speed"],
  },
  {
    name: "Agency",
    price: "$99",
    period: "per month",
    note: "For teams",
    accent: t.violet,
    border: t.violetBorder,
    bg: t.violetBg,
    buttonBg: "transparent",
    buttonText: t.violet,
    buttonBorder: t.violetBorder,
    features: ["Everything in Pro", "5 team seats", "Unlimited bulk leads", "White-label output", "Zapier and Make integration", "Dedicated onboarding call"],
  },
];

const faqs = [
  {
    q: "What counts as one email?",
    a: "Each generation uses one credit. One generation gives you 3 variants, 6 subject lines, 2 follow-ups, and 3 CTAs.",
  },
  {
    q: "Can I stay on Free forever?",
    a: "Yes. The Free plan renews at 10 credits every month and has no time limit.",
  },
  {
    q: "What does CSV export work with?",
    a: "It works with Lemlist, Apollo, Instantly, Outreach, Salesloft, and any sequencer that accepts CSV lead imports.",
  },
  {
    q: "Can I cancel at any time?",
    a: "Yes. Cancel from your account settings and keep access until the end of your billing period.",
  },
];

export function PricingGrid() {
  return (
    <section className="mf-page">
      <div className="mf-section-tight" style={{ textAlign: "center" }}>
        <SectionLabel>Pricing</SectionLabel>
        <h1 className="mf-page-title" style={{ fontSize: "clamp(28px,4vw,48px)" }}>
          Simple plans. No hidden costs.
        </h1>
        <p className="mf-copy" style={{ maxWidth: 440, margin: "0 auto" }}>
          Start free and upgrade when you need more volume, bulk features, or team seats.
        </p>
      </div>

      <div className="mf-pricing mf-section-tight">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mf-panel"
            style={{ borderColor: plan.border, background: plan.bg }}
          >
            <div className="mf-mono" style={{ fontSize: 9, color: plan.accent, letterSpacing: "0.18em", marginBottom: 10 }}>
              {plan.note}
            </div>
            <h2 style={{ fontSize: 20, margin: "0 0 14px" }}>{plan.name}</h2>
            <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
              <span className="mf-plan-price">{plan.price}</span>
              <span className="mf-mono" style={{ fontSize: 10, color: t.textMute }}>{plan.period}</span>
            </div>
            <Link
              href="/generate"
              className="mf-button-accent"
              style={{
                width: "100%",
                margin: "22px 0",
                background: plan.buttonBg,
                color: plan.buttonText,
                border: `1px solid ${plan.buttonBorder}`,
                justifyContent: "center",
              }}
            >
              Get started
            </Link>
            <div className="mf-stack" style={{ gap: 8 }}>
              {plan.features.map((feature) => (
                <div key={feature} className="mf-row" style={{ gap: 10, alignItems: "flex-start" }}>
                  <div style={{ width: 4, height: 4, borderRadius: "50%", background: plan.accent, marginTop: 7, flexShrink: 0 }} />
                  <span style={{ fontSize: 12, color: t.textSec, lineHeight: 1.5 }}>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mf-table-shell mf-section-tight">
        <div style={{ padding: "16px 24px", borderBottom: `1px solid ${t.border}` }}>
          <SectionLabel>Full comparison</SectionLabel>
        </div>
        <div style={{ overflowX: "auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", minWidth: 560 }}>
            <div className="mf-table-head" style={{ gridColumn: "1 / -1", gridTemplateColumns: "2fr 1fr 1fr 1fr" }}>
              {["Feature", "Free", "Pro", "Agency"].map((item) => (
                <span key={item} className="mf-mono" style={{ fontSize: 8, color: t.textMute, textAlign: item === "Feature" ? "left" : "center" }}>
                  {item}
                </span>
              ))}
            </div>
            {[
              ["Monthly emails", "10", "Unlimited", "Unlimited"],
              ["Bulk generation", "-", "50 leads", "Unlimited"],
              ["CSV export", "-", "Yes", "Yes"],
              ["Team seats", "-", "-", "5"],
              ["White-label output", "-", "-", "Yes"],
            ].map((row) =>
              row.map((cell, cellIndex) => (
                <div key={`${row[0]}-${cell}`} style={{ padding: "13px 16px", borderBottom: `1px solid ${t.borderSubtle}`, textAlign: cellIndex === 0 ? "left" : "center", color: cellIndex === 0 ? t.textSec : cell === "-" ? t.textMute : t.textSec, fontSize: 12 }}>
                  {cell}
                </div>
              )),
            )}
          </div>
        </div>
      </div>

      <section className="mf-section-tight">
        <SectionLabel>FAQ</SectionLabel>
        <h2 className="mf-page-title" style={{ fontSize: "clamp(20px,3vw,32px)" }}>
          Common questions
        </h2>
        <div className="mf-grid-2">
          {faqs.map((faq) => (
            <div key={faq.q} className="mf-card">
              <h3 style={{ margin: "0 0 8px", fontSize: 14 }}>{faq.q}</h3>
              <p className="mf-faq-answer">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
