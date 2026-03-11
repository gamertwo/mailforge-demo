import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mf-label">
      <span className="mf-label-dot" />
      {children}
    </div>
  );
}
