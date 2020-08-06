import React, { SelectHTMLAttributes } from 'react'

import './styles.css'

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
        <div className="select-block">
            <label htmlFor={name}>{label}<span>{subLabel}</span></label>
            <select id={name} {...rest}>
                <option 
                    value="" 
                    disabled 
                    defaultValue="" 
                    hidden
                > Selecione uma opção...
                </option>
                {options.map(option => {
                    return <option key={`id_${option.value}`} value={option.value}>{option.label}</option>
                })                    
                }
                

            </select>
        </div>
    )
}

export default Select;
