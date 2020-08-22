import React from 'react';

import { useLocation } from 'react-router-dom'

import successIcon from '../../assets/images/icons/success-check-icon.svg'

import { PageWrapper, Container, SuccessMessage, Button } from './styles';

interface ActionPageProps {  
  title: string;
  description: string;
  buttonText: string;  
  link: string;
}

const ActionPage: React.FC = () => {
  const location = useLocation<ActionPageProps>()

    return (
    <PageWrapper>
      <Container>
        <SuccessMessage>
          <img src={successIcon} alt="Success Icon" />                    
          <h1>{location.state?.title}</h1>
          <p>{location.state?.description}</p>          
        </SuccessMessage>
        <Button to={location.state?.link}>          
          <span>{location.state?.buttonText}</span>
        </Button>        
      </Container>
    </PageWrapper>
  );
}

export default ActionPage;