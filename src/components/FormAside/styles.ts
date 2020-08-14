import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  height: 100vh;  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

    @media(max-width: 970px){
      width: 100%;
      height: 65%;
    }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  >legend{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 5rem;
    
    >h2{
      font-size: 3.6rem;
      font-weight: 600;
      color: var(--color-text-title);
      margin-bottom: 2.2rem;
    }

    >p{
      font-size: 1.6rem;
      color: var(--color-text-base);
      width: 22rem;
    }
  }

`
