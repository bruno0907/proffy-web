import React from 'react';

import heart from '../../assets/images/icons/purple-heart.svg'

import { SignUpWrapper, Cta, SignUpLink } from './styles';

const SignUp: React.FC = () => {
  return (
    <SignUpWrapper>
      <Cta>Não tem conta? <SignUpLink to="/sign-up">Cadastre-se</SignUpLink></Cta>
      <span>É de graça <img src={heart} alt="Love"/></span>
    </SignUpWrapper>
  );
}

export default SignUp;