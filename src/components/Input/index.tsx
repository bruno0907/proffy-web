import React, { InputHTMLAttributes } from 'react'

import { InputBlock } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    subLabel?: string;
    name: string;
    type?: string;
}

const Input: React.FC<InputProps> = ({ 
    label, 
    subLabel, 
    name, 
    type,       
    ...rest 
}) => {
    
        return(
        <InputBlock >            
            <label 
                htmlFor={name}>{label}
                { subLabel && <span>{subLabel}</span> }
            </label>     
            <input                         
                type={ type || 'text' }                
                name={name}                                           
                {...rest}                                              
            />
        </InputBlock>
    )
}

export default Input;
