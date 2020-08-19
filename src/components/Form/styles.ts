import styled from 'styled-components';

export const FormContainer = styled.form`  
  width: 100%;

    >legend{
      width: 100%;
      margin-bottom: 3rem;

      >div{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        >h2{
          width: 32rem;
          font-size: 3.5rem;
          font-weight: 600; 
          line-height: 150%;         
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
      width: 25rem;
      font-size: 1.6rem;
      color: var(--color-text-base);      
      text-align: left;
      margin: 2rem 0;
    }
  }

`

