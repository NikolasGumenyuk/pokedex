import React from 'react';

import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>HomePage</div>
      <button onClick={() => navigate('/login')}>go to login</button>
    </div>
  );
};

export default Home;
