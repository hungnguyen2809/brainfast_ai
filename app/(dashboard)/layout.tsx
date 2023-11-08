import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

function DashboardLayout({ children }: LayoutProps) {
  return <div>{children}</div>;
}

export default DashboardLayout;
