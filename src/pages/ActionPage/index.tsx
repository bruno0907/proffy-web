import React from 'react';

import successIcon from '../../assets/images/icons/success-check-icon.svg'

import { PageWrapper, Container, SuccessMessage, Button } from './styles';

/*
  As informações virão dinâmicamente do backend conforme o sucesso da ação.
  As informçãoes são:
    - Ícone,
    - Título (h1)
    - Mensagem (p)
    - Text do botão
    - Link
*/

const data = {
  icon: `${successIcon}`,
  title: 'Cadastro concluído com sucesso!',
  description: 'Agora você faz parte da plataforma da Proffy. Tenha uma ótima experiência.' ,
  buttonText: 'Fazer Login',
  link: '/'
}

interface ActionPageProps {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  link: string
}

const ActionPage: React.FC<ActionPageProps> = () => {

  const { icon, title, description, buttonText, link} = data

  return (
    <PageWrapper>
      <Container>
        <SuccessMessage>
          <img src={icon} alt="Success"/>
          <h1>{title}</h1>
          <p>{description}</p>          
        </SuccessMessage>
        <Button to={link}>          
          <span>{buttonText}</span>
        </Button>        
      </Container>
    </PageWrapper>
  );
}

export default ActionPage;