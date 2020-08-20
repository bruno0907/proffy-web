import React, { SelectHTMLAttributes } from 'react'

import {
    SelectBlock,
    SelectField,
} from './styles'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    subLabel?: string;
    name: string;
    style?: object;
    options: Array<{
        value: string;
        label: string;
    }>;
}

const Select: React.FC<SelectProps> = ({ label, options, subLabel, name, style, ...rest }) => {
    return(
        <SelectBlock style={style}>
            <label htmlFor={name} className="label">{label}<span>{subLabel}</span></label>
            <SelectField id={name} {...rest} placeholder="Olá">
            
                {options.map(option => {
                  return <option key={`id_${option.value}`} defaultValue={option.value}>{option.label}</option>
                })}

            </SelectField>            
        </SelectBlock>
    )
}

export default Select;
