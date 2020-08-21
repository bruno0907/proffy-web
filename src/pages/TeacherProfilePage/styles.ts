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
`;

export const Form = styled.form`
  width: 100%;
`;

export const FormContainer = styled.div`
  width: 100%;
  padding: 0 5rem;
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

// export const InputTimeRow = styled.div`  
//   width: 100%;
//   display: flex;
//   margin-top: 3rem;

//   > div + div {
//     margin-left: 3rem;
//   }
// `;

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


// export const ScheduleItemRemoveButton = styled.button`
//   padding: 0.2rem 2rem;
//   background: var(--color-title-in-primary);
//   color: var(--color-button-delete);
//   font-family: Archivo;
//   font-size: 1.4rem;
//   font-weight: 600;
//   position: relative;
//   cursor: pointer;
//   position: absolute;
//   left: calc(100% - 40rem);
//   bottom: -10px;
// `
