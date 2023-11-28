"use client";
import React from "react";
import ViewContainer from "./view-container";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <ViewContainer className="my-20">{children}</ViewContainer>
    </>
  );
};

export default Layout;
