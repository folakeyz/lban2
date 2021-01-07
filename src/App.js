import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import HeroSection from './components/Hero/HeroSection';
import Home from './components/pages/Home';



function App() {
  return (
  <>
  <Router>
     <Navbar />
     <switch>
       <Route path='/' exact component={Home} />
     </switch>
     </Router>
    </>
  );
}

export default App;
