"use client";

// Themes for the application
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { type ReactNode } from "react";

// Props Interface for better TypeScript support
interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemeProvider
      attribute="class"  // Verwendet CSS-Klassen für Themes
      defaultTheme="light" // Standard-Theme beim Laden der Seite (hell)
      enableSystem={true} // Erkennt System-Prferenz automatisch
      themes={["light", "dark"]} // Verfügbare Themes
    >
        {children}
    </NextThemeProvider>
  );
}
