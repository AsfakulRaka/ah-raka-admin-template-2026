import { createBrowserRouter } from "react-router";
import AppLayout from "@/layouts/app/AppLayout";
import Dashboard from "@/pages/dashboard/Dashboard";
import AuthLayout from "@/layouts/auth/AuthLayout";
import Login from "@/pages/auth/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      { index: true, path: "dashboard", Component: Dashboard },
      { path: "raka", element: <h1>Raka</h1> },
      { path: "aht1", element: <h1>aht1</h1> },
      { path: "aht2", element: <h1>aht2</h1> },
      { path: "aht3", element: <h1>aht3</h1> },
      { path: "aht4", element: <h1>aht4</h1> },
      { path: "rrr", element: <h1>rrrr</h1> },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [{ index: true, Component: Login }],
  },
]);
