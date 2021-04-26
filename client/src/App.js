// import React from 'react';
import React, { useState } from 'react';
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
import Posts from './pages/Posts';
import useToken from './useToken.js';

function App() {
  // const { token, setToken } = useToken();

  // if(!token) {
  //   return <Login setToken={setToken} />;
  // }

  return (
    <div className="wrapper">
        <Router>
          <div>
            <Nav />
            {/* { () => { if(user) { return <Nav />; } } }             */}
            <Wrapper>
              <Switch>
                  {/* <Route exact path="/login" component={Login} /> */}
                  <Route exact path="/signup" component={SignUp} />
                  {/* <Route exact path="/home" component={Home} /> */}
                  <Route path="/">
                    <Home />
                  </Route>
                  <Route path="/profile">
                    <Profile />
                  </Route>
                  <Route path="/posts">
                    <Posts />
                  </Route>
                  <Route path="/create">
                    <CreatePost />
                  </Route>
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
