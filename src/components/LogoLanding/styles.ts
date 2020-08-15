import styled from 'styled-components';

export const LogoWrapper = styled.div`
  grid-area: logo;
  display: none;
  color: var(--color-text-in-primary);

  @media(min-width: 62rem){
      display: block;
      justify-self: center;
      align-self: center;
      margin-bottom: 6rem;

      & img{
        height: 12rem;
      }

      & h1{
      width: 350px;
      text-align: initial;
      font-size: 3.2rem;
    }
  }
`
