import React from 'react';
import Nav from './components/Nav/';
import Wrapper from './components/Wrapper/';
import Footer from './components/Footer/';
import Profile from './pages/Profile';
import CreatePost from "./pages/CreatePost";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login/';
import SignUp from './components/SignUp/';
import Home from './pages/Home';
import useToken from './useToken.js';

function App() {
  // const { token, setToken } = useToken();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

return (
    <div className="wrapper">
        <Router>
          <div>
            <Nav />
            <Wrapper>
              <Switch>
                  <Route exact path="/" component={Login} />
                  <Route exact path="/signup" component={SignUp} />
                  <Route exact path="/home" component={Home} />
                  <Route exact path="/profile" component={Profile} />
                  <Route exact path="/create" component={CreatePost} />
              </Switch>
            </Wrapper>
            <Footer />
          </div>
        </Router>
    </div>
);
}
export default App;
