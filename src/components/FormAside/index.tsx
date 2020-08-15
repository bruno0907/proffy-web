import React from 'react';
import { Link, useHistory } from 'react-router-dom'

import back from '../../assets/images/icons/back.svg'

import { Container, BackButton, Form } from './styles';

import SignUp from '../../components/SignUp'

interface FormAsideProps{
  label: string;
  description?: string;
  register?: boolean;  
  signUp?: boolean;
  goBack?: boolean;
}

const FormAside: React.FC<FormAsideProps> = ({ label, register, description, signUp, goBack, children }) => {
  const history = useHistory();

  return (
    <Container>
      
        <Form>
          <BackButton>
            {goBack && 
              <img src={back} alt="" onClick={() => history.goBack()}/>
            }
          </BackButton>

          <form>          
            <legend>
              <div>
                <h2>  
                  {label}                
                </h2>
                { register && <Link to="/register">Criar uma conta</Link> }
              </div>
              <p>{description}</p>
            </legend>
            <fieldset>
              {children}
            </fieldset>          
          </form> 

          { signUp &&
            <SignUp />     
          }
        </Form>
      
    </Container>
  );
}

export default FormAside;