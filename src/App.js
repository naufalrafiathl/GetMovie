import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Likes from "./pages/Likes";
import Bookmark from "./pages/Bookmark";
import { GlobalProvider } from "./context/GlobalState";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useHistory } from 'react-router-dom';
function App() {
  const history = useHistory();
  const [isLogin, setLogin] = useState(false);

  return (
    <>
      {isLogin ? (
        <>
          <GlobalProvider>
            <Router history={history}>
              <Switch>
              <Route path="/login" component={Login} />
                <Route exact path="/" component={Home} />
                <Route path="/likes" component={Likes} />
                <Route path="/bookmark" component={Bookmark} />
              </Switch>
              <Footer></Footer>
            </Router>
          </GlobalProvider>
        </>
      ) : (
        <>
          <GlobalProvider>
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/likes" component={Likes} />
                <Route path="/bookmark" component={Bookmark} />
              </Switch>
              <Footer></Footer>
            </Router>
          </GlobalProvider>
        </>
      )}
    </>
  );
}

export default App;
