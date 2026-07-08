import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";

interface ActiveSectionContextValue {
  activeSection: string;
  setActiveSection: (id: string) => void;
}

const ActiveSectionContext = createContext<ActiveSectionContextValue | null>(
  null
);

export function ActiveSectionProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState("home");
  const value = useMemo(
    () => ({ activeSection, setActiveSection }),
    [activeSection]
  );

  return (
    <ActiveSectionContext.Provider value={value}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  const ctx = useContext(ActiveSectionContext);
  if (!ctx) {
    throw new Error(
      "useActiveSection must be used within an ActiveSectionProvider"
    );
  }
  return ctx;
}
