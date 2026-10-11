import { MonitorCog, MessageSquare } from "lucide-react";
const ThemeSwitcher = () => {
  return (
    <div className="bg-theme-surface fixed top-1/2 right-0 -translate-y-1/2 rounded-l-3xl">
      <div className="flex items-center justify-center p-2">
        <ul>
          <li>
            <button className="hover:bg-theme-menu-hover group-focus-within:bg-theme-menu-hover flex cursor-pointer items-center gap-2 rounded-full p-2 duration-300">
              <MonitorCog />
            </button>
          </li>
          <li>
            <button className="hover:bg-theme-menu-hover group-focus-within:bg-theme-menu-hover flex cursor-pointer items-center gap-2 rounded-full p-2 duration-300">
              <MessageSquare />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
