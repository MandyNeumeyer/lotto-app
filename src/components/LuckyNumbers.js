import React from 'react'
import './LuckyNumbers.css'


const LuckyNumbers = ({ numbers, isVisible}) => {
    
    const luckyNum = numbers.map((num, i)=><span key={i} className={`lucky lucky-${i}`}>{num}</span>)
    return (
        <div style={{visibility:`${isVisible? 'visible':'hidden'}`}} >
            <div className="luckyNum">{luckyNum}</div>
        </div>
    )
}

export default LuckyNumbers

