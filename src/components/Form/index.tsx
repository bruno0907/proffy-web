import React from 'react';

import { FormWrapper } from './styles';

const Form: React.FC = ({ children }) => {
  return (
    <FormWrapper>
      {children}
    </FormWrapper>
  );  
}

export default Form;