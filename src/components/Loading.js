import React, { useState } from 'react';
import FortuneTeller from './img-sounds/fortune-teller.gif'
import GoldenFrame from './img-sounds/goldenFrame.png'
import './Loading.css'


const Loading = () => {
  const [imgLoaded, setImgLoaded] = useState(false)
  
  const loadingDone = () => {
    console.log("img was loaded");
    setImgLoaded(true)
  }

  
  return(
   <div className="Loading" style={{opacity: imgLoaded? '1':'0', transition: '10s', transitionDelay:"1s"}}>
    <img className="fortuneTeller" src={FortuneTeller} alt="fortune-teller" />
    <img className="GoldenFrame" src={GoldenFrame} alt="golden-frame" onLoad={loadingDone} />
  </div>
  );
};

export default Loading;