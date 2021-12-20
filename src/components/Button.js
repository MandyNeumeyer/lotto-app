import React from 'react'
import './Button.css'

const Button = ({text, click}) => {
    return <button className="pulse" onClick={click}>{text}</button>
    
}
export default Button
