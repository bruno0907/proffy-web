import styled, { css } from 'styled-components'

import { SelectHTMLAttributes } from 'react'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    first?: boolean;
    last?:boolean;    
    only?: boolean;
}

export const SelectBlock = styled.div`
    position: relative; 
    width: 100%;
    
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
        top: 0.3rem;
        left: 0;
        font-size: 1.4rem;
        color: var(--color-text-complement);
        transform: translate(2rem, 2.2rem);
        transition: transform .2s;
    }    
`
 
export const SelectField = styled.select<SelectProps>`
    padding: 3rem 2rem 1rem 2rem;  
    border: solid 1px var(--color-line-in-white);
    background: var(--color-input-background);
    position: relative;    
    width: 100%;

    ${ (props: SelectProps) => props.first && css`
        border-radius: 0.8rem 0.8rem 0 0;
    `}

    ${ (props: SelectProps) => props.last && css`
        border-radius: 0 0 0.8rem 0.8rem;        
    `}

    ${ (props: SelectProps) => props.only && css`
        border-radius: 0.8rem;
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
