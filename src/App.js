import './App.css';
import Navbar from './components/nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import movieCard from './components/movieCard'

function App() {
  const movies = ['1', '2', '3']



  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/'/>
      </Switch>
    </Router>
  );
}

export default App;
