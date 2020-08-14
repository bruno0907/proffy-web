import React from 'react';

import { Container, Form } from './styles';

interface FormAsideProps{
  label: string;
  description?: string;
}

const FormAside: React.FC<FormAsideProps> = ({ label, description, children }) => {
  return (
    <Container>
      <Form>
        <legend>
          <h2>{label}</h2>
          <p>{description}</p>
        </legend>
        <fieldset>
          {children}
        </fieldset>
      </Form>
    </Container>
  );
}

export default FormAside;