import { RouterProvider } from "react-router/dom";
import { router } from "@/routers/routers";
import { ThemeProvider } from "@/context/theme/ThemeProvider";
import { SidebarProvider } from "./context/sidebar/SidebarProvider";
function App() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <RouterProvider router={router} />
      </SidebarProvider>
    </ThemeProvider>
  );
}
export default App;
