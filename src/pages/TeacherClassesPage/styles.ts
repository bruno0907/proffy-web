import styled from "styled-components";

interface AvatarProps{
  img: string;
}

export const Profile = styled.div`
  width: 95%;
  max-width: 80rem;
  background: var(--color-box-base);
  border-radius: 0.8rem;
  margin-top: -4rem;
  margin-bottom: 6rem;

    @media(min-width: 50rem){
      width: 100%;
      margin-top: -6rem;
    }
`;

export const UserInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;          

  @media(min-width: 50rem){
    flex-direction: row;
    align-items: center;
    justify-content: space-between;  
  }

`

export const AvatarSection = styled.div`  
  display: flex;
  align-items: center;
  justify-content: flex-start;          
`

export const Avatar = styled.div<AvatarProps>`
  width: 9rem;
  height: 9rem;
  border-radius: 4.5rem;
  margin-right: 2.5rem;
  background: url(${props => props.img});
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`

export const UserName = styled.h1`
  font-family: Archivo;
  font-size: 2rem;  
  font-weight: bold;
  color: var(--color-text-title);  
`

export const Form = styled.form`
  width: 100%;  
`;

export const FormContainer = styled.div`
  width: 100%;
  padding: 0 2rem;  

    @media(min-width: 50rem){
      padding: 2rem 5rem;
    }
`;

export const FormSection = styled.fieldset`
  width: 100%;  

  >div{    
    margin-bottom: 2rem;
    >div + div{
      margin-top: 2rem;
    }

    @media(min-width: 50rem){
      display: flex;
      margin-bottom: 5rem;
      
      >div + div {
        margin-left: 3rem;
        margin-top: 0;
      }
    }
  }

  >legend{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 2.5rem;
        
    >h2{      
      margin: 0;
      font-size: 2.4rem;
      font-weight: 600; 
      line-height: 150%;         
      color: var(--color-text-title);                  
    }

    >p{
      color: var(--color-primary);
      font-size: 1.6rem;
      font-family: Archivo;
      font-weight: bold;
      text-decoration: none;
      transition: color 0.5s;
      cursor: pointer;           

        &:hover{
          color: var(--color-primary-darker);
        }

        >span{
          display: none;
          @media(min-width: 50rem){
            display: initial;
          }
      }
    }
  }   
`

export const Divider = styled.hr`
  margin: 1rem 0 3rem;
  width: 100%; 
  height: 1px; 
  background: var(--color-line-in-white);  

    @media(min-width: 50rem){
      margin: 3rem 0;
    }

  >p{
    width: 25rem;
    font-size: 1.6rem;
    color: var(--color-text-base);      
    text-align: left;
    margin: 2rem 0;
  }  
`

export const ScheduleList = styled.ul`  
  list-style: none;  

  >li{
    border-bottom: solid 0.1rem var(--color-line-in-white);    
    position: relative;
    padding-bottom: 3rem;
    margin: 5rem 0;
    display: grid;   
    align-items: flex-end;
    justify-content: center;     
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    grid-template-areas:
      'week_day week_day'
      'from to';

      @media(min-width: 50rem){        
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 2fr 2fr;            
        grid-template-areas:
          'week_day week_day from to';
      }
  }
`;

export const WhatsApp = styled.div`
  width: 100%;

  @media(min-width: 50rem){
    width: 25rem;  
  }
`
export const Cost = styled.div`
  @media(min-width: 50rem){
    width: 35rem;  
  }
`
export const WeekDay = styled.div`
  width: 100%;
  grid-area: week_day;
`
export const From = styled.div`
  width: 100%;
  grid-area: from;
`
export const To = styled.div`
  width: 100%;
  grid-area: to;
`

export const RemoveButton = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border: solid 1px var(--color-line-in-white);
  border-radius: 0.8rem;
  right: 2rem;
  top: -1.5rem;
  font-size: 1.4rem;
  font-weight: bold;
  font-family: Archivo;
  cursor: pointer;
  color: var(--color-button-delete);
  transition: opacity 0.2s;

    &:hover{
      opacity: 0.7;
    }

    @media(min-width: 50rem){
      right: 0;
    }
`

