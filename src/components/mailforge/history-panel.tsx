"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { t } from "@/lib/mailforge-theme";
import { SectionLabel } from "./section-label";

const history = [
  { id: "h1", lead: "Sarah Chen", company: "FitCore", tone: "Professional", date: "Today, 14:02", status: "sent", subject: "Quick idea for FitCore", firstLine: "Loved how FitCore makes online coaching feel personal and accessible.", tags: ["Fitness", "SaaS", "Landing pages"] },
  { id: "h2", lead: "James Okafor", company: "BuildStack", tone: "Direct", date: "Today, 11:47", status: "draft", subject: "Your dev tooling pipeline - quick thought", firstLine: "BuildStack's approach to CI/CD for smaller teams is genuinely underrated in the market.", tags: ["Dev tools", "Outreach"] },
  { id: "h3", lead: "Priya Menon", company: "LearnLoop", tone: "Friendly", date: "Yesterday", status: "sent", subject: "An idea for LearnLoop onboarding", firstLine: "The way LearnLoop sequences its onboarding is one of the clearest I have seen in edtech.", tags: ["EdTech", "Onboarding"] },
  { id: "h4", lead: "Tom Brierley", company: "Arivo Systems", tone: "Story-led", date: "2 days ago", status: "draft", subject: "Arivo's enterprise pitch - a quick angle", firstLine: "Arivo is solving a problem that most enterprise tooling vendors have given up trying to fix cleanly.", tags: ["Enterprise", "B2B"] },
  { id: "h5", lead: "Ava Lindstrom", company: "NordFlow", tone: "Casual", date: "3 days ago", status: "sent", subject: "NordFlow + one design idea", firstLine: "NordFlow's minimalism applied to fintech dashboards is exactly the kind of niche positioning that makes outreach easy.", tags: ["Fintech", "Design"] },
];

type StatusFilter = "all" | "sent" | "draft";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      onClick={(event) => {
        event.stopPropagation();
        navigator.clipboard.writeText(text);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1600);
      }}
      className="mf-button-ghost"
      style={{
        padding: "3px 10px",
        fontSize: 9,
        color: copied ? t.accent : t.textMute,
        borderColor: copied ? t.borderAccent : t.border,
        background: copied ? t.accentDim : "transparent",
      }}
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

export function HistoryPanel() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<StatusFilter>("all");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = history.filter((item) => {
    const matchesSearch =
      item.lead.toLowerCase().includes(search.toLowerCase()) ||
      item.company.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || item.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <section className="mf-page">
      <div className="mf-section-tight" style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "flex-start", flexWrap: "wrap" }}>
        <div>
          <SectionLabel>Email history</SectionLabel>
          <h1 className="mf-page-title">Saved campaigns</h1>
          <p className="mf-copy" style={{ margin: 0 }}>
            All generated sets in one place. Click any row to expand.
          </p>
        </div>
        <button className="mf-button-ghost" style={{ fontSize: 9, padding: "8px 16px" }}>
          Export CSV
        </button>
      </div>

      <div className="mf-row mf-section-tight" style={{ gap: 10, alignItems: "center", flexWrap: "wrap" }}>
        <input
          className="mf-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by lead or company..."
          style={{ flex: 1, minWidth: 260 }}
        />
        <div className="mf-row" style={{ gap: 6 }}>
          {(["all", "sent", "draft"] as StatusFilter[]).map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className="mf-button-ghost"
              style={{
                padding: "7px 14px",
                fontSize: 9,
                color: filter === item ? t.accent : t.textMute,
                borderColor: filter === item ? t.borderAccent : t.border,
                background: filter === item ? t.accentDim : "transparent",
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mf-mono" style={{ fontSize: 9, color: t.textMute, marginBottom: 12 }}>
        {filtered.length} result{filtered.length !== 1 ? "s" : ""}
      </div>

      <div className="mf-stack" style={{ gap: 6 }}>
        <AnimatePresence>
          {filtered.map((item, index) => {
            const open = expanded === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ delay: index * 0.04 }}
                className="mf-table-shell"
                style={{ borderColor: open ? t.borderAccent : t.border, background: open ? "rgba(111,207,188,0.03)" : t.surface }}
              >
                <div
                  onClick={() => setExpanded(open ? null : item.id)}
                  className="mf-table-row"
                  style={{ gridTemplateColumns: "1.6fr 1fr 1fr 100px 80px 28px", cursor: "pointer" }}
                >
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "rgba(237,234,227,0.82)", marginBottom: 3 }}>{item.lead}</div>
                    <div className="mf-mono" style={{ fontSize: 9, color: t.accent, opacity: 0.6 }}>{item.company}</div>
                  </div>
                  <div style={{ fontSize: 12, color: t.textMute }}>{item.subject}</div>
                  <div className="mf-mono" style={{ fontSize: 9, color: t.textMute }}>{item.tone}</div>
                  <div className="mf-mono" style={{ fontSize: 9, color: t.textMute }}>{item.date}</div>
                  <div className="mf-row" style={{ gap: 5 }}>
                    <div style={{ width: 4, height: 4, borderRadius: "50%", background: item.status === "sent" ? t.green : t.amber }} />
                    <span className="mf-mono" style={{ fontSize: 9, color: item.status === "sent" ? t.green : t.amber }}>{item.status}</span>
                  </div>
                  <span className="mf-mono" style={{ fontSize: 10, color: t.textMute, textAlign: "center", transform: open ? "rotate(180deg)" : "none" }}>▾</span>
                </div>
                <AnimatePresence>
                  {open ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="mf-grid-2" style={{ gap: 0, borderTop: `1px solid ${t.borderSubtle}` }}>
                        <div style={{ padding: "18px 20px", borderRight: `1px solid ${t.borderSubtle}` }}>
                          <div className="mf-mono" style={{ fontSize: 8, color: t.accent, letterSpacing: "0.16em", marginBottom: 8 }}>
                            FIRST LINE
                          </div>
                          <p className="mf-copy" style={{ margin: 0, fontStyle: "italic" }}>
                            &quot;{item.firstLine}&quot;
                          </p>
                          <div style={{ marginTop: 12 }}>
                            <CopyButton text={item.firstLine} />
                          </div>
                        </div>
                        <div style={{ padding: "18px 20px" }}>
                          <div className="mf-mono" style={{ fontSize: 8, color: t.textMute, letterSpacing: "0.14em", marginBottom: 8 }}>
                            TAGS
                          </div>
                          <div className="mf-pill-list" style={{ marginBottom: 16 }}>
                            {item.tags.map((tag) => (
                              <span key={tag} className="mf-pill" style={{ fontSize: 10 }}>{tag}</span>
                            ))}
                          </div>
                          <div className="mf-row" style={{ gap: 8, flexWrap: "wrap" }}>
                            <button className="mf-button-accent" style={{ fontSize: 10, padding: "8px 14px" }}>
                              Open full set
                            </button>
                            <button className="mf-button-ghost" style={{ fontSize: 10, padding: "8px 14px" }}>
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
