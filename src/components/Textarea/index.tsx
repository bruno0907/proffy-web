import React, { TextareaHTMLAttributes } from 'react'

import { InputBlock } from './styles'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    subLabel?: string;
    name: string;    
}

const Textarea: React.FC<TextareaProps> = ({ 
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
            <textarea name={name} />
        </InputBlock>
    )
}

export default Textarea;
