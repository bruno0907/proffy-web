import React, { SelectHTMLAttributes } from 'react'

import {
    SelectBlock,
    SelectField,
} from './styles'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    subLabel?: string;
    name: string;
    first?: boolean;
    last?: boolean;
    only?: boolean;
    options: Array<{
        value: string;
        label: string;
    }>;
}

const Select: React.FC<SelectProps> = ({ label, options, subLabel, name, ...rest }) => {
    return(
        <SelectBlock>
            <label htmlFor={name} className="label">{label}<span>{subLabel}</span></label>
            <SelectField id={name} {...rest} placeholder="Olá">
                <option defaultValue="0">{null}</option> 

                {options.map(option => {
                  return <option key={`id_${option.value}`} defaultValue={option.value}>{option.label}</option>
                })}

            </SelectField>
        </SelectBlock>
    )
}

export default Select;
