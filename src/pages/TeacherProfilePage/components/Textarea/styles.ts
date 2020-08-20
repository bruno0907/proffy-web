import styled from 'styled-components'

export const InputBlock = styled.div`
    width: 100%;
    position: relative;     
    
    &:focus-within::after {
        position: absolute;
        content: '';
        height: 0.3rem; 
        width: calc(100% - 4rem);        
        background: var(--color-primary);
        bottom: 0.6rem;
        left: 2rem;
    }

    >label{
        font-size: 1.4rem;
        color: var(--color-text-complement);        
    }
`
 
export const TextAreaField = styled.textarea`
    margin-top: 1rem;
    padding: 2rem 3rem;  
    border: solid 1px var(--color-line-in-white);
    background: var(--color-input-background);
    position: relative;    
    width: 100%;
    height: 25rem;
    border-radius: 0.8rem;
    resize: vertical;
    
    &::placeholder{
        opacity: 0;
    }     
`