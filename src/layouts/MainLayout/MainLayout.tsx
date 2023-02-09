import { useEffect } from 'react';

import { Outlet, useNavigate } from 'react-router-dom';

import Header from 'components/Header/Header';
import { PathName } from 'models/PathName';

const MainLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(PathName.home);
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
