import AppLogo from "@/components/AppLogo";
import AppNavLinks from "@/components/AppNavLinks";
import { useSidebar } from "@/context/sidebar/useSidebar";
interface SidebarProps {
  className?: string;
}
const Sidebar = ({ className }: SidebarProps) => {
  const { isSidebarOpen } = useSidebar();
  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-transparent p-2.5 ${className}`}
    >
      <div className="bg-theme-surface h-full w-full rounded-md shadow-xs">
        <AppLogo className="py-4.5">
          <span
            className={`font-anta text-3xl font-semibold lg:block ${isSidebarOpen ? "hidden" : "block lg:hidden"}`}
          >
            Raka
          </span>
        </AppLogo>
        <AppNavLinks />
      </div>
    </aside>
  );
};

export default Sidebar;
