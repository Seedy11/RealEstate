/** @format */
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Images/logo.png";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { HeaderContainer } from "./Header.element";

function Header() {
  return (
    <HeaderContainer>
      <Navbar expand='lg' bg='light' sticky='top' className='shadow-sm py-3'>
        <Container>
          {/* Logo */}
          <Navbar.Brand as={Link} to='/'>
            <img
              src={Logo}
              alt='Logo'
              style={{ width: "5rem", height: "auto" }}
            />
          </Navbar.Brand>

          {/* Hamburger menu for mobile */}
          <Navbar.Toggle aria-controls='basic-navbar-nav' />

          {/* Navigation links */}
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto gap-3'>
              <Nav.Link as={Link} to='/' className='nav-decoration'>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to='/letting' className='nav-decoration'>
                Letting
              </Nav.Link>
              <Nav.Link as={Link} to='/adminPage' className='nav-decoration'>
                Admin Page
              </Nav.Link>
              <Nav.Link as={Link} to='/dashboard' className='nav-decoration'>
                Dashboard
              </Nav.Link>
            </Nav>

            {/* Right-aligned Login button */}
            <Nav className='ms-auto'>
              <Button as={Link} to='/login' variant='primary' className='px-4'>
                Login
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderContainer>
  );
}

export default Header;
