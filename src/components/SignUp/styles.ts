import styled from "styled-components";

import { Link } from 'react-router-dom'

export const SignUpWrapper = styled.div`
  grid-area: signUp;  
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  justify-items: center;
  align-self: center;

  >span{
    font-size: 1.4rem;
    color: var(--color-text-complement);
    display: flex;
    align-items: center;
    justify-content: center;
    
      >img{
        margin-left: 1rem;
      }
  }

  @media(max-width: 65rem){
    display: none;
  }
`

export const Cta = styled.div`
  width: 20rem;
  font-size: 1.6rem;
  color: var(--color-text-base)
`

export const SignUpLink = styled(Link)`
  font-weight: 700;
  text-decoration: none;
  color: var(--color-primary);
  text-decoration: underline;
  transition: color 0.2s;

    &:hover{
      color: var(--color-primary-dark);
    }
`