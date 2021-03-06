import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;  
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5rem;
  padding: 3rem 5rem;
  background: var(--color-box-footer);
  border-top: solid 1px var(--color-line-in-white);
  border-radius: 0 0 0.8rem 0.8rem;

  @media(max-width: 670px){
    flex-direction: column;
    justify-content: center;    
  }
`

export const Warning = styled.div`  
  display: flex;
  width: 95rem;

  @media(max-width: 670px){
    width: 100%;
    order: 1;
    margin-top: 3rem;
  }
    
  > div {
    margin-left: 2rem;
    
    >p{
      font-size: 1.2rem;
      color: var(--color-primary);
    }

    >span{
      font-size: 1.2rem;
    }
  }
`
