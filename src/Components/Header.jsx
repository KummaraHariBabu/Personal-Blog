// src/components/Header.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../Style/header.css"
import logo from '../Assets/logo.jpg'
const Header = () => {
  return (
       <Navbar bg="rgb(181,181,181)" variant="dark" expand="lg" >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="/" className='overflow-hidden'><img src={logo} alt="logo" className='logo-img'/></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/"><i class="bi bi-house-door-fill"> Home</i></Nav.Link>
            <Nav.Link href="/about"><i class="bi bi-file-earmark-person"> About</i></Nav.Link>
            <Nav.Link href="/qualification"><i class="bi bi-mortarboard"> Qualifications</i></Nav.Link>
            <Nav.Link href="/contact"><i class="bi bi-telephone"> Contact</i></Nav.Link>
            <Nav.Link href='/profiles'><i class="bi bi-link-45deg"> Profile</i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
};

export default Header;
