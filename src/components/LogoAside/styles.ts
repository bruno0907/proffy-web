import styled from "styled-components";

import background from '../../assets/images/background-half.svg'
import backgroundMobile from '../../assets/images/background-mobile-half.svg'

export const Container = styled.div`  
  width: 60rem;  
  height: 100vh;
  min-height: 76rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
  background: var(--color-primary) url(${background}) center no-repeat;      
  background-size: 45rem;
  
  
    @media(max-width: 62rem){
      background: var(--color-primary) url(${backgroundMobile}) center no-repeat;
      background-size: 20rem;
      width: 100%;     
      height: 22.5rem; 
      min-height: auto;      
      order: 0;
    }
`

export const Content = styled.div`      
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  >img{        
    margin: 0 auto;
    height: 10rem;        
  }

  >h1{
    width: 25rem;
    font-size: 2.3rem;    
    color: var(--color-text-in-primary);
  }

  @media(max-width: 62rem){    
    >img{
      height: 4.2rem;      
    }

    >h1{
      width: 15rem;
      font-size: 1.1rem; 
    }
  }

` 
