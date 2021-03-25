import './App.css';
import Navbar from './components/nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect, useState } from "react";

function App() {

  return (
    <>
    <Router>
    <Navbar/>
    </Router>
    </>
 
  );
}

export default App;
