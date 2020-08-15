import styled from 'styled-components';

import { Link } from 'react-router-dom'

export const RememberWrapper = styled.div`
  display: flex;
  align-items: center;  
  margin-top: 2rem;

    > label{
      font-size: 1.2rem;
      color: var(--color-text-complement);
    }    
`;

export const Checkbox = styled.div`
  position: relative;
  cursor: pointer;
  font-size: 2rem;
  -moz-user-select: none;
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 1rem;

    > input{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    cursor: pointer;

    :checked ~ span{
      background: var(--color-secundary);
    }
  }

  > span:after{
      content: '';
      position: absolute;
      display: none;
    }

    > input:checked ~ span:after{
        display: block;
        left: 0.7rem;
        top: 0.3rem;
        width: 5px;
        height: 10px;
        border: solid var(--color-background);
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }

  > span{
      position: absolute;
      top: 0rem;
      left: 0;
      height: 100%;
      width: 100%;
      background: var(--color-input-background);
      border: solid 1px var(--color-line-in-white);
      border-radius: 0.8rem;
      transition: background 0.2s;
    }
`

export const ForgotPassword = styled(Link)`
  margin-left: auto;
  font-size: 1.2rem;
  color: var(--color-text-complement);
  text-decoration: none;
  transition: filter 0.2s;

    &:hover{
      filter: brightness(70%);
    }
`
