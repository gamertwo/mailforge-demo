"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { t } from "@/lib/mailforge-theme";
import { SectionLabel } from "./section-label";

const reasons = ["General question", "Bug report", "Feature request", "Billing", "Enterprise enquiry"];

const channels = [
  { icon: "✉", label: "Email support", desc: "Support tickets answered within 24 hours on weekdays.", value: "support@mailforge.io", accent: t.accent, border: t.borderAccent, bg: t.accentDim },
  { icon: "◫", label: "Feature requests", desc: "Vote on features or suggest new ones on our public board.", value: "mailforge.canny.io", accent: t.violet, border: t.violetBorder, bg: t.violetBg },
  { icon: "#", label: "Community", desc: "Ask questions and share outbound strategies with other users.", value: "Join Slack community", accent: t.blue, border: t.blueBorder, bg: t.blueBg },
];

export function ContactPanel() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("General question");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="mf-page">
      <div className="mf-section-tight">
        <SectionLabel>Contact and support</SectionLabel>
        <h1 className="mf-page-title">We are here to help.</h1>
        <p className="mf-copy" style={{ maxWidth: 460, margin: 0 }}>
          Send us a message and we will respond within one business day. For billing or Agency
          enquiries, include your account email.
        </p>
      </div>

      <div className="mf-grid-3 mf-section-tight">
        {channels.map((channel) => (
          <div key={channel.label} className="mf-panel" style={{ borderColor: channel.border, background: channel.bg }}>
            <div style={{ fontSize: 18, marginBottom: 10, color: channel.accent, opacity: 0.75 }}>{channel.icon}</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "rgba(237,234,227,0.82)", marginBottom: 5 }}>{channel.label}</div>
            <p className="mf-copy" style={{ margin: "0 0 12px" }}>{channel.desc}</p>
            <span className="mf-mono" style={{ fontSize: 10, color: channel.accent, opacity: 0.75 }}>{channel.value}</span>
          </div>
        ))}
      </div>

      <div className="mf-grid-2" style={{ gridTemplateColumns: "1fr 300px", alignItems: "start" }}>
        <div className="mf-panel">
          <SectionLabel>Send a message</SectionLabel>
          <AnimatePresence mode="wait">
            {!sent ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={(event) => {
                  event.preventDefault();
                  setSent(true);
                }}
                className="mf-stack"
                style={{ gap: 16 }}
              >
                <div className="mf-grid-2">
                  <input className="mf-input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                  <input className="mf-input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                </div>
                <div>
                  <div className="mf-mono" style={{ fontSize: 9, color: t.textMute, marginBottom: 8, letterSpacing: "0.16em" }}>
                    REASON
                  </div>
                  <div className="mf-pill-list">
                    {reasons.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setReason(item)}
                        className="mf-button-ghost"
                        style={{
                          padding: "5px 11px",
                          fontSize: 9,
                          color: reason === item ? t.accent : t.textMute,
                          borderColor: reason === item ? t.borderAccent : t.border,
                          background: reason === item ? t.accentDim : "transparent",
                        }}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
                <textarea className="mf-textarea" rows={6} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us what you are running into..." />
                <button
                  type="submit"
                  disabled={!name || !email || !message}
                  className="mf-button-accent"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    opacity: !name || !email || !message ? 0.5 : 1,
                    pointerEvents: !name || !email || !message ? "none" : "auto",
                  }}
                >
                  Send message
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ minHeight: 320, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 14 }}
              >
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: t.accentDim, border: `1px solid ${t.borderAccent}`, display: "flex", alignItems: "center", justifyContent: "center", color: t.accent }}>
                  ✓
                </div>
                <h3 style={{ margin: 0, fontSize: 18 }}>Message sent</h3>
                <p className="mf-copy" style={{ margin: 0, maxWidth: 320 }}>
                  We will reply to <strong style={{ color: t.textSec }}>{email}</strong> within one business day.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setName("");
                    setEmail("");
                    setMessage("");
                  }}
                  className="mf-button-ghost"
                  style={{ fontSize: 10, padding: "8px 18px" }}
                >
                  Send another
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mf-stack">
          <div className="mf-panel">
            <SectionLabel>Response times</SectionLabel>
            {[
              ["Free", "< 48 hrs"],
              ["Pro", "< 24 hrs"],
              ["Agency", "< 4 hrs"],
            ].map(([plan, time], index, array) => (
              <div key={plan} className="mf-row" style={{ justifyContent: "space-between", padding: "11px 0", borderBottom: index < array.length - 1 ? `1px solid ${t.borderSubtle}` : "none" }}>
                <span className="mf-mono" style={{ fontSize: 10, color: t.textMute }}>{plan}</span>
                <span className="mf-mono" style={{ fontSize: 10, color: t.accent }}>{time}</span>
              </div>
            ))}
          </div>
          <div className="mf-panel">
            <SectionLabel>Quick links</SectionLabel>
            <div className="mf-stack" style={{ gap: 8 }}>
              {["Documentation", "Video walkthroughs", "API reference", "Release notes", "Status page"].map((item) => (
                <div key={item} className="mf-card" style={{ padding: "9px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 12, color: t.textSec }}>{item}</span>
                  <span className="mf-mono" style={{ fontSize: 10, color: t.textMute }}>→</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
