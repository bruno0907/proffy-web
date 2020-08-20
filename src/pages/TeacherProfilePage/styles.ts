import styled from "styled-components";

import profileBackground from '../../assets/images/background-profile.svg'

import { Camera } from 'styled-icons/bootstrap'

export const TeacherProfilePageWrapper = styled.div`
  width: 100%;
  height: 100%;  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export const Header = styled.div`
  width: 100%;
  height: 95rem;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--color-primary) url(${profileBackground}) no-repeat center;
  background-size: 100rem;
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

export const Teacher = styled.h1`
    font-family: Archivo;
    font-size: 3.6rem;
    color: var(--color-line-in-white);
`

export const Subject = styled.span`
  font-size: 2.4rem;
  color: var(--color-line-in-white);
  font-weight: 400;
  margin-bottom: 6rem;
`

export const TeacherProfile = styled.div`
  width: 100%;
  max-width: 80rem;    
  background: var(--color-box-base);
  border-radius: 0.8rem;
  margin-top: -6rem;
  margin-bottom: 6rem;  
`

export const Form = styled.form`
  width: 100%;
`

export const FormContainer = styled.div`
  width: 100%;
  padding: 0 5rem;
`

export const InputRow = styled.div`
  width: 100%;
  display: flex;
  margin: 0 0 4rem;

    >div + div{
      margin-left: 3rem;      
    }
`

export const ScheduleList = styled.ul`
 list-style: none;
`

export const ScheduleItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: Center;
  border-bottom: solid 0.1rem var(--color-line-in-white);
  position: relative;

  > div {
    margin: 2rem 0 3rem;
  }
`

export const ScheduleItemRemoveButton = styled.button`
  padding: 0.2rem 2rem;
  background: var(--color-title-in-primary);
  color: var(--color-button-delete);
  font-family: Archivo;
  font-size: 1.4rem;
  font-weight: 600;
  position: relative;
  cursor: pointer;  
  position: absolute;
  left: calc(100% - 36.9rem);
  bottom: -10px;


    /* ::before{
      content: '';
      position: absolute;
      width: 25rem;
      height: 0.1rem;
      background: var(--color-line-in-white);
      top: calc(100% - 60%);
      left: 8rem;
    }

    ::after{
      content: '';
      position: absolute;
      width: 25rem;
      height: 0.1rem;
      background: var(--color-line-in-white);
      top: calc(100% - 60%);
      right: 8rem;
    } */
`

