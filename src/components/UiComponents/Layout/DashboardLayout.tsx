import { FC } from 'react';

interface PageProps {
  children: JSX.Element;
}

const DashboardLayout: FC<PageProps> = ({ children }) => {
  return (
    <>
      <h2>Hello</h2>
      {children}
      <h2>World</h2>
    </>
  );
};

export default DashboardLayout;
