import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

function LandingLayout({ children }: LayoutProps) {
  return <section>{children}</section>;
}

export default LandingLayout;
