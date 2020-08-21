import React from 'react';

import { Link, useHistory } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import back from '../../assets/images/icons/back.svg'

import { NavWrapper, Container, GoBackArrow, PageTitle, NavLogo } from './styles';

interface NavBarProps{
  title: string;
}

const NavBar: React.FC<NavBarProps> = ({ title }) => {
  const { goBack } = useHistory()

  return (
    <NavWrapper>
      <Container>
        <GoBackArrow src={back} alt="Go-back" onClick={goBack}/>
        <PageTitle>{title}</PageTitle>
        <Link to="/"><NavLogo src={logo} alt="Proffy" /></Link>
      </Container>
    </NavWrapper>
  );
}

export default NavBar;