import styled from 'styled-components'

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;  
  align-items: center;
  justify-content: center;    

    @media(max-width: 65rem){
      flex-direction: column;
    }
`

export const FormWrapper = styled.div`  
  grid-area: form;
  display: flex;
  align-items: center;
  justify-content: center;
`