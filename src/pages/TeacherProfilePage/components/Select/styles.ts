import styled from 'styled-components'

export const SelectBlock = styled.div`
    position: relative; 
    width: 100%;
    
    &:focus-within::after {
        position: absolute;
        content: '';
        height: 0.4rem;
        width: calc(100% - 4rem);        
        background: var(--color-primary);
        bottom: calc(100% - 10.2rem);
        left: 18px;
    }

    >label{
        font-size: 1.4rem;
        color: var(--color-text-complement);
    }    
`
 
export const SelectField = styled.select`
    margin-top: 1rem;
    padding: 2.4rem 3rem;  
    border: solid 1px var(--color-line-in-white);
    background: var(--color-input-background);
    position: relative;    
    width: 100%;
    border-radius: 0.8rem;    
    
    &::placeholder{
        opacity: 1;
    }        

`
