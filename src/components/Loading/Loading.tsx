import React from 'react';

import { Dna } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className="fixed z-30 h-full w-full bg-zinc-700/50 ">
      <div className="relative flex min-h-screen flex-col items-center justify-center">
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperClass="dna-wrapper"
        />
      </div>
    </div>
  );
};

export default Loading;
