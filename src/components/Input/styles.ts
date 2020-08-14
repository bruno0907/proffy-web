import styled, { css } from 'styled-components'

import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    first?: boolean;
    last?:boolean;    

}

export const InputBlock = styled.div`
    position: relative;
    &:focus-within::after {
        position: absolute;
        content: '';
        height: calc(100% - 2rem);
        width: 0.3rem;
        border-radius: 0.8rem;
        background: var(--color-primary);
        top: calc(100% - 5.5rem);
        left: 0;
    }

    >label{
        position: absolute;
        top: 0;
        left: 0;
        font-size: 1.4rem;
        color: var(--color-text-complement);
        transform: translate(2rem, 2.2rem);
        transition: transform .2s;
    }

    >img{
        position: absolute;
        right: 2rem;
        top: calc(100% - 2.8em);
        cursor: pointer;
        transition: filter 0.2s;

        &:hover{
          filter: brightness(70%);
        }

        &:hover + input{
            background: red;
        }
    }
`
 
export const InputField = styled.input<InputProps>`
    padding: 3rem 2rem 1rem 2rem;  
    border: solid 1px var(--color-line-in-white);
    background: var(--color-input-background);
    position: relative;

    ${ (props: InputProps) => props.first && css`
        border-radius: 0.8rem 0.8rem 0 0;
    `}
    ${ (props: InputProps) => props.last && css`
        border-radius: 0 0 0.8rem 0.8rem;
    `}
    
    &::placeholder{
        opacity: 0;
    }         

    &:focus + label{
        transform: translate(2rem, 0.9rem);
        font-size: 1.2rem;
    }
    
    &:not(:placeholder-shown) + label {
        transform: translate(2rem, 0.9rem);
        font-size: 1.2rem;
    }

    &:hover + label{
        filter: brightness(70%);
    }
`