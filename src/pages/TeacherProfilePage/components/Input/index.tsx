import React, { InputHTMLAttributes } from 'react'

import { InputBlock, InputField } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    subLabel?: string;
    name: string;
    type?: string;
    style?: object;
    password?: boolean; 
}

const Input: React.FC<InputProps> = ({ 
    label, 
    subLabel, 
    name, 
    type,
    style,
    password,         
    ...rest 
}) => {
    
        return(
        <InputBlock style={style}>            
            <label 
                htmlFor={name}>{label}
                { subLabel && <span>{subLabel}</span> }
            </label>           
                
            <InputField                         
                type={ type || 'text' }                
                name={name}              
                placeholder={name}                
                {...rest}                                              
            />
        </InputBlock>
    )
}

export default Input;
