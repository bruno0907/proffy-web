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
            <SelectField id={name} {...rest}>                 
                {options.map(option => {
                  return <option key={`id_${option.value}`} value={option.value}>{option.label}</option>
                })                    
              }
            </SelectField>
            <label htmlFor={name}>{label}<span>{subLabel}</span></label>
        </SelectBlock>
    )
}

export default Select;
