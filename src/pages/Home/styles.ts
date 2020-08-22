import styled from 'styled-components';

import { Link } from 'react-router-dom'

export const HomeWrapper = styled.div`
    width: 100vw;
    min-width: 40rem;
    height: 100vh;
    color: var(--color-text-base);
    background: var(--color-background);
    position: relative;
    z-index: 0;
    display: flex;
    align-items: flex-start;
    justify-content: center; 
    overflow-x: hidden;   

      &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 55rem;        
        width: 100%;
        color: var(--color-text-in-primary);
        background: var(--color-primary);
        z-index: -1
        
      }
    
    @media(max-width: 65rem){
      align-items: flex-start;
      justify-content: flex-start;

      &::before{        
        height: 38rem;        
    }
  }
`

export const HomeGrid = styled.div`   
  width: 100%;  
  max-width: 125rem;
  min-height: 75rem;
  padding: 0 5rem;
  display: grid;      
  grid-template-rows: 20rem 1fr 25rem;
  grid-template-columns: repeat(6, 1fr);    
  grid-template-areas:
    'profile-header profile-header profile-header profile-header profile-header profile-header '
    'logo logo logo hero hero hero'
    'welcome connections connections buttons buttons buttons';  

  @media(max-width: 65rem){
    padding: 2rem;
    grid-template-rows: 7rem 27rem 17rem 1fr 17rem;
    grid-template-columns: 1fr;    
    grid-template-areas:
      'profile-header'      
      'hero'
      'welcome'
      'buttons'
      'connections';  
  }
`

export const LogoAside = styled.div`
  grid-area: logo;
  display: block;
  justify-self: flex-start;
  align-self: center;  

    & img{
      height: 13rem;
    }

    & h1{
    width: 350px;
    text-align: initial;
    font-size: 3.2rem;
    font-weight: 400;
    color: var(--color-text-in-primary);    
  }

  @media(max-width: 65rem){
    display: none;
    color: var(--color-text-in-primary);      
  }
`

export const HeroAside = styled.img`
  grid-area: hero;    
  justify-self: flex-end;
  align-self: center;
  width: 100%;
  max-width: 55rem;

  @media(max-width: 65rem){
    width: 100%;
    max-width: 40rem;
    justify-self: center;
  }
`

export const Welcome = styled.span`
  grid-area: welcome;
  text-align: left;
  margin-top: 10rem;  

  @media(max-width: 65rem){
    align-self: center;
    justify-self: flex-start;
    margin-top: 0;
    font-size: 2.2rem;
  }
`

export const Connections = styled.span`
  grid-area: connections;
  font-size: 1.4rem;
  display: flex;  
  margin-right: 1.5rem;
  align-items: center;
  justify-content: center;
  justify-content: flex-end;

  >img{
    margin-left: 0.8rem;
  }

  @media(max-width: 65rem){   
    justify-self: flex-start; 
  }
`

export const Buttons = styled.div`
  grid-area: buttons;
  width: 100%;  
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: flex-end;  

  & a{
      flex-shrink: 0;
      width: 15rem;    
      height: 16.5rem;      
      border-radius: 0.8rem;
      font: 700 2rem Archivo;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-evenly;
      padding: 2rem;
      text-decoration: none;
      color: var(--color-button-text);
      transition: background-color .2s;  
      cursor: pointer;
      
      &:first-child{
          margin-right: 1.6rem;        
        }

      & img{
        width: 4rem;
      }

      @media(min-width: 42rem){
        width: 25rem;
        height: 8rem;
        font-size: 2rem;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
      }
    }

    @media(min-width: 65rem){
      justify-content: center; 
      align-items: center;
      align-self: center;
    }
`

export const Study = styled(Link)`
  background: var(--color-primary-lighter);

    &:hover{
      background: var(--color-primary-light);
    }


`

export const GiveClass = styled(Link)`
  background: var(--color-secundary);


    &:hover{
      background: var(--color-secundary-dark);
    }

    &img{
      width: 4rem;
    }

`
