import styled from 'styled-components';

export const FieldSet = styled.fieldset`
  width: 100%;
  margin-top: 5rem; 
`

export const Title = styled.legend`
  width: 100%;
  font-family: Archivo;
  font-weight: bold;
  font-size: 2.5rem;
  color: var(--color-text-title);
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Divider = styled.hr`
  margin: 3rem 0;
  width: 100%; 
  height: 1px; 
  background: var(--color-line-in-white);  
`

export const AddSchedule = styled.span`
  font-family: Archivo;
  color: var(--color-primary-dark);
  font-size: 1.6rem;
  cursor: pointer;

    :hover{
      color: var(--color-primary-darker);
    }
`