import Logo from "@/assets/logo/logo.svg";
import { type ReactNode } from "react";

interface AppLogoProps {
  children?: ReactNode;
  className?: string;
}
const AppLogo = ({ children, className }: AppLogoProps) => {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <img src={Logo} alt="Logo" className="w-10" />
      {children}
    </div>
  );
};

export default AppLogo;
