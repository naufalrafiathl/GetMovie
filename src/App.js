import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import Likes from './components/Likes';
import Bookmark from './components/Bookmark'

function App() {

  return (
    <>
    <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/likes" component={Likes}/>
      <Route path="/bookmark" component={Bookmark}/>
    </Switch>
    </Router>
    </>
 
  );
}

export default App;
