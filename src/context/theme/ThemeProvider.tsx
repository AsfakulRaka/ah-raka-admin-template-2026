import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext } from "@/context/theme/ThemeContext";

type ThemeProviderProps = {
  children: ReactNode;
};
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<boolean>(
    () => localStorage.getItem("DarkClass") === "dark",
  );
  useEffect(() => {
    const root = document.documentElement;
    if (theme) {
      root.classList.add("dark");
      localStorage.setItem("DarkClass", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("DarkClass", "light");
    }
  }, [theme]);
  const toggleTheme = () => setTheme((prev) => !prev);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
