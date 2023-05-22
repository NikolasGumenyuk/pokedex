import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';

const MainLayout = () => {
  return (
    <div className="flex min-h-[100vh] flex-col">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
