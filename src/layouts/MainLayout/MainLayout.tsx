import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
