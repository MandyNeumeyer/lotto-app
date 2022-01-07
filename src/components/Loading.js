import React, {useState, useEffect} from 'react';
import './Loading.css'


const Loading = ({fortuneTeller, goldenFrame}) => {
  const [imgLoaded, setImgLoaded] = useState(false)
  
  const loadingDone = () => {
    setImgLoaded(true)
  }


  return (
    <div className="Loading" style={{display: imgLoaded? 'block':'none'}}>
      <img className="fortuneTeller" src={fortuneTeller} alt="fortune-teller" />
      <img className="GoldenFrame" src={goldenFrame} alt="golden-frame" onLoad={loadingDone} />
    </div>
  );
};

export default Loading;