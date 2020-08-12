import React from 'react'

import logoImg from '../../assets/images/logo.svg'

import { LogoWrapper } from './styles'

interface LogoLandingProps{
  title: string;
}

const LogoLanding: React.FC<LogoLandingProps> = ({ title }) => {
  return(
    <LogoWrapper>
      <img src={logoImg} alt="Proffy-logo"/>
      <h1>{title}</h1>
    </LogoWrapper>
  )
}

export default LogoLanding


