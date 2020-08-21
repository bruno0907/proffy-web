import styled from "styled-components";

export const ProfilePageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Profile = styled.div`
  width: 100%;
  max-width: 80rem;
  background: var(--color-box-base);
  border-radius: 0.8rem;
  margin-top: -6rem;
  margin-bottom: 6rem;


  @media(max-width: 65rem){
      width: 90%;
    }
`;

export const Form = styled.form`
  width: 100%;
`;

export const FormContainer = styled.div`
  width: 100%;
  padding: 0 5rem;

    @media(max-width: 65rem){
      padding: 0 2rem;      
    }
`;

export const InputRow = styled.div`  
  display: flex;
  width: 100%;
  margin-top: 3rem;  

  > div + div {
    margin-left: 3rem;
  }

  @media(max-width: 790px){
    flex-direction: column;

    >div + div {
      margin-left: 0;
      margin-top: 3rem;
    }
  }
`;

export const ScheduleList = styled.ul`
  list-style: none;
`;

export const ScheduleItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: Center;
  border-bottom: solid 0.1rem var(--color-line-in-white);
  position: relative;
  padding-bottom: 3rem;

  > div + div {
    margin-left: 3rem;
  }

  @media(max-width: 790px){
    flex-direction: column;

    > div + div {
      margin-left: 0;
      margin-top: 3rem;
    }
  }
`;

export const ScheduleItemRemoveButton = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border: solid 1px var(--color-line-in-white);
  border-radius: 0.8rem;
  right: 0rem;
  top: 1.5rem;
  font-size: 1.4rem;
  font-weight: bold;
  font-family: Archivo;
  cursor: pointer;
  color: var(--color-button-delete);
  transition: opacity 0.2s;

    &:hover{
      opacity: 0.7;
    }
`
