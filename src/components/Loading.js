import React from 'react';
import FortuneTeller from './img/fortune-teller.gif'
import GoldenFrame from './img/goldenFrame.png'
import './Loading.css'

const Loading = () => {
  return (
    <div className="Loading">
      <img className="fortuneTeller" src={FortuneTeller} alt="fortune-teller" />
      <img className="GoldenFrame" src={GoldenFrame} alt="golden-frame" />
    </div>
  );
};

export default Loading;