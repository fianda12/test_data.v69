import React, { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-container flex flex-col items-center bg-white overflow-auto">
      <div className="h-screen overflow-auto p-3">{children}</div>
    </div>
  );
};

export default Layout;
