import React from 'react';

import { 
  Container,
} from './styles';

import options from '../../../utils/options'
import convertMinutesToHours from '../../../utils/convertMinutesToHours'

interface ClassesProps{  
  id: number;
  week_day: number;
  from: number;
  to: number;
  class_id: number;
}

export interface Classes {
  id: number;
  subject: string;  
  cost: number;  
  classes: Array<{
    id: number;
    week_day: number;
    from: number;
    to: number;
    class_id: number; 
  }>;
}

interface ClassesItemsProps {
  classes: Classes;
}

const ClassesItem: React.FC<ClassesItemsProps> = ({ classes }) => {

  // function removeScheduleItem(id: number) {        
  //   setScheduleItems(
  //     scheduleItems.filter( item => item.id !== id) 
  //   )
  // } 

  return (

    <Container>
      
    </Container>


  );
}

export default ClassesItem;