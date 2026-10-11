import { useState, useRef, useEffect } from "react";
import { useSidebar } from "@/context/sidebar/useSidebar";
import { ChevronUp } from "lucide-react";
import { NavLink, useLocation } from "react-router";
import { navData } from "@/data/navData";

const AppNavLinks = () => {
  const { isSidebarOpen } = useSidebar();
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  // Dropdown button Active
  const location = useLocation();
  const isDropdownActive = (submenu: { to: string }[]) => {
    return submenu.some((item) => location.pathname === item.to);
  };
  // Close dropdown when clicking outside
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div ref={dropdownRef}>
      <div
        className={`px-5 ${isSidebarOpen ? "invisible lg:visible" : "visible lg:invisible"}`}
      >
        <span className="font-semibold capitalize">navigation</span>
      </div>
      <div
        className={`scrollbar-custom mt-2 flex h-[calc(100vh-200px)] flex-col items-center`}
      >
        <ul>
          {navData.map((links, index) => (
            <li key={index}>
              {links.type === "link" && (
                <NavLink
                  to={links.to}
                  className={`hover:bg-theme-menu-hover flex h-10 items-center justify-between p-2 tracking-wide duration-300 ${isSidebarOpen ? "w-12 justify-center rounded-md lg:w-52 lg:justify-between lg:rounded-xs" : "w-52 justify-between rounded-xs lg:w-12 lg:justify-center lg:rounded-md"}`}
                >
                  <div className={`flex items-center gap-2.5`}>
                    <links.icon size={20} />
                    <span
                      className={`capitalize ${isSidebarOpen ? "hidden lg:block" : "block lg:hidden"}`}
                    >
                      {links.name}
                    </span>
                  </div>
                  {links.notification && (
                    <div
                      className={`h-5 w-7 items-center justify-center rounded-full bg-rose-500 text-xs text-white ${isSidebarOpen ? "hidden lg:flex" : "flex lg:hidden"}`}
                    >
                      {links.notification > 99 ? "99+" : links.notification}
                    </div>
                  )}
                </NavLink>
              )}
              {links.type === "dropdown" && (
                <div className="group/menu">
                  <button
                    onClick={() =>
                      setDropdownOpen(dropdownOpen === index ? null : index)
                    }
                    className={`hover:bg-theme-menu-hover flex h-10 items-center justify-between p-2 tracking-wide duration-300 ${isSidebarOpen ? "w-12 justify-center rounded-md lg:w-52 lg:justify-between lg:rounded-xs" : "w-52 justify-between rounded-xs lg:w-12 lg:justify-center lg:rounded-md"} ${
                      links.submenu &&
                      isDropdownActive(links.submenu) &&
                      "active"
                    }`}
                  >
                    <div className={`flex items-center gap-2.5`}>
                      <links.icon size={20} />
                      <span
                        className={`capitalize ${isSidebarOpen ? "hidden lg:block" : "block lg:hidden"}`}
                      >
                        {links.name}
                      </span>
                    </div>
                    <div
                      className={`${dropdownOpen === index ? "rotate-180" : "rotate-0"} ${isSidebarOpen ? "hidden lg:block" : "block lg:hidden"} duration-300`}
                    >
                      <ChevronUp size={20} strokeWidth={2.5} />
                    </div>
                  </button>
                  <ul
                    className={`bg-theme-surface border-theme-border left-27 overflow-hidden rounded-md transition-all duration-100 ${
                      dropdownOpen === index
                        ? `visible max-h-96 opacity-100 ${isSidebarOpen ? "absolute border lg:static lg:border-none" : "lg:absolute lg:border"}`
                        : `invisible max-h-0 opacity-0 ${isSidebarOpen ? "absolute border lg:static lg:border-none" : "lg:absolute lg:border"}`
                    } `}
                  >
                    <li
                      className={`${isSidebarOpen ? "p-1.5 lg:p-0 lg:py-1 lg:pl-3" : "py-1 pl-3 lg:p-1.5"} w-52`}
                    >
                      {links.submenu.map((links, index) => (
                        <NavLink
                          to={links.to}
                          key={index}
                          className="hover:bg-theme-menu-hover flex h-10 w-full items-center gap-2.5 rounded-xs p-2 tracking-wide duration-300"
                        >
                          <links.icon size={20} />

                          <span className="capitalize">{links.name}</span>
                        </NavLink>
                      ))}
                    </li>
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AppNavLinks;
