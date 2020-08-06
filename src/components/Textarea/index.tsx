import React, { TextareaHTMLAttributes } from 'react'

import './styles.css'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    subLabel?: string;
    name: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, subLabel, name, ...rest }) => {
    return(
        <div className="textarea-block">
            <label htmlFor={name}>{label}<span>{subLabel}</span></label>
            <textarea id={name} {...rest}/>
        </div>
    )
}

export default Textarea;
