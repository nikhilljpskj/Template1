
import React from 'react';

import './App.css';
import Template1 from "./Template1"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';


function App() {
  return (
    <div className='App'>
    

<Router> 
      <Routes>
      <Route path="/" default element={<Home />} />

        <Route path="/template1" element={<Template1 />} />


      </Routes>
    </Router>
    </div>
    
  );
}

export default App;
