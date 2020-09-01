import styled from "styled-components";

export const NavWrapper = styled.nav`
  width: 100%;    
  background: var(--color-primary-dark);
  border-bottom: solid 1px var(--color-primary-darker);
`

export const Container = styled.div`
  margin: auto;
  width: 100%;  
  max-width: 80rem;
  padding: 2rem;  
  display: flex;
  align-items: center;
  justify-content: space-between;

    @media(min-width: 65rem){
      padding: 2rem 0;
    }
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