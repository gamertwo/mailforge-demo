"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { t } from "@/lib/mailforge-theme";
import { SectionLabel } from "./section-label";

const metrics = [
  { label: "Emails generated", value: "47", delta: "+12 this week", accent: t.accent },
  { label: "Emails remaining", value: "3", delta: "Free plan", accent: t.amber },
  { label: "Avg. first-line score", value: "9.1", delta: "+0.4 vs last wk", accent: t.accent },
  { label: "Campaigns saved", value: "8", delta: "3 active", accent: t.accent },
];

const recent = [
  { lead: "Sarah Chen", company: "FitCore", tone: "Professional", created: "Today, 14:02", status: "sent" },
  { lead: "James Okafor", company: "BuildStack", tone: "Direct", created: "Today, 11:47", status: "draft" },
  { lead: "Priya Menon", company: "LearnLoop", tone: "Friendly", created: "Yesterday", status: "sent" },
  { lead: "Tom Brierley", company: "Arivo Systems", tone: "Story-led", created: "2 days ago", status: "draft" },
  { lead: "Ava Lindstrom", company: "NordFlow", tone: "Casual", created: "3 days ago", status: "sent" },
];

const activity = [
  { time: "14:02", event: "Generated 3 variants", company: "FitCore" },
  { time: "11:47", event: "Generated 3 variants", company: "BuildStack" },
  { time: "Yesterday", event: "Saved campaign", company: "LearnLoop" },
  { time: "2 days ago", event: "Generated follow-ups", company: "Arivo Systems" },
  { time: "3 days ago", event: "Exported to CSV", company: "NordFlow" },
];

const weekly = [38, 55, 42, 70, 64, 85, 47];

export function DashboardOverview() {
  return (
    <section className="mf-page">
      <div className="mf-section-tight" style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "flex-start", flexWrap: "wrap" }}>
        <div>
          <SectionLabel>Dashboard</SectionLabel>
          <h1 className="mf-page-title">Welcome back, Marcus.</h1>
          <p className="mf-copy" style={{ margin: 0 }}>
            You have used 7 of your 10 free emails this month. <Link href="/pricing" style={{ color: t.accent }}>Upgrade to Pro</Link>
          </p>
        </div>
        <Link href="/generate" className="mf-button-accent" style={{ fontSize: 12, padding: "10px 22px" }}>
          + New email
        </Link>
      </div>

      <div className="mf-panel mf-section-tight" style={{ borderColor: "rgba(252,211,77,0.2)", background: t.amberBg }}>
        <div className="mf-row" style={{ justifyContent: "space-between", marginBottom: 10, flexWrap: "wrap" }}>
          <div className="mf-row" style={{ gap: 8 }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: t.amber }} />
            <span className="mf-mono" style={{ fontSize: 10, color: "rgba(252,211,77,0.65)" }}>
              Free plan - 7 of 10 emails used
            </span>
          </div>
          <span className="mf-mono" style={{ fontSize: 9, color: t.textMute }}>Resets in 18 days</span>
        </div>
        <div style={{ height: 3, background: "rgba(255,255,255,0.06)", borderRadius: 2, overflow: "hidden" }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "70%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ height: "100%", background: t.amber, borderRadius: 2 }}
          />
        </div>
      </div>

      <div className="mf-stats mf-section-tight" style={{ gap: 1, border: `1px solid ${t.border}`, borderRadius: 12, overflow: "hidden" }}>
        {metrics.map((metric, index) => (
          <div key={metric.label} className="mf-card" style={{ borderRadius: 0, border: "none", borderRight: index < 3 ? `1px solid ${t.borderSubtle}` : "none" }}>
            <SectionLabel>{metric.label}</SectionLabel>
            <div style={{ fontSize: 32, fontWeight: 700, color: metric.accent, letterSpacing: "-0.03em", margin: "2px 0 4px" }}>
              {metric.value}
            </div>
            <span className="mf-mono" style={{ fontSize: 9, color: t.textMute }}>{metric.delta}</span>
          </div>
        ))}
      </div>

      <div className="mf-grid-2 mf-section-tight" style={{ gridTemplateColumns: "1fr 300px", alignItems: "start" }}>
        <div className="mf-table-shell">
          <div className="mf-row" style={{ justifyContent: "space-between", padding: "18px 20px", borderBottom: `1px solid ${t.border}` }}>
            <SectionLabel>Recent generations</SectionLabel>
            <Link href="/history" className="mf-mono" style={{ fontSize: 9, color: t.textMute }}>View all</Link>
          </div>
          <div className="mf-table-head" style={{ gridTemplateColumns: "1.5fr 1fr 1fr 80px 60px" }}>
            {["Lead", "Company", "Tone", "Created", "Status"].map((item) => (
              <span key={item} className="mf-mono" style={{ fontSize: 8, color: t.textMute }}>{item}</span>
            ))}
          </div>
          {recent.map((row, index) => (
            <motion.div
              key={row.lead}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.06 }}
              className="mf-table-row"
              style={{ gridTemplateColumns: "1.5fr 1fr 1fr 80px 60px" }}
            >
              <span style={{ fontSize: 13, fontWeight: 500, color: "rgba(237,234,227,0.75)" }}>{row.lead}</span>
              <span style={{ fontSize: 12, color: t.textSec }}>{row.company}</span>
              <span className="mf-mono" style={{ fontSize: 9, color: t.textMute }}>{row.tone}</span>
              <span className="mf-mono" style={{ fontSize: 9, color: t.textMute }}>{row.created}</span>
              <div className="mf-row" style={{ gap: 5 }}>
                <div style={{ width: 4, height: 4, borderRadius: "50%", background: row.status === "sent" ? t.green : t.amber }} />
                <span className="mf-mono" style={{ fontSize: 9, color: row.status === "sent" ? t.green : t.amber }}>{row.status}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mf-panel">
          <SectionLabel>Activity</SectionLabel>
          <div className="mf-stack" style={{ gap: 0 }}>
            {activity.map((item, index) => (
              <div key={index} className="mf-row" style={{ gap: 10, padding: "11px 0", borderBottom: index < activity.length - 1 ? `1px solid ${t.borderSubtle}` : "none", alignItems: "flex-start" }}>
                <div style={{ width: 4, height: 4, borderRadius: "50%", background: t.green, marginTop: 5, flexShrink: 0 }} />
                <div>
                  <p style={{ fontSize: 12, color: t.textSec, margin: "0 0 2px" }}>{item.event}</p>
                  <div className="mf-row" style={{ gap: 6 }}>
                    <span className="mf-mono" style={{ fontSize: 9, color: t.accent, opacity: 0.65 }}>{item.company}</span>
                    <span className="mf-mono" style={{ fontSize: 9, color: t.textMute }}>- {item.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mf-panel">
        <div className="mf-row" style={{ justifyContent: "space-between", marginBottom: 20, flexWrap: "wrap" }}>
          <SectionLabel>Emails generated - last 7 days</SectionLabel>
          <span className="mf-mono" style={{ fontSize: 9, color: t.accent }}>Total: 401</span>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 90 }}>
          {weekly.map((value, index) => (
            <div key={index} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${value}%` }}
                transition={{ delay: index * 0.07, duration: 0.45, ease: "easeOut" }}
                style={{ width: "100%", borderRadius: "3px 3px 0 0", background: index === 6 ? t.accent : "rgba(111,207,188,0.18)" }}
              />
              <span className="mf-mono" style={{ fontSize: 8, color: t.textMute }}>
                {["M", "T", "W", "T", "F", "S", "S"][index]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
