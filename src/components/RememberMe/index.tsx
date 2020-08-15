import React from 'react';

import { RememberWrapper, Checkbox, ForgotPassword } from './styles';

const RememberMe: React.FC = () => {
  return (
    <RememberWrapper>
      <Checkbox>
        <input type="checkbox" name="remember" />
        <span></span>
      </Checkbox>
    <label>Lembrar-me</label>
    <ForgotPassword to="/password-recovery">Esqueci minha senha</ForgotPassword>
    </RememberWrapper>
  );
}

export default RememberMe;