import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import Gym from "./Pages/Gym";
import Nutrition from "./Pages/Nutrition";
import Medicine from "./Pages/Medicine";

function App() {
  return (
    <div className="App">
      <Router basename="/wellness-wayfinder">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gym" element={<Gym />} />
          <Route path="/medicine" element={<Medicine/>} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
