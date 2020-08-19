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
  max-width: 75rem;    
  background: var(--color-box-base);
  border-radius: 0.8rem;
  margin-top: -6rem;
  margin-bottom: 6rem;  
`

export const Form = styled.form`
  width: 100%;
`

export const Container = styled.div`
  width: 100%;
  padding: 0 5rem;
`

export const SectionTitle = styled.h2`
  width: 100%;
  margin-top: 5rem;
  font-size: 2.5rem;
  color: var(--color-text-in-title);
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const AddClass = styled.span`
  
  font-family: Archivo;
  color: var(--color-primary-dark);
  font-size: 1.6rem;
  cursor: pointer;

    :hover{
      color: var(--color-primary-darker);
    }
`

export const Divider = styled.hr`
  margin: 3rem 0;
  width: 100%; 
  height: 1px; 
  background: var(--color-line-in-white);  
`

export const InputRow = styled.div`
  width: 100%;
  display: flex;
  margin: 0 0 3rem;

    >div + div{
      margin-left: 3rem;      
    }
`

export const AvailabilityList = styled.ul`

`

export const Footer = styled.div`
  width: 100%;  
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5rem;
  padding: 3rem 5rem;
  background: var(--color-box-footer);
  border-top: solid 1px var(--color-line-in-white);
  border-radius: 0 0 0.8rem 0.8rem;
`

export const Warning = styled.div`  
  display: flex;
  width: 95rem;
    
  > div {
    margin-left: 2rem;
    /* margin-right: 3rem; */
    >p{
      font-size: 1.2rem;
      color: var(--color-primary);
    }

    >span{
      font-size: 1.2rem;
    }
  }
`