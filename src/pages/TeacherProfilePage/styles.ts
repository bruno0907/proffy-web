import styled from "styled-components";

import profileBackground from '../../assets/images/background-profile.svg'

import { Camera } from 'styled-icons/bootstrap'

export const TeacherProfilePageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`
export const Header = styled.div`
  width: 100%;
  height: 95rem;
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
  max-width: 65rem;
  height: 100rem;
  background: var(--color-box-base);
  border-radius: 0.8rem;
  margin-top: -6rem;
`