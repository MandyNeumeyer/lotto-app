import React from 'react'
import './Header.css'
import { GiClover } from "react-icons/gi";

const Header = () => {
    return (
        <div className="Header">
            <div className="heading">
            <GiClover size={40} style={{ color: 'lightgray' }} />
                <h1>Lotto 6 aus 49</h1>
                
            </div>
            <p>Generating Lucky numbers</p>
        </div>
    )
}

export default Header
