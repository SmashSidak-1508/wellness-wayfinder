import React from 'react'
import Doctors from '../Components/Doctors'
import Footer from '../Components/Footer'
import Chatbot from '../Components/Chabot'
import Navbar from '../Components/Navbar'
import BookAppointment from '../Components/BookAppointment'

const Medicine = () => {
  return (
    <div className='medcine-section'> 
    <Navbar/>
    <Doctors/>
    <Chatbot/>
    <BookAppointment/>
    <Footer /></div>
  )
}

export default Medicine