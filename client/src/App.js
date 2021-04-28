import React from 'react';
// import React, { useState } from 'react';
import Nav from './components/Nav/';
import Wrapper from './components/Wrapper/';
import Footer from './components/Footer/';
import Profile from './pages/profile';
import CreatePost from "./pages/CreatePost";
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import './App.css';
import Login from './components/Login/';
import SignUp from './components/SignUp/';
import Home from './pages/home';
import ViewPost from "./pages/viewPost"
import Posts from './pages/Posts';
import useToken from './useToken';


function App() {
  const { token } = useToken();
  return (
    <div className="wrapper">
        <Router>
          <div>
            {/* <Nav /> */}
            { (token) ? (<Nav />) : null }            
            <Wrapper>
                
              <Switch>
                  <Route exact path="/signup" component={SignUp} />
                  <Route exact path="/login" component={Login} />              
                  <Route exact path="/" render={props => <Home {...props} />} />
                  <Route exact path="/view/:id" render={props => <ViewPost {...props} />} />
                  <Route exact path="/profile" render={props => <Profile {...props} />} />
                  <Route exact path="/posts" render={props => <Posts {...props} />} />
                  
                  <Route exact path="/create" render={props => <CreatePost {...props} />} />
              </Switch>
            </Wrapper>
            { (token) ? (<Footer />) : null }
            {/* <Footer /> */}
          </div>
        </Router>
    </div>
  );
}
export default App;
