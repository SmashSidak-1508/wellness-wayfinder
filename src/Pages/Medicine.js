import React from 'react'
import Doctors from '../Components/Doctors'
import Footer from '../Components/Footer'
import Chatbot from '../Components/Chabot'
import Navbar from '../Components/Navbar'
import About from './About'
import Reviews from './Reviews'

const Medicine = () => {
  return (
    <div className='medcine-section'> 
    <Navbar/>
    <Doctors/>
    <Chatbot/>
    <About/>
    <Reviews/>
    <Footer /></div>
  )
}

export default Medicine