import styled from 'styled-components'

export const SelectBlock = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;    
    width: 100%;    
    
    &:focus-within::after {
        position: absolute;
        content: '';
        height: 0.32rem;
        width: calc(100% - 4rem);        
        background: var(--color-primary);
        bottom: 0rem;
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

            -webkit-transform: translateY(4.6rem) rotate(135deg);
            -ms-transform: translateY(4.6rem) rotate(135deg);            
            transform: translateY(4.6rem) rotate(135deg);
            
            right: 15px;
            z-index: 1;
            transition: transform 0.1s;
        }

    > label {
        font-size: 1.4rem;
        color: var(--color-text-complement);

        >span{
            margin-left: 1.5rem;
            font-size: 1.2rem;
        }

        @media(max-width: 50rem){
            font-size: 1.2rem;

            >span{
                font-size: 1.1rem;
            }
        }
    }

    >select{    
        width: 100%;
        margin-top: 0.5rem;
        padding: 1.8rem 2.5rem;  
        border: solid 1px var(--color-line-in-white);
        background: var(--color-input-background);
        position: relative;        
        border-radius: 0.8rem;  

        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;     
    }
`
