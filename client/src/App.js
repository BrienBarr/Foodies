import React from "react";
// import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import PostCard from "./components/PostCard";
import UserCard from "./components/UserCard";
import Footer from "./components/Footer";
// import Home from "./pages/home";
// import Profile from "./pages/profile";
// import CreatePost from "./pages/CreatePost";



function App() {
return (
    <div>
        {/* <Router> */}
            <Nav />
            <Wrapper>
              <PostCard />
              {/* <UserCard /> */}
            {/* <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/CreatePost" component={CreatePost} />
            </Switch> */}
            </Wrapper>
            <Footer />
        {/* </Router> */}
    </div>
);
}
export default App;
