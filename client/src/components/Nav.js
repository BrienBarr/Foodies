// create navbar component to be imported into app.jsimport React from "react";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function Navigation() {
  return(
  <Navbar bg="light" expand="lg">
  <Navbar.Brand className="badge-info text-white " href="#/Home">Foodies</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#/profile">Profile</Nav.Link>
      <Nav.Link href="#/CreatePost">New Post</Nav.Link>
      <Nav.Link href="#/home">Home</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}
export default Navigation;