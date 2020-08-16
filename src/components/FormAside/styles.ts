import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 55vw);      
  height: 100vh;  
  padding: 2rem;
  background: var(--color-background);  

    @media(max-width: 62rem){
      width: 100vw;  
      height: auto;    
      order: 1;
    }
`

export const Grid = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 40rem;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 5rem 1fr 10rem;
  grid-template-areas: 
    'navigation'
    'form'
    'signUp';  
`