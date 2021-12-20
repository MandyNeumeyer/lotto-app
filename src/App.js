import React, { useState } from 'react'
import Header from './components/Header';
import Button from './components/Button'
import LuckyNumbers from './components/LuckyNumbers';



function App() {

  const [isVisible, setIsVisible] = useState(true)
  const [numbers, setNumbers] = useState([])



  const getRandomNumbers=()=>{
    const randomNumbers=[]
    for (let i = 0; i < 6; i++){
      randomNumbers.push(Math.ceil(Math.random() * 49) + " ");     
    }
    randomNumbers.push(Math.ceil(Math.random()*10))
    setNumbers(randomNumbers)
  }
  
  const reset = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div className="App">
      <Header />
      <LuckyNumbers numbers={numbers} isVisible={isVisible} />
      <div className="btn">
      <Button click={reset} text="Reset" />
      <Button click={getRandomNumbers} text="Show me the lucky numbers" />
      </div>
    </div>
  );
}

export default App;
