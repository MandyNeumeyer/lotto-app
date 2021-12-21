import React from 'react'
import './Header.css'
import { GiClover } from "react-icons/gi";

const Header = ({ numbers }) => {
    if (numbers.length === 0) {
        return (
            <div className="Header">
                <div className="heading space">
                    <GiClover size={40} style={{ color: 'lightgray' }} />
                    <h1>LOTTO 6 aus 49</h1>
                
                </div>
                <p>Generating Lucky numbers</p>
            </div>
        )
    }else {
            return (
                <div className="Header">
                <div className="heading">
                    <GiClover size={40} style={{ color: 'lightgray' }} />
                    <h1>The Lucky Once!</h1>
                
                </div>
                <p>Generating Lucky numbers</p>
            </div>
            )
    }
    
}

export default Header
