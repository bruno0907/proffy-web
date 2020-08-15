import React, { ButtonHTMLAttributes } from 'react';

import { Button } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {    
  loading?: boolean;
  primary?: boolean
  secondary?: boolean;
}

const FormButton: React.FC<ButtonProps> = ({ children, color, loading, ...rest }) => {
  return (
    <Button {...rest}>
      { loading ? 'Carregando' : children}
    </Button>
  );
}

export default FormButton;