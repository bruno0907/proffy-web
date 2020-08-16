import styled from 'styled-components'

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;  
  align-items: center;
  justify-content: center;    

    @media(max-width: 62rem){
      flex-direction: column;
    }
`

export const LogoSide = styled.div`
  width: 55vw;  
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
    @media(max-width: 62rem){      
      width: 100vw;     
      height: 22.5vh; 
      min-height: auto;      
      order: 0;
    }
`

export const FormWrapper = styled.div`  
  grid-area: form;
  display: flex;
  align-items: center;
  justify-content: center;
`