import styled from "styled-components";

import mobileBackground from '../../assets/images/profile-background-mobile.svg'
import desktopBackground from '../../assets/images/profile-background-desktop.svg'
import { Camera } from 'styled-icons/bootstrap'

interface AvatarProps{
  img: string;
}

export const Header = styled.div`
  width: 100%;  
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--color-primary) url(${mobileBackground}) no-repeat;
  background-position: center 2rem;
  background-size: 30rem;  

    @media(min-width: 50rem){
      background: var(--color-primary) url(${desktopBackground}) no-repeat;
      background-position: center 2rem;
      background-size: 110rem;  
    }
  
`

export const Avatar = styled.div<AvatarProps>`
  position: relative;    
  width: 14rem;
  height: 14rem;
  margin-bottom: 3rem;
  border-radius: 9rem;      
  background: url(${props => props.img});  
  background-size: cover;
  background-position: center;
  flex-shrink: 0;

    @media(min-width: 50rem){
      width: 18rem;
      height: 18rem;
    }

  >div{    
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: -0.5rem;
    right: -0.5rem;
    width: 4.8rem;
    height: 4.8rem;
    background: var(--color-secundary);
    border-radius: 2.4rem;   

      @media(min-width: 50rem){
        bottom: 0.5rem;
        right: 0.5rem;
      } 

    >input[type=file]{
      position: absolute;
      width: 15rem;
      height: 15rem;
      bottom: -2px;
      right: 0px;           
      opacity: 0;                 
      z-index: 1;
      cursor: pointer;
      

        @media(min-width: 50rem){
          width: 18rem;
          height: 18rem;
          bottom: -5px;
          right: -5px;   
        }
    }
  }
`

export const CameraIcon = styled(Camera)`     
  height: 2.4rem;
  margin-left: 0.1rem;

    >path{
      fill: #fff;
    }

`

export const Name = styled.h1`
    font-family: Archivo;
    font-size: 3.6rem;
    color: var(--color-line-in-white);
    margin-bottom: 6rem;

      @media(max-width: 65rem){
        font-size: 2.4rem;
      }
`

export const Profile = styled.div`
  width: 95%;
  max-width: 80rem;
  background: var(--color-box-base);
  border-radius: 0.8rem;
  margin-top: -4rem;
  margin-bottom: 6rem;

    @media(min-width: 50rem){
      width: 100%;
      margin-top: -6rem;
    }
`;

export const Form = styled.form`
  width: 100%;  
`;

export const FormContainer = styled.div`
  width: 100%;
  padding: 0 2rem;  

    @media(min-width: 50rem){
      padding: 2rem 5rem;
    }
`;

export const FormSection = styled.fieldset`
  width: 100%;  

  >div{    
    margin-bottom: 2rem;
    >div + div{
      margin-top: 2rem;
    }

    @media(min-width: 50rem){
      display: flex;
      margin-bottom: 3rem;
      >div + div {
        margin-left: 3rem;
        margin-top: 0;
      }
    }
  }

  >legend{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 2.5rem;
        
    >h2{      
      margin: 0;
      font-size: 2.4rem;
      font-weight: 600; 
      line-height: 150%;         
      color: var(--color-text-title);                  
    }

    >a{
      color: var(--color-primary);
      font-size: 1.6rem;
      font-family: Archivo;
      font-weight: bold;
      text-decoration: none;
      transition: color 0.5s;

        &:hover{
          color: var(--color-primary-darker);
        }
    }
  }   
`

export const Divider = styled.hr`
  margin: 1rem 0 3rem;
  width: 100%; 
  height: 1px; 
  background: var(--color-line-in-white);  

    @media(min-width: 50rem){
      margin: 3rem 0;
    }

  >p{
    width: 25rem;
    font-size: 1.6rem;
    color: var(--color-text-base);      
    text-align: left;
    margin: 2rem 0;
  }  
`

export const ScheduleList = styled.ul`  
  list-style: none; 
`

export const WhatsApp = styled.div`
  @media(min-width: 50rem){
    width: 35rem;  
  }
`
