import React from 'react'
import './Button.css'

const Button = ({text, click}) => {
    return (
        <div className="buttons">
            <button className="pulse" onClick={click}>{text}</button>
        </div>
    )
}
export default Button
