import styled from 'styled-components';

import profileBackground from '../../assets/images/background-profile.svg'
import { Camera } from 'styled-icons/bootstrap'

export const HeaderWrapper = styled.div`
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
