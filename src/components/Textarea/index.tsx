import React, { TextareaHTMLAttributes } from 'react'

import { InputBlock, TextAreaField } from './styles'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    subLabel?: string;
    name: string;
    style?: object;
    first?: boolean;
    last?:boolean;
    only?:boolean;
}

const Input: React.FC<TextareaProps> = ({ 
    label, 
    subLabel, 
    name,     
    style,         
}) => {

    return(
        <InputBlock>            
            <TextAreaField                                           
                name={name}
                style={style}
                placeholder={name}                                                                 
            />
            <label 
                htmlFor={name}>{label}
                { subLabel && <span>{subLabel}</span> }
            </label>      
        </InputBlock>
    )
}

export default Input;
