// UserForm.js
import React, { useState } from 'react';
import '../Styles/UserForm.css';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    weight: '',
    height: '',
    weightLossPlan: '',
    mealsPerDay: 3, // Default value for meals per day
    activityLevel:2,
    gender: '', 
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSliderChanges = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      activityLevel: parseInt(e.target.value, 10),
    }));
  };
  

  const handleSliderChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      mealsPerDay: parseInt(e.target.value, 10),
    }));
  };
  const handleGenderChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      gender: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here, e.g., send data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="user-form">
      <h1 class="cent">User Details</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Age:
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Weight:
            <input
              type="text"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Height:
            <input
              type="text"
              name="height"
              value={formData.height}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Choose your gender:
            <div>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleGenderChange}
                required
              />
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleGenderChange}
                required
              />
              <label htmlFor="female">Female</label>
            </div>
          </label>

          <label>
            Choose your weight loss plan:
            <select
              name="weightLossPlan"
              value={formData.weightLossPlan}
              onChange={handleChange}
              required
            >
              <option value="">Select a plan</option>
              <option value="Maintain">Maintain weight</option>
              <option value="MildLoss">Mild weight loss</option>
              <option value="WeightLoss">Weight loss</option>
              <option value="ExtremeLoss">Extreme weight loss</option>
            </select>
          </label>
          <label>
            Choose your activity level: {formData.activityLevel}
            <input
              type="range"
              name="activityLevel"
              min="1"
              max="5"
              value={formData.activityLevel}
              onChange={handleSliderChanges}
              required
            />
          </label>

          <label>
            Meals per day: {formData.mealsPerDay}
            <input
              type="range"
              name="mealsPerDay"
              min="3"
              max="5"
              value={formData.mealsPerDay}
              onChange={handleSliderChange}
              required
            />
          </label>

          <button type="submit" class="sub">Submit</button>
        </form>
      ) : (
        <div>
          <p>Form submitted successfully!</p>
          {/* You can render additional UI elements or redirect the user here */}
        </div>
      )}
    </div>
  );
};

export default UserForm;
