import styled from "styled-components";

import background from '../../assets/images/background-half.svg'
import backgroundMobile from '../../assets/images/background-mobile-half.svg'

export const Container = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--color-primary) url(${background}) center no-repeat;
  
    @media(max-width: 970px){
      background: var(--color-primary) url(${backgroundMobile}) center no-repeat;
      width: 100%;
      height: 35%
    }
`

export const Content = styled.div`  

  >img{        
    height: 10rem;        
  }

  >h1{
    width: 20rem;
    font-size: 1.2rem;    
    color: var(--color-text-in-primary);
  }

  @media(max-width: 970px){    
    >img{
      height: 6rem;      
    }

    >h1{
      width: 15rem;
    }
  }

` 
