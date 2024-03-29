import React, { Children } from "react"
import './Button.css'
import { Link } from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline']//css classes

const SIZES = ['btn--medium', 'btn--large']


export const Button = ({
children,
type,
onClick,
buttonStyle,
buttonSize,
className

}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0] 
    {/* if no STYLE, apply style 1 */}
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    {/* if no SIZE, apply size 1 */}


return(
<Link to='/sign-up' className='btn-mobile'>

<button
className={`btn ${checkButtonStyle} ${checkButtonSize} ${className}`}
onClick={onClick}
type={type}
>
    {children}
</button>

</Link>
)
}

export default Button