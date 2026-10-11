import { type LucideIcon, LayoutDashboard, Apple } from "lucide-react";
type NavDataType =
  | {
      type: "link";
      name: string;
      to: string;
      icon: LucideIcon;
      notification: number | null;
    }
  | {
      type: "dropdown";
      name: string;
      to: string;
      icon: LucideIcon;
      submenu: {
        type: "link";
        name: string;
        to: string;
        icon: LucideIcon;
      }[];
    };
export const navData: NavDataType[] = [
  {
    type: "link",
    name: "Dashboard",
    to: "/dashboard",
    icon: LayoutDashboard,
    notification: 100,
  },
  {
    type: "link",
    name: "Raka",
    to: "/raka",
    icon: Apple,
    notification: null,
  },
  {
    type: "dropdown",
    name: "aht dropdown",
    to: "#",
    icon: Apple,
    submenu: [
      {
        type: "link",
        name: "aht1",
        to: "/aht1",
        icon: LayoutDashboard,
      },
      {
        type: "link",
        name: "aht2",
        to: "/aht2",
        icon: Apple,
      },
    ],
  },
  {
    type: "dropdown",
    name: "aht dropdown 2",
    to: "#",
    icon: Apple,
    submenu: [
      {
        type: "link",
        name: "aht3",
        to: "/aht3",
        icon: LayoutDashboard,
      },
      {
        type: "link",
        name: "aht4",
        to: "/aht4",
        icon: Apple,
      },
    ],
  },
  {
    type: "link",
    name: "Rrrr",
    to: "/rrr",
    icon: Apple,
    notification: null,
  },
];
