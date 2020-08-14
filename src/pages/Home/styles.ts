import styled from 'styled-components';

import { Link } from 'react-router-dom'

export const LoginWrapper = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;  

    color: var(--color-text-base);
    background: var(--color-background);
    position: relative;
    z-index: 0;

      &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 380px;
        width: 100%;
        color: var(--color-text-in-primary);
        background: var(--color-primary);
        z-index: -1
      }
    
    @media(min-width: 970px){
      flex-direction: flex-start;

      &::before{
        height: 70vh;
        min-height: 400px;
    }
  }
`

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5rem;

  @media(min-width: 970px){
    max-width: 1100px;
    display: grid;
    grid-template-rows: 70px 1fr 160px;
    grid-template-columns: repeat(6, 1fr);    
    grid-template-areas:
      'profile-header profile-header profile-header profile-header profile-header profile-header '
      'logo logo logo hero hero hero'
      'welcome connections connections buttons buttons buttons'
  }
`

export const HeroSide = styled.img`
  grid-area: hero;
  width: 100%;
  max-height: 24rem;
  min-height: 25rem;

  @media(min-width: 970px){
    justify-self: center;
    align-self: center;
    margin: 0;
    margin-bottom: 6rem;
  }
`

export const Welcome = styled.span`
  grid-area: welcome;
  text-align: left;
  margin-top: 7rem;

  @media(min-width: 970px){
    align-self: center;
    justify-self: center;
    margin-top: 0;
  }
`

export const Connections = styled.span`
  grid-area: connections;
  font-size: 1.4rem;
  display: flex;  
  margin-right: 1.5rem;
  align-items: center;
  justify-content: center;

  &img{
    margin-left: 0.8rem;
  }

  @media(min-width: 970px){    
    justify-content: flex-end;
  }
`

export const Buttons = styled.div`
  grid-area: buttons;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2.5rem 0;

  & a{
      width: 15rem;    
      height: 16.5rem;      
      border-radius: 0.8rem;
      font: 700 2rem Archivo;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
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

      @media(min-width: 970px){
        width: 30rem;
        height: 8rem;
        font-size: 2rem;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
    }

    @media(min-width: 970px){
      justify-content: center; 
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
