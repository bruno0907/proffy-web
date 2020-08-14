import React from 'react'

import logo from '../../assets/images/logo.svg'

import { Container, Content } from './styles'

const LogoAside: React.FC = () => {
  return(
    <Container>
      <Content>
        <img src={logo} alt="Proffy"/>
        <h1>Sua plataforma de estudos online.</h1>        
      </Content>
    </Container>
  )
}

export default LogoAside