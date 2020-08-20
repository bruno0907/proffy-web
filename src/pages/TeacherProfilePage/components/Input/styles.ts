import styled from 'styled-components'

export const InputBlock = styled.div`
    position: relative; 
    width: 100%;
    
    &:focus-within::after {
        position: absolute;
        content: '';
        height: 0.3rem; 
        width: calc(100% - 4rem);        
        background: var(--color-primary);
        bottom: 0;
        left: 2rem;
    }

    >label{
        font-size: 1.4rem;
        color: var(--color-text-complement);        
    }

`
 
export const InputField = styled.input`
    margin-top: 1rem;
    padding: 2rem 3rem;  
    border: solid 1px var(--color-line-in-white);
    background: var(--color-input-background);
    position: relative;    
    width: 100%;
    border-radius: 0.8rem;
    
    &::placeholder{
        opacity: 0;
    }         

`
