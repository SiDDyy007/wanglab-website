import {React} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Stack from 'react-bootstrap/Stack';
import './App.css'; 
import TitleBar from './components/TitleBar.js';
import Navigation from './components/Navigation.js'; 
import Research from './components/Research.js';
import Home from './components/Home.js';
import Publications from './components/Publications.js';
import Opportunities from './components/Opportunities.js'
import LabComputing from './components/LabComputing.js';
import LabTools from './components/LabTools.js';
import Members  from './components/Members.js';
import Contact from './components/Contact.js';
import Teaching from './components/Teaching.js';
import Resources from './components/Resources.js';

function App() {
  return (
    <Router>
    <div className="App">
      <TitleBar labName='Wang Bioinformatics Lab @ UCR' />        
      <div className="flexbox-container">
        <div className='left-container'>
          <Navigation />
        </div>
          
        <div className='right-container'>
        <Routes>
          <Route path="/research" element={<Research />} />
          <Route path='/' element = {<Home />} />
          <Route path='/publications' element = {<Publications />} />
          <Route path='/opportunities' element = {<Opportunities />} />
          <Route path='/members' element = {<Members />} />
          <Route path='/tools' element = {<LabTools />} />
          <Route path='/computing' element = {<LabComputing />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/teaching' element={<Teaching />} />
          <Route path='/resources' element={<Resources />} />
        </Routes>
        </div>
      </div>

      <div className="ucr-logo">
        <img src="ucr-logo.svg" alt="UCR Logo" className="ucr-image"/>
      </div>
    </div>
    </Router>
  );
}

export default App;
