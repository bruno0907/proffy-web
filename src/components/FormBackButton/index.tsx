import React from 'react';
import { useHistory } from 'react-router-dom'

import back from '../../assets/images/icons/back.svg'

import { Button } from './styles';

const FormBackButton: React.FC = () => {
  const history = useHistory()

  return (
    <Button>      
      <img src={back} alt="" onClick={() => history.goBack()}/>      
    </Button>
  );
}

export default FormBackButton;