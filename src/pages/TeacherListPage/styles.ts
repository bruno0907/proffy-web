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
  max-width: 80rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -6rem;

    > div + div {
        margin-left: 2rem;
      }


  @media(max-width: 50rem){
    flex-direction: column;
    margin-top: -8rem;
    padding-bottom: 10rem;
    max-width: 100%; 
    padding: 0 2rem;
    background: var(--color-primary);       

      > div + div {
        margin-left: 0rem;
        margin-bottom: 8rem
      }
  }
`

export const InputRow = styled.div`
  width: 100%;
  display: flex;

    > div + div {
        margin-left: 2rem;
      }

  @media(max-width: 50rem){
    margin-bottom: 2rem;    
  }
`