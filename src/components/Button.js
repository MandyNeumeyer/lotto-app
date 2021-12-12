import React from 'react'


const Button = ({text, click}) => {
    return (
        <div>
            <button onClick={click}>{text}</button>
        </div>
    )
}
export default Button
