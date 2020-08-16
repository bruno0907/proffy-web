import React, { InputHTMLAttributes } from 'react';

import { RememberWrapper, Checkbox, ForgotPassword } from './styles';

interface RememberMeProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>{  
  checked: boolean;
  onChange(value: boolean) : void;
}

const RememberMe: React.FC<RememberMeProps> = ({ children, checked, onChange, ...rest }) => {
  return (
    <RememberWrapper>
      <Checkbox>
        <input type="checkbox" name="remember" checked={checked} onChange={event => onChange(event.target.checked)} {...rest}/>
        <span></span>
      </Checkbox>
    <label>Lembrar-me</label>
    <ForgotPassword to="/password-recovery">Esqueci minha senha</ForgotPassword>
    </RememberWrapper>
  );
}

export default RememberMe;