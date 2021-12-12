import React from 'react'
import './LuckyNumbers.css'


const LuckyNumbers = ({ numbers, isVisible}) => {
    
    const luckyNum = numbers.map((num, i)=><span key={i} className={`lucky lucky-${i}`}>{num}</span>)
    return <div className="luckyNum">{isVisible? luckyNum: null}</div>  
}

export default LuckyNumbers

