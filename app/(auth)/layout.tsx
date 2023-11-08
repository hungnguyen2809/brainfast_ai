import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

function AuthLayout({ children }: LayoutProps) {
  return <div>{children}</div>;
}

export default AuthLayout;
