import React, { InputHTMLAttributes } from 'react'

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    subLabel?: string;
    name: string;
}

const Input: React.FC<InputProps> = ({ label, subLabel, name, ...rest }) => {
    return(
        <div className="input-block">
            <label htmlFor={name}>{label}<span>{subLabel}</span></label>
            <input type="text" id={name} {...rest}/>
        </div>
    )
}

export default Input;
