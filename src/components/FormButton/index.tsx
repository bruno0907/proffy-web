import React, { ButtonHTMLAttributes } from 'react';

import { Button } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {  
  disabled?: boolean;
  loading?: boolean;
}

const FormButton: React.FC<ButtonProps> = ({ children, disabled, loading, ...rest }) => {
  return (
    <Button disabled={disabled} {...rest}>
      { loading ? 'Carregando' : children}
    </Button>
  );
}

export default FormButton;