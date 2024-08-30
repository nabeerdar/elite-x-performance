import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from './Components/Home';
import ActivityPage from "./Components/ActivityPage";
import Navbar from './Components/Navbar';
import MonthFree from "./Components/MonthFree";
import Footer from './Components/Footer';
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Home/>
      <ActivityPage/>
      <MonthFree/>
      <Footer/>
      <Outlet />
    </>
  );
};

export default MainLayout;
