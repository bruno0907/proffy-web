import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;    
` 
export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 80rem;  
  display: flex;
  align-items: flex-end;
  justify-content: space-between;  
  margin: 6rem 0 14rem;

    @media(max-width: 65rem){
      width: 90%;
    }
`

export const HeaderAside = styled.div`    
    display: flex;
    flex-direction: column;            

      >h1{
        max-width: 43rem;
        font: 700 3.6rem Archivo;
        line-height: 4.2rem;
        color: var(--color-title-in-primary);
      }

      >p{
        max-width: 30rem;
        font-size: 1.6rem;
        line-height: 2.6rem;
        color: var(--color-text-in-primary);
        margin-top: 2.4rem;

        @media(max-width: 40rem){
          max-width: 38rem;
        }
      }
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;  

      >img{
        width: 4rem;
        height: 4rem;
        margin-right: 2rem;
      }

      >span{        
        font-size: 1.2rem;
        color: var(--color-text-in-primary);
      }
    @media(max-width: 40rem){
      display: none;
    }
`