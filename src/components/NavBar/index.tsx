import React from 'react';

import { Link, useHistory } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import back from '../../assets/images/icons/back.svg'

import { NavWrapper, GoBackArrow, PageTitle, NavLogo } from './styles';

const NavBar: React.FC = () => {
  const { goBack } = useHistory()

  return (
    <NavWrapper>      
      <GoBackArrow src={back} alt="Go-back" onClick={goBack}/>
      <PageTitle>Meu Perfil</PageTitle>
      <Link to="/"><NavLogo src={logo} alt="Proffy" /></Link>
    </NavWrapper>
  );
}

export default NavBar;