import React from 'react'
import "../Styles/Gym.css";
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import UserForm from '../Components/UserForm';
const Gym = () => {
  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div class ="container">
    <h1 class="cont">Fitness Recommendations</h1>
      <p class="fit">Welcome to our personalized fitness program! Whether you're looking to build muscle, lose weight, or maintain a healthy lifestyle, we've got you covered with tailored gym and diet recommendations.</p>

      <h1 class="cont">Gym and Diet Plan</h1>
      <p>Discover our customized workout and diet plans designed to help you achieve your fitness goals. Our expert trainers have curated a set of exercises and nutritional advice to optimize your health and well-being.</p>
      <UserForm/>
    </div>
    <div>
      <Footer/>
      </div>
    </>
      
    
    
  )
}

export default Gym;