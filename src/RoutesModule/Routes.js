import React from 'react'
import { Route,Routes,BrowserRouter as Router } from 'react-router-dom'
import Login from '../Authentication/Login/Login'
import Registration from '../Authentication/Registration/Registration'
import About from '../Components/About/About'
import Home from '../Components/Home/Home'
import Header from '../Layout/Header'
import Find_Doctor from '../Components/Find_Doctor/Find_Doctor'

import Appointments from '../Components/Appoint2/Appointments'
import Notification from '../Components/Appoint2/Notification'


const RootRoutes = () => {
  return (
    <Router>
        <Header />
        <Routes >
            <Route path='/' element={<Home />} />
            <Route path='registration' element={<Registration />} />
            <Route path='login' element={<Login />} />
            <Route path='about' element={<About />} />
           
            <Route path='find_doc/:doc_id' element={<Find_Doctor />} />
                      <Route path='appointments' element={<Appointments/>} />
          
            <Route path='notification' element={<Notification/>} />
        </Routes>
    </Router>
  )
}

export default RootRoutes