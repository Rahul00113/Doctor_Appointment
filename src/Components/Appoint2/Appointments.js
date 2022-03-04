import  React,{useState,useEffect} from 'react';
import { Container,Button,Row,Col} from 'react-bootstrap';
import './Appointments.scss'
import Footer from '../../Layout/Footer'
import Notification from './Notification';



function Appointments() {



    const getDatafromLS=()=>{
        const data = localStorage.getItem('inputState');
        if(data){
            return JSON.parse(data);
        }
        else{
            return []
        }
    }

   

    const [inputState, setInputState] = useState(getDatafromLS())
      const handleChange = (event) => {
        event.persist();
        // console.log("Event :", event);
        let { name, value } = event.target;
   
    setInputState({ ...inputState, [name]: value });
    // console.log("input value:", inputState);
  }

  const submitHandle = (event) => {
    event.preventDefault();
    console.log("after submit:", inputState);
    alert("Appointment Done ");

    }
    useEffect(()=>{
window.localStorage.setItem('inputState',JSON.stringify(inputState));
    },[inputState])
  

  return (

<div className='appoin_back'>
    {/* <Container> */}
    {/* <Row> */}
    {/* <Col  sm={8}> */}
<Container className="appoint">
  <h2 className='appoin_head'>Appointment</h2>
  <form onSubmit={submitHandle} >

  <label className='appoin_lab'>Name :</label><br/>
  <input 
  name='username'
  type='text'
  placeholder='Enter Full Name'
  className='appoin_inbox'
  onChange={handleChange}
  /><br/>
  

  <label className='appoin_lab'>Address :</label><br/>
  <input 
  name='address'
  type='text'
  className='appoin_inbox'
  onChange={handleChange}
  /><br/>
 
  <label className='appoin_lab'>Phone Number :</label><br/>
  <input 
  name='phone'
  type='text'
  placeholder='Phone Number'
  className='appoin_inbox'
  onChange={handleChange}
  /><br/>
 

  <label className='appoin_lab'>Email Id :</label><br/>
  <input 
  name='email'
  type='email'
  placeholder='Enter Email Id'
  className='appoin_inbox'
  onChange={handleChange}
  /><br/>
  

  <label className='appoin_lab'>Dr.Name :</label><br/>
  <select 
  name='docname'
  type='text'
  placeholder='Enter Dr.Name'
  className='appoin_inbox'
  onChange={handleChange}
 >
  <option value="Dr.Lorem Ipsum 1">Dr. Lorem Ipsum 1</option>
  <option value="Dr.Lorem Ipsum 2">Dr. Lorem Ipsum 2</option>
  <option value="Dr.Lorem Ipsum 3">Dr. Lorem Ipsum 3</option>
  <option value="Dr.Lorem Ipsum 4">Dr. Lorem Ipsum 4</option>
  <option value="Dr.Lorem Ipsum 5">Dr. Lorem Ipsum 5</option>
  <option value="Dr.Lorem Ipsum 6">Dr. Lorem Ipsum 6</option>
  <option value="Dr.Lorem Ipsum 7">Dr. Lorem Ipsum 7</option>
  <option value="Dr.Lorem Ipsum 8">Dr. Lorem Ipsum 8</option>
  
</select>
<br/>
 

  <div className='date_time'>

    <div className='appoin_date'>
  <label className='appoin_lab'>Date :</label><br/>
  <input 
  name='date'
  type='date'
  onChange={handleChange}
  /><br/>
 
              </div>

  <div className='appoin_time'>
  <label className='appoin_lab'>Time :</label><br/>
  <select 
  name="time" id="time" 
  className='appoin_sel' 
  onChange={handleChange}
 >
  <option value="8am-10am">8am-10am</option>
  <option value="12pm-2pm">12pm-2pm</option>
  <option value="3pm-4pm">3pm-4pm</option>
  <option value="6pm-8pm">6pm-8pm</option>
</select>

</div>

</div><br/><br/>

<Button type='submit' className='appoin_butn' >Submit</Button>
  </form>
  
  </Container><br/>
  {/* </Col> */}
 {/* </Row> <Col  sm={4}> */}
           
      {/* {inputState.length < 1 && <p>No Appointments</p>} */}
    
      {/* <Notification inputState={inputState} /> */}
       
  {/* </Col> */}
  {/* </Row> */}
  {/* </Container> */}
  <Footer />
</div>
  )
}

export default Appointments