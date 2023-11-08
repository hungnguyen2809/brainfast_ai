import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

function LandingLayout({ children }: LayoutProps) {
  return <div>{children}</div>;
}

export default LandingLayout;
