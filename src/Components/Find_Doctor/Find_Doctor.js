
import { Card ,Row,Col, Container} from 'react-bootstrap'
import docData from '../Doctors.json'
import {useNavigate} from 'react-router-dom'
import './Find_Doctor.scss'
import * as React from 'react';
import Button from '@mui/material/Button';
import Footer from '../../Layout/Footer' 


function Find_Doctor() {

  const navigate=useNavigate();
  const navi=()=>{
    navigate('/login');
  }

  return (
    <div className='fd_back'>
     
      <h2 className='fd_doc'>Our Doctors</h2>
    
      <Container>
            <Row xs={1} md={4} className="g-4 ">
            {
                docData.Doctor.map((doct)=>
                <React.Fragment key={doct.sd_id}>
                 <Col>
                   <Card className='mycard'>
                   <Card.Img variant="top" src={doct.doc_img}  height="150px" />
                     <Card.Body>
                     <Card.Title>Dr. {doct.doc_name}</Card.Title>
                     <Card.Title>Specialty :<h6> {doct.doc_specialty}</h6></Card.Title>
                     <Card.Title><h6> {doct.doc_description}</h6></Card.Title>
                     <Button variant="outlined" onClick={navi} type="submit" className='fd_butn'>Appointment</Button>
                      </Card.Body>
                     </Card>
                    
                 </Col>


                </React.Fragment>
                )
}
             </Row> <br/>
             </Container>
             <Footer />
    </div>
  )
}

export default Find_Doctor