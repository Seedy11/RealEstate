/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Images/logo.png";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { HeaderContainer } from "./Header.element";
//
function Header() {
  return (
    <HeaderContainer>
      <Container>
        <Navbar expand='sm'>
          <Navbar.Brand href='#home'>
            <img
              src={Logo}
              className='card-img-top'
              alt='...'
              style={{ width: "5rem" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link>
                <Link to='/' className='nav-decoration'>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link to='login'>
                <Link to='login' className='nav-decoration'>
                  Login
                </Link>
              </Nav.Link>

              <Nav.Link href='#action/3.1'>
                <Link to='letting' className='nav-decoration'>
                  Letting
                </Link>
              </Nav.Link>
              <Nav.Link href='#action/3.1'>
                <Link to='adminPage' className='nav-decoration'>
                  Admin Page
                </Link>
              </Nav.Link>
              <Nav.Link href='#action/3.1'>
                <Link to='dashboard' className='nav-decoration'>
                  Dashboard
                </Link>
              </Nav.Link>
              <NavDropdown title='Admin' id='nav-dropdown'>
                <NavDropdown.Item eventKey='4.1'>
                  {" "}
                  <Link to='rentalForm' className='nav-decoration'>
                    Add Property
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey='4.1'>
                  {" "}
                  <Link to='register' className='nav-decoration'>
                    Add user admin
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </HeaderContainer>
  );
}

export default Header;
