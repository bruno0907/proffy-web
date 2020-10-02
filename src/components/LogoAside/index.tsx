import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'

import { Container, Content } from './styles'

const LogoAside: React.FC = () => {
  return(
    <Container>
      <Content>
        <Link to="/">
          <img src={logo} alt="Proffy"/>
        </Link>
        <h1>Sua plataforma de estudos online.</h1>        
      </Content>
    </Container> 
  )
}

export default LogoAside