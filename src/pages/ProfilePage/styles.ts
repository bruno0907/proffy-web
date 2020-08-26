import styled from "styled-components";

import profileBackground from '../../assets/images/background-profile.svg'
import { Camera } from 'styled-icons/bootstrap'

export const Profile = styled.div`
  width: 100%;
  max-width: 80rem;
  background: var(--color-box-base);
  border-radius: 0.8rem;
  margin-top: -6rem;
  margin-bottom: 6rem;

  @media(max-width: 65rem){
      width: 95%;
    }
`;

export const ProfileHeader = styled.div`
  width: 100%;
  height: 95rem;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--color-primary) url(${profileBackground}) no-repeat center;
  background-size: 100rem;

    @media(max-width: 50rem){
      padding: 3rem 0;
      background-size: 85rem;
    }
`

export const Avatar = styled.div`
  position: relative;
  margin-bottom: 1rem;
  object-fit: cover;

  >img{
    width: 18rem;
    height: 18rem;
    border-radius: 9rem;   
  }

  >div{    
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0.5rem;
    right: 0.5rem;
    width: 4.8rem;
    height: 4.8rem;
    background: var(--color-secundary);
    border-radius: 2.4rem;    

    >input[type=file]{
      position: absolute;
      width: 25rem;
      opacity: 0;                 
      z-index: 1;
      cursor: pointer;
    }
  }
`

export const CameraIcon = styled(Camera)`   
  width: 2.4rem;
  height: 2.4rem;

    >path{
      fill: #fff;
    }

`

export const Name = styled.h1`
    font-family: Archivo;
    font-size: 3.6rem;
    color: var(--color-line-in-white);

      @media(max-width: 50rem){
        font-size: 2.4rem;
      }
`

export const Subject = styled.span`
  font-size: 2.4rem;
  color: var(--color-line-in-white);
  font-weight: 400;
  margin-bottom: 6rem;

    @media(max-width: 50rem){
      font-size: 1.6rem;
    }
`

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

export const ScheduleContentTimeRow = styled.div`
  width: 100%;
  display: flex;
  margin-top: 3rem;

    > div + div {
        margin-left: 2rem;
      }

  @media(max-width: 50rem){
    margin-bottom: 2rem;    
  }
`

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
