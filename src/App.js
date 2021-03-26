import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import Likes from './components/Likes';
import Bookmark from './components/Bookmark'
import {GlobalProvider} from "./context/GlobalState"
import Footer from "./components/Footer"
function App() {

  return (
    <>
    <GlobalProvider>
    <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/likes" component={Likes}/>
      <Route path="/bookmark" component={Bookmark}/>
    </Switch>
      <Footer></Footer>
    </Router>
    </GlobalProvider>
    </>
 
  );
}

export default App;
