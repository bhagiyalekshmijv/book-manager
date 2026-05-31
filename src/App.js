import React , { useState } from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return(
  <div>
    <Navbar/>
    <div className='container mt-3'>
      <Outlet />
      </div>
  </div>
);
}

export default App;