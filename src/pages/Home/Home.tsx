import { useNavigate } from 'react-router-dom';

import { PathName } from 'models/PathName';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>HomePage</div>
      <button onClick={() => navigate(PathName.login)}>go to login</button>
    </div>
  );
};

export default Home;
