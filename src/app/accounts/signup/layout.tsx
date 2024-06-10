import React, { ReactNode } from "react";
import LeftPage from "./_components/LeftPage";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex w-full h-full">
      <div className="w-1/2">
        <LeftPage />
      </div>
      <div className="w-1/2">{children}</div>
    </div>
  );
};

export default Layout;
