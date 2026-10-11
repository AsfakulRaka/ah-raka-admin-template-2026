import { Settings2 } from "lucide-react";
interface SidebarToggleButtonProps {
  className?: string;
  onClick: () => void;
}
const SidebarToggleButton = ({
  className,
  onClick,
}: SidebarToggleButtonProps) => {
  return (
    <div
      className={`${className} absolute top-6.5 z-30 flex h-12 w-12 items-center justify-center rounded-full p-1.5 duration-300`}
      onClick={onClick}
    >
      <button className="bg-theme-surface flex h-full w-full cursor-pointer items-center justify-center rounded-full">
        <Settings2 size={18} strokeWidth={3} />
      </button>
    </div>
  );
};

export default SidebarToggleButton;
