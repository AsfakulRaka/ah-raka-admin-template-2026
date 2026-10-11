import { createContext } from "react";

type ThemeContextType = {
  theme: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
