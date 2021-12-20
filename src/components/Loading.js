import React from 'react';
import FortuneTeller from './fortune-teller.gif'

const Loading = () => {
  return (
    <div className="Loading">
        <img src={FortuneTeller} alt="" />
    </div>
  );
};

export default Loading;