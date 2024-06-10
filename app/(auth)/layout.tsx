import React from 'react';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'signin to next',
  description: 'Generated for intro to next',
};

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactNode => {
  return (
    <div>
      <div className={'border-2 bg-amber-200 text-center'}>
        20% off for the next 3 days
      </div>
      {children}
    </div>
  );
};
export default Layout;
