import styled from "styled-components";

export const TeacherList = styled.div`
  width: 100%;
  max-width: 80rem;
  margin-top: 2rem;
  margin-bottom: 4rem;

  @media(max-width: 50rem){
      width: 95%;
      margin-top: -6rem;
    }
`

export const FilterBox = styled.div`
  width: 100%;  
  display: flex;
  flex-direction: column;      
  padding: 0 2rem;
  margin-top: -8rem;
  padding-bottom: 6rem;
  background: var(--color-primary);       

    div + div {      
      margin-top: 1rem;
    }

    div + button {
      margin: 2rem 0;
    }

  @media(min-width: 50rem){
    max-width: 80rem;
    background: transparent;
    margin-top: -6rem;    
    padding: 0;
    flex-direction: row;
    align-items: flex-end;

      div + div {
        margin-top: 0;
        margin-left: 1rem;
      }

      div + button{
        width: 60rem;
        margin-left: 1rem;        
        margin-bottom: 0.2rem;
      }
  }
`

export const FilterToast = styled.p`
  margin-top: 10rem;
  width: 25rem;
  text-align: center;
  color: var(--color-text-complement);
`