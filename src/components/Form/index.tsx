import React, { FormHTMLAttributes } from 'react';
import { Link } from 'react-router-dom'

import { FormContainer } from './styles';

interface FormProps extends FormHTMLAttributes<HTMLFormElement>{
  label: string;
  description?: string;
  register?: boolean;  
}

const Form: React.FC<FormProps> = ({ label, description, register, children, ...rest }) => {
  return (
    
      <FormContainer {...rest}>
        <legend>
          <div>
            <h2>  
              {label}                
            </h2>
            { register && <Link to="/register">Criar uma conta</Link> }
          </div>
          <p>{description}</p>
        </legend>
        <fieldset>
          {children}
        </fieldset>   
      </FormContainer>
    
  );  
}

export default Form;