import { ReactNode } from "react";
import { Header } from "./Header";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
      <footer className="bg-gray-800 text-white text-center p-4">
        © 2025 Online Courses. All rights reserved.
      </footer>
    </div>
  );
};
