import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 60rem);    
  height: 100vh;  
  background: var(--color-background);

    @media(max-width: 62rem){
      width: 100%;  
      height: auto;    
      order: 1;
    }

`

export const BackButton = styled.div`  
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

export const Form = styled.div`    
  height: 100%;
  width: 100%;
  max-width: 36rem;
  margin: auto;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 5rem 1fr 10rem;
  grid-template-areas: 
    'navigation'
    'form'
    'signUp';
  padding: 3rem 0;

  >form{
    grid-area: form;
    /* padding: 2rem 0; */    
    width: 100%;
    justify-items: center;
    align-self: center;

    >legend{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      /* margin-bottom: 4rem; */
      /* padding: 0 0.8rem; */

      >div{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        >h2{
          width: 32rem;
          font-size: 3.6rem;
          font-weight: 600;
          margin-bottom: 2rem;
          color: var(--color-text-title);

          @media(max-width: 62rem){
            font-size: 2.4rem;
            line-height: 3.4rem;
            margin: 1rem 0 2rem 0;          
          }
        }

        >a{
            display: none;        
        }
      }   

    >p{
      font-size: 1.6rem;
      color: var(--color-text-base);
      margin-bottom: 4rem;
      text-align: left;
    }
  }
}

`