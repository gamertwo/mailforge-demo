"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { t } from "@/lib/mailforge-theme";
import { SectionLabel } from "./section-label";

const tones = ["Professional", "Friendly", "Direct", "Casual", "Story-led"];

type Tab = "emails" | "subjects" | "followups" | "ctas";

const tabs: { id: Tab; label: string; count: string }[] = [
  { id: "emails", label: "Email variants", count: "3" },
  { id: "subjects", label: "Subject lines", count: "6" },
  { id: "followups", label: "Follow-ups", count: "2" },
  { id: "ctas", label: "CTA variations", count: "3" },
];

interface GeneratedData {
  firstLine: string;
  emails: { tone: string; body: string }[];
  subjects: string[];
  followups: { day: number; body: string }[];
  ctas: { style: string; text: string }[];
}

const demoOutput: GeneratedData = {
  firstLine:
    "Loved how FitCore makes online coaching feel personal and accessible — it is the kind of brand that usually has a homepage that undersells it.",
  emails: [
    {
      tone: "Professional and friendly",
      body: `Hi Sarah,

Loved how FitCore makes online coaching feel personal and accessible — it is the kind of brand that usually has a homepage that undersells it.

I help fitness coaches convert more of their traffic into trial sign-ups by redesigning landing pages around one clear action.

For FitCore specifically, I would focus on surfacing your transformation results above the fold and tightening the sign-up flow — both changes that typically lift conversions 20 to 35%.

Would a 20-minute call this week make sense to walk through what that could look like for you?

Best,
[Your name]`,
    },
    {
      tone: "Direct and confident",
      body: `Hi Sarah,

FitCore has a strong coaching offer. The website does not show that strength quickly enough.

I redesign landing pages for fitness businesses so more of their traffic turns into trial sign-ups instead of silent drop-off.

For FitCore, three changes stand out right away: a sharper headline, better proof placement, and one cleaner CTA. Those shifts usually add 25 to 40% more sign-ups in the first month.

Open to a quick call this week?

[Your name]`,
    },
    {
      tone: "Story-led and warm",
      body: `Hi Sarah,

I was researching online coaching brands recently and FitCore stood out because the product feels more personal than most names in the category.

That is exactly why I noticed a small gap. The experience on the site does not fully communicate the trust and clarity the coaching itself seems to create.

I help brands fix that specific gap with conversion-focused landing page work. Usually the result is more qualified trial sign-ups without changing the core offer.

Happy to share a few specific ideas for FitCore if that would be useful.

Warmly,
[Your name]`,
    },
  ],
  subjects: [
    "Quick idea for FitCore",
    "FitCore's landing page is underselling the brand",
    "One tweak that could boost FitCore sign-ups",
    "Sarah - had an idea after visiting FitCore",
    "FitCore's homepage vs what it could be",
    "A conversion idea for FitCore",
  ],
  followups: [
    {
      day: 3,
      body: `Hi Sarah,

Just circling back on my note from earlier this week.

I put together a rough idea for how the FitCore hero section could frame outcomes more clearly for new visitors. Nothing polished, just enough to show the thinking.

Happy to walk you through it on a quick call if useful.

[Your name]`,
    },
    {
      day: 7,
      body: `Hi Sarah,

Last nudge from me and then I will leave it here.

If now is not the right time for a landing page refresh, no problem at all. If it is, I would be happy to do a no-pressure 20-minute walkthrough of the changes I would test first for FitCore.

Either way, best of luck with the next growth push.

[Your name]`,
    },
  ],
  ctas: [
    { style: "Soft ask", text: "Would a 20-minute call make sense this week?" },
    { style: "Direct ask", text: "Open to a quick call Thursday or Friday?" },
    { style: "Meeting link", text: "Here is my calendar if that is easier: [link]. No pressure either way." },
  ],
};

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1600);
      }}
      className="mf-button-ghost"
      style={{
        padding: "4px 11px",
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

export function EmailGenerator() {
  const [lead, setLead] = useState("");
  const [company, setCompany] = useState("");
  const [about, setAbout] = useState("");
  const [offer, setOffer] = useState("");
  const [tone, setTone] = useState("Professional");
  const [generating, setGenerating] = useState(false);
  const [output, setOutput] = useState<GeneratedData | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>("emails");
  const [activeEmail, setActiveEmail] = useState(0);

  const handleGenerate = () => {
    if (!lead || !company) return;
    setGenerating(true);
    setOutput(null);
    window.setTimeout(() => {
      setGenerating(false);
      setOutput(demoOutput);
      setActiveTab("emails");
      setActiveEmail(0);
    }, 1800);
  };

  const handleDemo = () => {
    setLead("Sarah");
    setCompany("FitCore");
    setAbout(
      "Online fitness coaching platform helping people build sustainable habits through personalised plans and community support.",
    );
    setOffer("Web design for conversion-focused landing pages");
    setTone("Professional");
  };

  return (
    <section className="mf-page">
      <div className="mf-section-tight">
        <SectionLabel>Email generator</SectionLabel>
        <h1 className="mf-page-title">Personalise your cold email</h1>
        <p className="mf-copy" style={{ maxWidth: 500, margin: "0 0 16px" }}>
          Fill in the lead details below. MailForge generates 3 full email variants, 6 subject
          lines, 2 follow-ups, and 3 CTA options in one pass.
        </p>
        <button onClick={handleDemo} className="mf-button-ghost" style={{ fontSize: 9, padding: "6px 13px" }}>
          Load example data
        </button>
      </div>

      <div className="mf-grid-2" style={{ gridTemplateColumns: "360px 1fr", alignItems: "start" }}>
        <div className="mf-panel" style={{ position: "sticky", top: 84 }}>
          <SectionLabel>Lead details</SectionLabel>
          <div className="mf-stack">
            <div>
              <div className="mf-mono" style={{ fontSize: 9, color: t.textMute, marginBottom: 7, letterSpacing: "0.16em" }}>
                LEAD FIRST NAME
              </div>
              <input className="mf-input" value={lead} onChange={(e) => setLead(e.target.value)} placeholder="Sarah" />
            </div>
            <div>
              <div className="mf-mono" style={{ fontSize: 9, color: t.textMute, marginBottom: 7, letterSpacing: "0.16em" }}>
                COMPANY NAME
              </div>
              <input className="mf-input" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="FitCore" />
            </div>
            <div>
              <div className="mf-mono" style={{ fontSize: 9, color: t.textMute, marginBottom: 7, letterSpacing: "0.16em" }}>
                WEBSITE / ABOUT TEXT
              </div>
              <textarea
                className="mf-textarea"
                rows={4}
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                placeholder="Paste a sentence or two about what they do..."
              />
            </div>
            <div>
              <div className="mf-mono" style={{ fontSize: 9, color: t.textMute, marginBottom: 7, letterSpacing: "0.16em" }}>
                YOUR OFFER
              </div>
              <textarea
                className="mf-textarea"
                rows={3}
                value={offer}
                onChange={(e) => setOffer(e.target.value)}
                placeholder="e.g. Web design for conversion-focused landing pages"
              />
            </div>
            <div>
              <div className="mf-mono" style={{ fontSize: 9, color: t.textMute, marginBottom: 8, letterSpacing: "0.16em" }}>
                TONE
              </div>
              <div className="mf-pill-list">
                {tones.map((item) => (
                  <button
                    key={item}
                    onClick={() => setTone(item)}
                    className="mf-button-ghost"
                    style={{
                      padding: "5px 11px",
                      fontSize: 9,
                      color: tone === item ? t.accent : t.textMute,
                      borderColor: tone === item ? t.borderAccent : t.border,
                      background: tone === item ? t.accentDim : "transparent",
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={handleGenerate}
              disabled={!lead || !company || generating}
              className="mf-button-accent"
              style={{
                width: "100%",
                padding: "11px",
                justifyContent: "center",
                opacity: !lead || !company || generating ? 0.5 : 1,
                pointerEvents: !lead || !company || generating ? "none" : "auto",
              }}
            >
              {generating ? "Generating..." : "Generate emails"}
            </button>
          </div>
        </div>

        <div>
          <AnimatePresence mode="wait">
            {generating ? (
              <motion.div
                key="generating"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mf-panel"
                style={{ minHeight: 360, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 18 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1.1, ease: "linear" }}
                  style={{ width: 32, height: 32, borderRadius: "50%", border: `2px solid ${t.borderAccent}`, borderTopColor: t.accent }}
                />
                <div style={{ textAlign: "center" }}>
                  <p className="mf-mono" style={{ fontSize: 11, color: t.accent, margin: "0 0 6px", letterSpacing: "0.1em" }}>
                    Writing personalised email...
                  </p>
                  <p className="mf-copy" style={{ margin: 0 }}>
                    Analysing {company || "the company"} and crafting your variants
                  </p>
                </div>
              </motion.div>
            ) : null}

            {!generating && !output ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mf-panel"
                style={{ minHeight: 360, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}
              >
                <div className="mf-mono" style={{ fontSize: 28, color: t.textMute, opacity: 0.3, marginBottom: 12 }}>
                  ✉
                </div>
                <p style={{ fontSize: 14, color: t.textMute, margin: "0 0 6px" }}>
                  Fill in the lead details and hit &quot;Generate emails&quot;
                </p>
                <p className="mf-copy" style={{ margin: 0, maxWidth: 280 }}>
                  Or load the example data to see a full output right away.
                </p>
              </motion.div>
            ) : null}

            {!generating && output ? (
              <motion.div
                key="output"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="mf-stack"
              >
                <div
                  className="mf-panel"
                  style={{
                    padding: "16px 20px",
                    borderColor: t.borderAccent,
                    background: t.accentDim,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 14,
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div className="mf-mono" style={{ fontSize: 8, color: t.accent, letterSpacing: "0.16em", marginBottom: 6 }}>
                      FIRST LINE
                    </div>
                    <p style={{ fontSize: 13, color: t.textSec, margin: 0, lineHeight: 1.72, fontStyle: "italic" }}>{output.firstLine}</p>
                  </div>
                  <CopyButton text={output.firstLine} />
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>

          {!generating && output ? (
            <div className="mf-table-shell" style={{ marginTop: 12 }}>
              <div style={{ display: "flex", borderBottom: `1px solid ${t.border}`, background: "rgba(255,255,255,0.018)" }}>
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      flex: 1,
                      padding: "12px 0",
                      border: "none",
                      background: "transparent",
                      borderBottom: activeTab === tab.id ? `2px solid ${t.accent}` : "2px solid transparent",
                      cursor: "pointer",
                    }}
                  >
                    <span className="mf-mono" style={{ fontSize: 9, color: activeTab === tab.id ? t.accent : t.textMute }}>
                      {tab.label}
                    </span>
                    <span
                      className="mf-mono"
                      style={{
                        fontSize: 8,
                        marginLeft: 6,
                        padding: "1px 6px",
                        borderRadius: 3,
                        border: `1px solid ${activeTab === tab.id ? t.borderAccent : "transparent"}`,
                        background: activeTab === tab.id ? t.accentDim : "transparent",
                        color: activeTab === tab.id ? t.accent : t.textMute,
                      }}
                    >
                      {tab.count}
                    </span>
                  </button>
                ))}
              </div>

              <div style={{ padding: 22 }}>
                <AnimatePresence mode="wait">
                  {activeTab === "emails" ? (
                    <motion.div key="emails" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                      <div className="mf-row" style={{ marginBottom: 16, flexWrap: "wrap" }}>
                        {output.emails.map((item, index) => (
                          <button
                            key={item.tone}
                            onClick={() => setActiveEmail(index)}
                            className="mf-button-ghost"
                            style={{
                              padding: "5px 12px",
                              fontSize: 9,
                              color: activeEmail === index ? t.accent : t.textMute,
                              borderColor: activeEmail === index ? t.borderAccent : t.border,
                              background: activeEmail === index ? t.accentDim : "transparent",
                            }}
                          >
                            V{index + 1}
                          </button>
                        ))}
                        <span className="mf-mono" style={{ fontSize: 9, color: t.textMute, paddingTop: 6 }}>
                          {output.emails[activeEmail].tone}
                        </span>
                        <div style={{ marginLeft: "auto" }}>
                          <CopyButton text={output.emails[activeEmail].body} />
                        </div>
                      </div>
                      <pre
                        style={{
                          margin: 0,
                          padding: "18px 20px",
                          borderRadius: 8,
                          border: `1px solid ${t.borderSubtle}`,
                          background: "rgba(255,255,255,0.015)",
                          maxHeight: 420,
                          overflowY: "auto",
                          whiteSpace: "pre-wrap",
                          fontFamily: t.sans,
                          fontSize: 13,
                          lineHeight: 1.85,
                          color: t.textSec,
                        }}
                      >
                        {output.emails[activeEmail].body}
                      </pre>
                    </motion.div>
                  ) : null}

                  {activeTab === "subjects" ? (
                    <motion.div key="subjects" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                      <div className="mf-stack">
                        {output.subjects.map((subject, index) => (
                          <div key={subject} className="mf-card" style={{ padding: "13px 16px", display: "flex", alignItems: "center", gap: 14 }}>
                            <span className="mf-mono" style={{ fontSize: 9, color: t.accent, opacity: 0.5, minWidth: 16 }}>
                              {index + 1}
                            </span>
                            <span style={{ fontSize: 13, color: t.textSec, flex: 1 }}>{subject}</span>
                            <CopyButton text={subject} />
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ) : null}

                  {activeTab === "followups" ? (
                    <motion.div key="followups" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mf-stack">
                      {output.followups.map((followup) => (
                        <div key={followup.day} className="mf-table-shell">
                          <div
                            style={{
                              padding: "10px 18px",
                              background: "rgba(255,255,255,0.018)",
                              borderBottom: `1px solid ${t.borderSubtle}`,
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <div className="mf-chip" style={{ padding: "2px 9px", color: t.textMute, borderColor: t.border, background: "transparent" }}>
                              Day {followup.day}
                            </div>
                            <CopyButton text={followup.body} />
                          </div>
                          <pre
                            style={{
                              margin: 0,
                              padding: "16px 18px",
                              whiteSpace: "pre-wrap",
                              fontFamily: t.sans,
                              fontSize: 13,
                              lineHeight: 1.82,
                              color: t.textSec,
                            }}
                          >
                            {followup.body}
                          </pre>
                        </div>
                      ))}
                    </motion.div>
                  ) : null}

                  {activeTab === "ctas" ? (
                    <motion.div key="ctas" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mf-stack">
                      {output.ctas.map((cta, index) => {
                        const colors = [
                          { border: t.borderAccent, bg: t.accentDim, label: t.accent },
                          { border: t.violetBorder, bg: t.violetBg, label: t.violet },
                          { border: "rgba(252,211,77,0.22)", bg: "rgba(252,211,77,0.06)", label: t.amber },
                        ][index];
                        return (
                          <div
                            key={cta.style}
                            className="mf-card"
                            style={{ borderColor: colors.border, background: colors.bg, display: "flex", alignItems: "flex-start", gap: 14 }}
                          >
                            <div className="mf-mono" style={{ fontSize: 8, color: colors.label, letterSpacing: "0.14em", minWidth: 80 }}>
                              {cta.style}
                            </div>
                            <p style={{ margin: 0, flex: 1, fontSize: 13, color: t.textSec, lineHeight: 1.6, fontStyle: "italic" }}>
                              &quot;{cta.text}&quot;
                            </p>
                            <CopyButton text={cta.text} />
                          </div>
                        );
                      })}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
