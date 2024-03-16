import React from 'react'
import "../Styles/Gym.css";
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
// import UserForm from '../Components/UserForm';
import ExerciseSchedule from '../Components/ExerciseSchedule';
const Gym = () => {
  return (
    <>
    <div>
      <Navbar/>
    </div>
    <ExerciseSchedule/>
      <div>
      <Footer/>
      </div>
    </>
      
    
    
  )
}

export default Gym;