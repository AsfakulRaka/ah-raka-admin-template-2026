interface SidebarProps {
  className?: string;
}
const ThemeSettings = ({ className }: SidebarProps) => {
  return (
    <aside
      className={`fixed top-0 right-0 h-screen bg-transparent p-2.5 ${className}`}
    >
      <div className="bg-theme-surface border-theme-border h-full w-full rounded-md border shadow-xs">
        ThemeSettings
      </div>
    </aside>
  );
};

export default ThemeSettings;
