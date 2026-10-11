import { useSidebar } from "@/context/sidebar/useSidebar";
import { useLocation } from "react-router";
import UserProfileMenu from "@/components/UserProfileMenu";
import ThemeToggleButton from "@/components/ThemeToggleButton";

const Header = () => {
  const { isSidebarOpen } = useSidebar();
  const location = useLocation();
  const pathParts = location.pathname.split("/")[1];

  return (
    <nav className="bg-theme-surface sticky top-2.5 h-20 w-full rounded-md px-2.5 shadow-xs">
      <div className="flex h-full w-full items-center justify-between">
        <div
          className={`font-semibold capitalize duration-300 ${isSidebarOpen ? "pl-6 lg:pl-0" : "pl-0 lg:pl-6"}`}
        >
          <span>{pathParts && pathParts}</span>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggleButton />
          <UserProfileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Header;
