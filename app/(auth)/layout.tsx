import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

function AuthLayout({ children }: LayoutProps) {
  return <section>{children}</section>;
}

export default AuthLayout;
