"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<
  ThemeContextType | undefined
>(undefined);

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Prevent localStorage errors during SSR
    if (typeof window === "undefined") {
      return "dark";
    }

    const savedTheme = localStorage.getItem(
      "portfolio-theme"
    );

    return savedTheme === "light" ? "light" : "dark";
  });

  // Synchronize the theme with the HTML document
  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark"
    );
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((currentTheme) => {
      const newTheme =
        currentTheme === "dark" ? "light" : "dark";

      localStorage.setItem(
        "portfolio-theme",
        newTheme
      );

      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used inside ThemeContextProvider"
    );
  }

  return context;
}