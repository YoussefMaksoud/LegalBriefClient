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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path = '/' element = {<HomePage/>}/>
        <Route path = '/about' element = {<AboutPage/>}></Route>
        <Route path = '/contact' element = {<ContactPage/>}></Route>
        <Route path = '/solution' element = {<SolutionPage/>}></Route>
        <Route path = '/faq' element = {<FaqPage/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);