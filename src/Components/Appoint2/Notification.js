import React from 'react'
import {Card,Button} from 'react-bootstrap'
import './Notification.scss'
import { useNavigate } from 'react-router-dom'
import { WindowRounded } from '@mui/icons-material'

const Notification = (props) => {
const navigate=useNavigate();
  const RemoveNotify=()=>{
    window.localStorage.clear();
    navigate('/')
  }
  const getData=()=>{
    const data = localStorage.getItem('inputState');
    if(data){
        return JSON.parse(data);
    }
}
  
  console.log('value :',props);

  return (
    <div>
      
      <Card style={{ width: '18rem' }} className='mycard_his'>
  <Card.Body>
    <h6 className='card_top'>Appointments</h6>
   <Card.Text>Patient Name : {props.inputState.username} </Card.Text> 
    <Card.Text>Dr.Name : </Card.Text>
    <Card.Text type="date" dateFormate='dd-mm-yy'>
    Appointment Date: 
    </Card.Text>
    <Card.Text>
    Appointment Time :
    </Card.Text>
  </Card.Body>
  <Button className='his_butn' onClick={RemoveNotify}>
  Remove
  </Button>
</Card>

    </div>
  )
}

export default Notification