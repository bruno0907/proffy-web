import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --color-background: #F0F0F7;
    --color-primary-lighter: #9871F5;
    --color-primary-light: #916BEA;
    --color-primary: #8257E5;
    --color-primary-dark: #774DD6;
    --color-primary-darker: #6842C2;
    --color-secundary: #04D361;
    --color-secundary-dark: #04BF58;
    --color-title-in-primary: #FFFFFF;
    --color-text-in-primary: #D4C2FF;
    --color-text-title: #32264D;
    --color-text-complement: #9C98A6;
    --color-text-base: #6A6180;
    --color-line-in-white: #E6E6F0;
    --color-input-background: #F8F8FC;
    --color-button-text: #FFFFFF;
    --color-button-disabled: #DCDCE5;
    --color-box-base: #FFFFFF;
    --color-box-footer: #FAFAFC;
    --color-button-delete: #E33D3D;
  
    font-size: 60%;
  }

  *{
    margin: 0;
    padding: 0;
    border: 0;      
    outline: 0;
    box-sizing: border-box;
  }

  body, #root, html{
    background-color: var(--color-background);
    max-height: 100vh;
    max-width: 100vw;
    height: 100%;
    width: 100%;
  }

  body, 
  input, 
  button, 
  textarea,
  select{
    font-size: 1.6rem;
    font-family: Poppins;
    font-weight: 500;   
    color: var(--color-text-base);
  }

  input,
  select,
  textarea{
    @media(max-width: 50rem){
        font-size: 1.4rem;
      }
  }

  button{
    cursor: pointer;
  }

  @media(min-wdith: 65rem){
    :root{
      font-size: 62.5%;
    }
  }
`

export default GlobalStyle