import React from "react";
// import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
// import Home from "./pages/home";
// import Profile from "./pages/profile";
// import CreatePost from "./pages/CreatePost";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import useToken from './useToken.js';

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

return (
    <div className="wrapper">
        <Router>
            <Nav />
            <Wrapper>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/home" component={Home} />
                {/* <Route exact path="/profile" component={Profile} /> */}
                {/* <Route exact path="/CreatePost" component={CreatePost} /> */}
            </Switch>
            </Wrapper>
            <Footer />
        </Router>
    </div>
);
}
export default App;
