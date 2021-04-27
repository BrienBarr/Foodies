import React from 'react';
// import React, { useState } from 'react';
import Nav from './components/Nav/';
import Wrapper from './components/Wrapper/';
import Footer from './components/Footer/';
import Profile from './pages/profile';
import CreatePost from "./pages/CreatePost";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login/';
import SignUp from './components/SignUp/';
import Home from './pages/home';
import View from "./pages/viewPost"
import Posts from './pages/Posts';
import useToken from './useToken.js';

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
        <Router>
          <div>
            <Nav />
            {/* { () => { if(user) { return <Nav />; } } }             */}
            <Wrapper>
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/login" component={Login} />
              <Switch>              
                  <Route exact path="/" render={props => <Home {...props} />} />
                  <Route exact path="/view" render={props => <View {...props} />} />
                  <Route exact path="/profile" render={props => <Profile {...props} />} />
                  <Route exact path="/posts" render={props => <Posts {...props} />} />
                  <Route exact path="/create" render={props => <CreatePost {...props} />} />
              </Switch>
            </Wrapper>
            <Footer />
            {/* { () => { if(user) { return <Footer />; } } }    */}
          </div>
        </Router>
    </div>
  );
}
export default App;
