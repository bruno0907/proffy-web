import React, { InputHTMLAttributes, useState } from 'react'

import showPassword from '../../assets/images/icons/show-password.svg'
import hidePassword from '../../assets/images/icons/hide-password.svg'

import { InputBlock, InputField } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    subLabel?: string;
    name: string;
    type?: string;
    style?: object;
    password?: boolean;
    first?: boolean;
    last?: boolean;
    only?: boolean;    
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
    
    const [ inputType, setInputType ] = useState( type )
    const [ toggleVisibility, setToggleVisibility ] = useState(password)
    
    const inputId = `id_${name}`    
    const isTextArea = type === 'textarea'
    const tagType = isTextArea ? 'textarea' : 'input'    
    
    const handleTogglePassword = () => {
        setToggleVisibility(!toggleVisibility)
        setInputType( toggleVisibility ? 'text' : 'password' )
    }        

    return(
        <InputBlock style={style}>            
            <InputField
                as={tagType}           
                type={ inputType || 'text' }
                id={inputId}  
                name={name}              
                placeholder={name}                
                {...rest}                                              
            />
            <label 
                htmlFor={name}>{label}
                { subLabel && <span>{subLabel}</span> }
            </label>            
                { password &&  
                    <img src={ toggleVisibility ? showPassword : hidePassword } alt="Show password" onClick={handleTogglePassword}/>
                }
        </InputBlock>
    )
}

export default Input;
