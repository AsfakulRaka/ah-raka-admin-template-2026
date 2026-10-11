import { Link } from "react-router";
import { ChevronDown, Lock, LogOut } from "lucide-react";
import raka from "@/assets/images/raka.jpg";
import { UserShield, Settings } from "lucide-react";
import { useDropdown } from "@/hooks/useDropdown";

const UserProfileMenu = () => {
  const { isOpen, toggle, dropdownRef } = useDropdown();
  return (
    <>
      <div
        className="group/profile flex cursor-pointer gap-3"
        onClick={toggle}
        ref={dropdownRef}
      >
        <div className="relative">
          <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full">
            <img
              className="h-14 w-14 rounded-full duration-150 group-hover/profile:h-12 group-hover/profile:w-12"
              src={raka}
              alt="avater"
            />
          </div>

          <div className="absolute right-0 bottom-0 h-3 w-3 rounded-full bg-green-400"></div>
        </div>
        <div className="flex items-center justify-center gap-3">
          <div className="flex flex-col items-center justify-center tracking-wider">
            <span className="font-bold capitalize">asfakul raka</span>
            <span className="text-sm capitalize">administrator</span>
          </div>
          <ChevronDown size={20} strokeWidth={2.5} />
        </div>
      </div>

      <div
        className={`bg-theme-surface border-theme-border absolute top-full right-3.5 z-10 my-1.5 rounded-md border pt-2 duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <p className="px-2 capitalize">welcome !</p>
        <ul className="px-2 pt-1 pb-1 capitalize">
          <li className="hover:bg-theme-menu-hover">
            <Link to="#" className="flex w-44 flex-row gap-2 p-2">
              <UserShield size={18} />
              <span>my profile</span>
            </Link>
          </li>
          <li className="hover:bg-theme-menu-hover">
            <Link to="#" className="flex w-44 flex-row gap-2 p-2">
              <Settings size={18} />
              <span>account setting</span>
            </Link>
          </li>
          <li className="hover:bg-theme-menu-hover">
            <Link to="#" className="flex w-44 flex-row gap-2 p-2">
              <Lock size={18} />
              <span>lock screen</span>
            </Link>
          </li>
        </ul>
        <div className="border-theme-border border-t pt-1 pb-1">
          <ul className="px-2 capitalize">
            <li className="hover:bg-theme-menu-hover">
              <Link
                to="#"
                className="flex w-44 flex-row gap-2 p-2 text-red-500"
              >
                <LogOut size={18} />
                <span>logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserProfileMenu;
