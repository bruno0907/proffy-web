import styled from "styled-components"

export const Button = styled.div`  
  grid-area: navigation;
  justify-items: center;
  align-self: center;
  
    >img{
      cursor: pointer;
      transition: brightness 0.2s;

        &:hover{
          filter: brightness(90%)
        }
    }
`