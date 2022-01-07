import React, {useState, useEffect} from 'react';
import './Loading.css'


const Loading = ({fortuneTeller, goldenFrame}) => {
  const [imgLoaded, setImgLoaded] = useState(false)
  
  useEffect(() => {
    setImgLoaded(true)
  }, [fortuneTeller, goldenFrame]);

  return (
    <div className="Loading" style={{display: imgLoaded?'block': 'none'}}>
      <img className="fortuneTeller" src={fortuneTeller} alt="fortune-teller" />
      <img className="GoldenFrame" src={goldenFrame} alt="golden-frame" />
    </div>
  );
};

export default Loading;