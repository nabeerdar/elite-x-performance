import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
 import MainLayout from './MainLayout';
// import Navbar from './Components/Navbar';
import Home from './Components/Home';
import ActivityPage from './Components/ActivityPage';
import MonthFree from './Components/MonthFree';
import Footer from './Components/Footer';
import Strength from './Components/Strength';
import Cardiac from './Components/Cardiac';
import Flexibility from './Components/Flexibility';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import JoinNow from './Components/JoinNow';
import AuthForms from './Components/AuthForms';
import Authenticate from './Components/SigninPage/Authenticate';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/signin" element={<Authenticate />} />
        <Route path="/activity-page" element={<ActivityPage />} />
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/month-free" element={<MonthFree />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/Strength" element={<Strength />} />
        <Route path="/Cardiac" element={<Cardiac />} />
        <Route path="/Flexibility" element={<Flexibility />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/JoinNow" element={<JoinNow />} />
        <Route path="/AuthForms" element={<AuthForms />} />
      </Routes>
    </Router>
  );
}

export default App;
