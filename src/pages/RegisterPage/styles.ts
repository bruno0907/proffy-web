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
