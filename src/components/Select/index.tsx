import React, { SelectHTMLAttributes } from 'react'

import { SelectBlock } from './styles'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    subLabel?: string;
    name: string;    
    options: Array<{
        value: string;
        label: string;
    }>;
}

const Select: React.FC<SelectProps> = ({ label, options, subLabel, name, ...rest }) => {
    return(
        <SelectBlock>
            <label htmlFor={name} className="label">{label}<span>{subLabel}</span></label>
            <select id={name} {...rest} placeholder="Olá">
            
                {options.map(option => {
                  return <option key={`id_${option.value}`} value={option.value}>{option.label}</option>
                })}

            </select>            
        </SelectBlock>
    )
}

export default Select;
