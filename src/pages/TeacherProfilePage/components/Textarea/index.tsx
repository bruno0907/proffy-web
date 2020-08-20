import React, { TextareaHTMLAttributes } from 'react'

import { InputBlock, TextAreaField } from './styles'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    subLabel?: string;
    name: string;
    style?: object;
}

const Input: React.FC<TextareaProps> = ({ 
    label, 
    subLabel, 
    name,     
    style,         
}) => {

    return(
        <InputBlock>            
            <label 
                htmlFor={name}>{label}
                { subLabel && <span>{subLabel}</span> }
            </label>      
            <TextAreaField                                           
                name={name}
                style={style}                                                                               
            />
        </InputBlock>
    )
}

export default Input;
