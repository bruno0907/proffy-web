import styled, { css } from 'styled-components';

interface ButtonProps{
  primary?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

export const Button = styled.button<ButtonProps>`
  width: 100%;
  height: 5.6rem;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  font-family: Archivo;
  font-weight: 700;
  margin-top: 2rem;
  transition: background 0.2s;

    ${ (props) => props.primary && css`
      background: var(--color-secundary);
      color: var(--color-button-text);

        &:hover{
          background: var(--color-secundary-dark);          
        }        
    `}

    ${ (props) => props.secondary && css`
      background: var(--color-primary);
      color: var(--color-button-text);

        &:hover{
          background: var(--color-primary-dark)        ;
        }
    `}

    ${ (props) => props.disabled && css`
      background: var(--color-button-disabled);
      color: var(--color-text-base);
    `}

    ${ (props) => props.loading && css``}
`;
