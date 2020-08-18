import styled from "styled-components";

export const NavWrapper = styled.nav`
  width: 100%;  
  padding: 1.2rem 16rem;
  background: var(--color-primary-dark);
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const GoBackArrow = styled.img`
  cursor: pointer;
  transition: opacity 0.2s;

    :hover{
      opacity: 0.8;
    }
`

export const PageTitle = styled.span`
  font-family: Archivo;
  font-size: 1.6rem;
  color: var(--color-text-in-primary);
`

export const NavLogo = styled.img`
  height: 1.5rem;

  transition: opacity 0.2s;

    :hover{
      opacity: 0.8;
    }
`