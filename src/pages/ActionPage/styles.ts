import styled from 'styled-components';

import { Link } from 'react-router-dom'

import backgroundFull from '../../assets/images/background-full.svg'
import backgroundMobile from '../../assets/images/background-mobile.svg'

export const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--color-primary);
  color: var(--color-title-in-primary);
`

export const Container = styled.div`
  width: 100vw;
  height: 100vh;  
  padding: 2rem;
  max-width: 120rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  background-image: url(${backgroundFull});
  background-position: center;
  background-repeat: no-repeat;

    @media(max-width: 690px){
      background-image: url(${backgroundMobile});
      background-position: center 5rem;
      background-repeat: no-repeat;
    }

`

export const SuccessMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0 10rem;
  
  >img{
    width: 12rem;
    height: 12rem;
    margin-bottom: 3rem;
  }
  
  >h1{
    font-family: 'Archivo';
    font-size: 5.4rem;
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: center;    
  }
  
  >p{
    font-size: 1.6rem;
    font-weight: 400;
    text-align: center;      
    width: 50rem;
  }
  
  @media(max-width: 690px){    
    
    >img{      
      width: 8rem;
      height: 8rem;
    }
    
    >h1{
      font-size: 3.2rem;
    }

    >p{
      font-size: 1.4rem;
      width: 30rem;
    }
  }

` 

export const Button = styled(Link)`  
  width: 100%;
  max-width: 30rem;  
  height: 5.6rem;
  min-height: 5.6rem;
  border-radius: 0.8rem;
  background: var(--color-secundary);
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  
  >span{
    color: var(--color-button-text);
    font-family: Archivo;
    font-size: 1.6rem;
    font-weight: 700;    
  }

  >img{
    width: 2.6rem;
    height: 2.6rem;
    margin-right: 1.5rem;
  }
  
  &:hover{
    background: var(--color-secundary-dark);
  }

  @media(max-width: 690px){
    position: fixed;
    bottom: 8rem;
  }
  ` 