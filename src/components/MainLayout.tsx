import { type ReactNode } from "react";
import Header from "@/components/Header";

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

const MainLayout = ({ children, className }: MainLayoutProps) => {
  return (
    <>
      <section className={`bg-transparent py-2.5 pr-7 pl-5 ${className}`}>
        <Header />
        <main className="mt-5">{children}</main>
      </section>
    </>
  );
};

export default MainLayout;
