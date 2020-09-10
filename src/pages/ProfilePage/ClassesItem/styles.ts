import styled from 'styled-components';

export const Container = styled.li`
  border-bottom: solid 0.1rem var(--color-line-in-white);    
  position: relative;   
  margin: 2rem 0;
  padding: 3rem 0; 
  display: flex;   
  flex-direction: column;
  align-items: center;
  justify-content: center;    
`;

export const SubjectCost = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 2rem;

  div + div{
    margin-left: 2rem;
  }

  @media(min-width: 50rem){
  }
`

export const ScheduleItems = styled.div`
  width: 100%;
  display: grid;
  align-items: flex-end;
  margin-bottom: 3rem;
  grid-template-rows: 1fr 1fr 3rem;        
  grid-template-columns: repeat(2, 1fr); 
  gap: 1rem 3rem;           
  grid-template-areas:      
    'week_day week_day'
    'from to'
    'remove remove';  

  @media(min-width: 50rem){
    margin-bottom: 3rem;
    grid-template-rows: 1fr 3rem;        
    grid-template-columns: repeat(5, 1fr); 
    gap: 1rem 3rem;           
    grid-template-areas:      
      'week_day week_day week_day from to '
      'remove remove remove remove remove'
    }  
`

export const Remove = styled.span`
  grid-area: remove;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  line-height: 2rem;
  font-family: Archivo;      
  cursor: pointer;
  color: red;
`

export const Cost = styled.div`
  grid-area: cost; 
  width: 16rem;

  @media(min-width: 50rem){
    width: 35rem;
  }

`

export const Subject = styled.div`
  grid-area: subject;  
  width: 100%;
`

export const WeekDay = styled.div`  
  grid-area: week_day;
`

export const From = styled.div`  
  grid-area: from;
`

export const To = styled.div`  
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
  right: 0rem;
  top: 2rem;
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

