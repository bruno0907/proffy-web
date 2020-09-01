import styled from 'styled-components'

export const InputBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;     

  &:focus-within::after {
    position: absolute;
    content: "";
    height: 0.3rem;
    width: calc(100% - 4rem);
    background: var(--color-primary);
    bottom: 0;
    left: 2rem;
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

  > input {
    width: 100%;
    margin-top: 1rem;
    padding: 2rem 3rem;
    border: solid 1px var(--color-line-in-white);
    background: var(--color-input-background);
    position: relative;
    border-radius: 0.8rem;

    &:disabled{
      filter: grayscale(80%)    
    }
  }
`;