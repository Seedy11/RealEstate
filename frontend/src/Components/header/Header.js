/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "../../Images/logo.png";
import HeaderContainer from "./Header.element";

function Header() {
  return (
    <HeaderContainer>
      <Navbar expand='lg'>
        <Navbar.Brand href='#home'>
          <img
            src={Logo}
            className='card-img-top'
            alt='...'
            style={{ width: "7rem" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link>
              <Link to='/' style={{ textDecoration: "none" }}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link to='login'>
              <Link to='login' style={{ textDecoration: "none" }}>
                Login
              </Link>
            </Nav.Link>
            {/* <Nav.Link href='#action/3.2'>
              <Link to='mortgage' style={{ textDecoration: "none" }}>
                Mortgage
              </Link>
            </Nav.Link> */}
            <Nav.Link href='#action/3.1'>
              <Link to='letting' style={{ textDecoration: "none" }}>
                Letting
              </Link>
            </Nav.Link>
            <NavDropdown title='Admin' id='nav-dropdown'>
              <NavDropdown.Item eventKey='4.1'>
                {" "}
                <Link to='rentalForm' style={{ textDecoration: "none" }}>
                  Add Property
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey='4.1'>
                {" "}
                <Link to='register' style={{ textDecoration: "none" }}>
                  Add user admin
                </Link>
              </NavDropdown.Item>

              {/* <NavDropdown.Item eventKey='4.2'>Another action</NavDropdown.Item>
              <NavDropdown.Item eventKey='4.3'>
                Something else here
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey='4.4'>Separated link</NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </HeaderContainer>
  );
}

export default Header;
