import styled from 'styled-components'

export const SelectBlock = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;    
    width: 100%;    
    
    &:focus-within::after {
        position: absolute;
        content: '';
        height: 0.3rem;
        width: calc(100% - 4rem);        
        background: var(--color-primary);
        bottom: calc(100% - 9.5rem);
        left: 18px;
    }

        &::before {
            position: absolute;
            content: '';
            width: 0.8rem;
            height: 0.8rem;
            border: solid 2px var(--color-text-complement);
            border-radius: 2px;
            border-left: none;
            border-bottom: none;
            top: 5.5rem;
            right: 1.5rem;
            -webkit-transform: rotate(50deg);
            -ms-transform: rotate(50deg);
            transform: rotate(135deg);
            z-index: 1;
            transition: transform 0.1s;
        }

    >label{
        font-size: 1.4rem;
        color: var(--color-text-complement);
    }    
    >select{    
        width: 100%;
        margin-top: 1rem;
        padding: 2rem 3rem;  
        border: solid 1px var(--color-line-in-white);
        background: var(--color-input-background);
        position: relative;        
        border-radius: 0.8rem;  

        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;     
    }
`
