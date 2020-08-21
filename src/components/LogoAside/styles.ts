import styled from "styled-components";

import background from '../../assets/images/background-half.svg'
import backgroundMobile from '../../assets/images/background-mobile-half.svg'

export const Container = styled.div`  
  width: 55vw;  
  height: 100vh;  
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-primary) url(${background}) center no-repeat;      
  background-size: 45rem;
  
    @media(max-width: 65rem){      
      background: var(--color-primary) url(${backgroundMobile}) center no-repeat;
      background-size: 19rem;
      width: 100vw;     
      height: 30%;        
      order: 0;
    }

`

export const Content = styled.div`      
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

  @media(max-width: 65rem){    
    >img{
      height: 4.2rem;      
    }

    >h1{
      width: 15rem;
      font-size: 1.1rem; 
    }
  }

` 
