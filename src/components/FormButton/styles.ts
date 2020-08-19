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
  margin: 2rem 0;
  transition: background 0.2s;

  ${ (props) => props.disabled ? css`
    background: var(--color-button-disabled);
    color: var(--color-text-base);
  `
  : css`
    background: var(--color-secundary);
    color: var(--color-button-text);
      &:hover{
        background: var(--color-secundary-dark);
      }
  `}

  ${ (props) => props.loading && css``}
`;