import React from 'react'
import Doctors from '../Components/Doctors'
import Footer from '../Components/Footer'
import Chatbot from '../Components/Chabot'
import Navbar from '../Components/Navbar'

const Medicine = () => {
  return (
    <div className='medcine-section'> 
    <Navbar/>
    <Doctors/>
    <Chatbot/>
    <Footer /></div>
  )
}

export default Medicine