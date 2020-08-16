import React from 'react';

import { Container, Grid } from './styles';


const FormAside: React.FC = ({ children }) => {

  return (
    <Container>
      <Grid>
        {children}
      </Grid>
    </Container>
  );
}

export default FormAside;