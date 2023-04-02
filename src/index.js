import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
  Link
} from 'react-router-dom';

import HomePage from './Pages/Home';
import AboutPage from './Pages/About';
import ContactPage from './Pages/Contact';
import SolutionPage from './Pages/Solution';
import FaqPage from './Pages/Faq';
import Destination from './Pages/Destination';
import Navbar from './Components/Navbar';
import FlipCard from './Components/FlipCard';
import Option from './Components/Option';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path = '/' element = {<HomePage/>}/>
        <Route path = '/about' element = {<AboutPage/>}></Route>
        <Route path = '/contact' element = {<ContactPage/>}></Route>
        <Route path = '/solution' element = {<SolutionPage/>}></Route>
        <Route path = '/results' element = {<Option option_name = "Option Name" option_description = "option description"/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);