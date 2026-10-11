import { useTheme } from "@/context/theme/useTheme";
import { Moon, Sun } from "lucide-react";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="group">
      <button
        className="group-hover:bg-theme-menu-hover group-focus-within:bg-theme-menu-hover flex h-10 w-10 cursor-pointer items-center justify-center rounded-full duration-300"
        onClick={() => toggleTheme()}
      >
        <span className="">
          {theme ? (
            <Sun className="w-7 duration-300 group-focus-within:w-6 group-hover:w-6" />
          ) : (
            <Moon className="w-7 duration-300 group-focus-within:w-6 group-hover:w-6" />
          )}
        </span>
      </button>
    </div>
  );
};

export default ThemeToggleButton;
