import React, { HTMLAttributes } from 'react';

import { FieldSet, Title, Divider, AddSchedule } from './styles';

interface FormSectionProp extends HTMLAttributes<HTMLSpanElement> {
  title?: string;
  addSchedule?: boolean;  
}

const FormSection: React.FC<FormSectionProp> = ({ children, title, addSchedule, onClick }) => {
  return (
    <FieldSet>      
      <Title>
        {title}
        {addSchedule && <AddSchedule onClick={onClick}>+ Novo horário</AddSchedule>}
      </Title>    
      <Divider /> 
      {children}
    </FieldSet>
  );
}

export default FormSection;