import { Outlet } from "react-router";
import { useSidebar } from "@/context/sidebar/useSidebar";
import Sidebar from "@/components/Sidebar";
import MainLayout from "@/components/MainLayout";
import SidebarToggleButton from "@/components/SidebarToggleButton";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import ThemeSettings from "@/components/ThemeSettings";

const AppLayout = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  return (
    <>
      <SidebarToggleButton
        className={` ${isSidebarOpen ? "bg-theme-background left-0 md:left-28 lg:left-64" : "lg:bg-theme-background left-64 hidden lg:left-28 lg:block"}`}
        onClick={toggleSidebar}
      />
      <ThemeSwitcher />
      <div
        className={`absolute z-10 h-full w-full cursor-pointer bg-slate-950/20 ${isSidebarOpen ? "hidden" : "block lg:hidden"}`}
        onClick={toggleSidebar}
      ></div>
      <Sidebar
        className={`z-20 duration-200 ${isSidebarOpen ? "w-0 md:w-28 lg:w-72" : "w-72 lg:w-28"}`}
      />
      <ThemeSettings className="z-20 w-80 duration-200" />
      <MainLayout
        className={`duration-300 ${isSidebarOpen ? "ml-0 md:ml-28 lg:ml-72" : "ml-0 lg:ml-28"}`}
        children={<Outlet />}
      />
    </>
  );
};

export default AppLayout;
