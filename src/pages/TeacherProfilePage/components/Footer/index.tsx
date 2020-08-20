import React from 'react';

import warningIcon from '../../../../assets/images/icons/warning.svg'
import FormButton from '../../../../components/FormButton'

import { FooterWrapper, Warning } from './styles'

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Warning>
        <img src={warningIcon} alt="Atenção"/>
        <div>
          <p>Importante!</p>
          <span>Preencha todos os dados corretamente.</span>
        </div>
      </Warning>
      <FormButton>Salvar cadastro</FormButton>
    </FooterWrapper>
  );
}

export default Footer