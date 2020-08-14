import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--color-background);
  `

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;    
  align-items: center;
  justify-content: center;  

    @media(max-width: 970px){
      flex-direction: column;
    }
`

export const Form = styled.form``

export const SignUp = styled(Link)``
