"use client";

import { createContext, useState, useContext } from "react";

const LayoutContext = createContext();

function ProfileContext({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <LayoutContext.Provider value={{ collapsed, setCollapsed }}>
      {children}
    </LayoutContext.Provider>
  );
}

// Custom hook to consume the context
function useLayout() {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error(
      "useLayout must be used within a ProfileContext provider"
    );
  }
  return context;
}

export { ProfileContext, useLayout };